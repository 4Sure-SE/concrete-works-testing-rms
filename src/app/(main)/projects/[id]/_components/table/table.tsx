"use client";

import { ArchiveX } from "lucide-react";
import { Fragment, useOptimistic, useTransition } from "react";
import { toast } from "sonner";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type { Callbacks } from "@/lib/types/actions.types";
import type { Projects } from "@/lib/types/project";
import type {
    ProjectMaterialTest,
    ProjectWorkItemTest,
    TestType,
} from "@/lib/types/project-test/project-test.types";
import { withCallbacks } from "@/lib/utils";
import { updateProjectTestOnFile } from "@/server/actions/projects/update-test-on-file";
import { ProjectDetailsActionButtons } from "../action-buttons/action-buttons";
import { updateProjectTest } from "../test-columns/update-project-test";
import { MaterialsTable } from "./materials-table";
import { WorkItemsTable } from "./work-items-table";

interface ProjectWorkItemsTableProps {
    data: Projects;
    isReadOnly?: boolean;
}

type OptimisticAction = {
    type: "UPDATE_PENDING";
    payload: { testId: string; changeAmount: number; testType: TestType };
};

export function ProjectWorkItemsTable({
    data,
    isReadOnly = false,
}: ProjectWorkItemsTableProps) {
    const [isPending, startTransition] = useTransition();
    const [optimisticProjectData, setOptimisticProjectData] = useOptimistic<
        Projects,
        OptimisticAction
    >(data, (currentState, action) => {
        switch (action.type) {
            case "UPDATE_PENDING":
                return updateProjectTest(
                    currentState,
                    action.payload.testId,
                    action.payload.changeAmount,
                    action.payload.testType,
                );
            default:
                return currentState;
        }
    });

    const handleTestCountUpdate = async (
        testId: string,
        changeAmount: number,
        testType: TestType,
    ) => {
        if (isReadOnly) return;

        const callbacks: Callbacks<
            ProjectWorkItemTest | ProjectMaterialTest | null,
            string
        > = {
            onSuccess: () => {
                startTransition(() => {
                    toast.success("Test count updated successfully");
                });
            },
            onError: (error) => {
                startTransition(() => {
                    toast.error(error);
                });
            },
        };

        startTransition(() => {
            setOptimisticProjectData({
                type: "UPDATE_PENDING",
                payload: { testId, changeAmount, testType },
            });
        });

        const boundAction = updateProjectTestOnFile.bind(
            null,
            testId,
            changeAmount,
            testType,
        );
        const action = withCallbacks(boundAction, callbacks);
        await action();
    };
    return (
        <>
            {!isReadOnly && (
                <ProjectDetailsActionButtons
                    project={optimisticProjectData}
                    disabled={isPending}
                    isReadOnly={isReadOnly}
                />
            )}
            <div className="overflow-y-auto p-8">
                {optimisticProjectData.projectWorkItem?.length === 0 ? (
                    <div>
                        <div className="flex flex-col items-center justify-center p-30 text-base">
                            <ArchiveX className="mb-2 h-10 w-10"></ArchiveX>
                            No items of work found
                        </div>
                    </div>
                ) : (
                    <div
                        key={optimisticProjectData.id}
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
                                        Unit
                                    </TableHead>
                                    <TableHead className="text-center text-gray-700">
                                        Test Required
                                    </TableHead>
                                    <TableHead className="text-center text-gray-700">
                                        No. of Tests on File
                                    </TableHead>
                                    <TableHead className="text-center text-gray-700">
                                        Balance
                                    </TableHead>
                                    <TableHead className="px-2 text-center text-gray-700">
                                        Test Records
                                    </TableHead>
                                    <TableHead className="text-center text-gray-700">
                                        Status
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {optimisticProjectData.projectWorkItem?.map(
                                    (workItem) => (
                                        <Fragment
                                            key={`workItem-fragment-${workItem.id}`}
                                        >
                                            <WorkItemsTable
                                                workItem={workItem}
                                                onTestCountUpdate={
                                                    handleTestCountUpdate
                                                }
                                                isUpdating={isPending}
                                                isReadOnly={isReadOnly}
                                            />
                                            {workItem.materials.map(
                                                (material) => (
                                                    <MaterialsTable
                                                        key={`material-fragment-${material.id}`}
                                                        material={material}
                                                        onTestCountUpdate={
                                                            handleTestCountUpdate
                                                        }
                                                        isUpdating={isPending}
                                                        isReadOnly={isReadOnly}
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
