"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type { Projects } from "@/lib/types/project";
import type { TestUpdateType } from "@/lib/types/project-test/project-test.types";
import { tryCatch } from "@/lib/utils";
import { updateProjectTestOnFile } from "@/server/actions/projects/update-test-on-file";
import { ArchiveX } from "lucide-react";
import { Fragment, useState, useTransition } from "react";
import { toast } from "sonner";
import { ProjectDetailsActionButtons } from "../action-buttons/action-buttons";
import { updateProjectTest } from "../test-columns/update-project-test";
import { MaterialsTable } from "./materials-table";
import { WorkItemsTable } from "./work-items-table";

interface ProjectWorkItemsTableProps {
    initialProjectData: Projects;
    isReadOnly?: boolean;
}

export function ProjectWorkItemsTable({
    initialProjectData,
    isReadOnly = false,
    // updateProjectTestAction,
}: ProjectWorkItemsTableProps) {
    const [isPending, startTransition] = useTransition();
    const [projectData, setProjectData] = useState(initialProjectData);

    const handleTestCountUpdate = async (
        testId: string,
        changeAmount: number,
        testType: TestUpdateType,
    ) => {
        if (isReadOnly) return;

        startTransition(async () => {
            setProjectData((prevData) =>
                updateProjectTest(prevData, testId, changeAmount, testType),
            );

            const result = await tryCatch(
                updateProjectTestOnFile(testId, changeAmount, testType),
            );

            if (result.error) {
                toast.error("An error occurred while updating the test count");
                // revert state on error
                setProjectData((prevData) =>
                    updateProjectTest(
                        prevData,
                        testId,
                        -changeAmount,
                        testType,
                    ),
                );
                throw result.error;
            } else if (result.data) {
                toast.success(`Test count updated successfully`);
            }
        });
    };

    return (
        <>
            <ProjectDetailsActionButtons
                project={projectData}
                disabled={isPending}
                isReadOnly={isReadOnly}
            />
            <div className="overflow-y-auto p-8">
                {projectData.projectWorkItem?.length === 0 ? (
                    <div>
                        <div className="flex flex-col items-center justify-center p-30 text-base">
                            <ArchiveX className="mb-2 h-10 w-10"></ArchiveX>
                            No items of work found
                        </div>
                    </div>
                ) : (
                    <div
                        key={projectData.id}
                        className="rounded-md border"
                    >
                        <Table className="w-full border-separate border-spacing-0 overflow-hidden rounded-[7px]">
                            <TableHeader>
                                <TableRow className="bg-gray-100">
                                    <TableHead className="text-center text-gray-700">
                                        Item No
                                    </TableHead>
                                    <TableHead className="text-center text-gray-700">
                                        Description/Material
                                    </TableHead>
                                    <TableHead className="text-center text-gray-700">
                                        Quantity
                                    </TableHead>
                                    <TableHead className="text-center text-gray-700">
                                        Unit{" "}
                                    </TableHead>
                                    <TableHead className="text-center text-gray-700">
                                        Test Required
                                    </TableHead>
                                    <TableHead className="text-center text-gray-700">
                                        No. of Tests on File{" "}
                                    </TableHead>
                                    <TableHead className="text-center text-gray-700">
                                        Balance
                                    </TableHead>
                                    <TableHead className="px-6 text-center text-gray-700">
                                        Test Record
                                    </TableHead>
                                    <TableHead className="text-center text-gray-700">
                                        Status
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {projectData.projectWorkItem?.map(
                                    (workItem) => (
                                        <Fragment
                                            key={`workItem-fragment-${workItem.id}`}
                                        >
                                            <WorkItemsTable
                                                workItem={workItem}
                                                onTestCountUpdate={
                                                    handleTestCountUpdate
                                                }
                                                isReadOnly={isReadOnly}
                                                // updatingTests={updatingTests}
                                            />
                                            {workItem.materials.map(
                                                (material) => (
                                                    <MaterialsTable
                                                        key={`material-fragment-${material.id}`}
                                                        material={material}
                                                        onTestCountUpdate={
                                                            handleTestCountUpdate
                                                        }
                                                        isReadOnly={isReadOnly}
                                                        // updatingTests={
                                                        //     updatingTests
                                                        // }
                                                    />
                                                ),
                                            )}
                                            {workItem.materials.length === 0 &&
                                                workItem.itemTest.length ===
                                                    0 && (
                                                    <TableRow>
                                                        <TableCell
                                                            colSpan={8}
                                                            className="text-center text-muted-foreground"
                                                        >
                                                            No tests or
                                                            materials for this
                                                            item.
                                                        </TableCell>
                                                    </TableRow>
                                                )}
                                        </Fragment>
                                    ),
                                )}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </div>
        </>
    );
}
