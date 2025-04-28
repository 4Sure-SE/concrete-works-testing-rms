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
import { UpdateProjectTest } from "@/lib/utils";
import { ArchiveX } from "lucide-react";
import { Fragment, useState } from "react";
import { MaterialsTable } from "./materials-table";
import { WorkItemsTable } from "./work-items-table";

export function ProjectWorkItemsTable({
    project,
    onServerUpdate,
}: {
    project: Projects;
    onServerUpdate: (
        id: string | undefined,
        amount: number,
        type: "material" | "workItem",
    ) => Promise<number>;
}) {
    const [updatedProject, setUpdatedProject] = useState(project);
    const handleTestUpdate = (
        id: string | undefined,
        amount: number,
        type: "material" | "workItem",
    ) => {
        setUpdatedProject((prevProject) =>
            UpdateProjectTest(prevProject, id, amount, type),
        );
    };
    return (
        <div className="overflow-y-auto p-8">
            {updatedProject.projectWorkItem?.length === 0 ? (
                <div>
                    {/* <div className="h-px w-full bg-gray-200"></div> */}
                    <div className="flex flex-col items-center justify-center p-30 text-base">
                        <ArchiveX className="mb-2 h-10 w-10"></ArchiveX>
                        No items of work found
                    </div>
                </div>
            ) : (
                <div
                    key={updatedProject.id}
                    className="rounded-md border"
                >
                    {/* Project Table */}
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
                                <TableHead className="text-center text-gray-700">
                                    Status
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {updatedProject.projectWorkItem?.map((workItem) => {
                                // Determine if we have item tests to display
                                const hasItemTests =
                                    workItem.itemTest.length > 0;

                                return (
                                    <Fragment key={`${workItem.id}`}>
                                        {/* Main item row with first item test if available */}
                                        <WorkItemsTable
                                            workItem={workItem}
                                            onServerUpdate={onServerUpdate}
                                            handleTestUpdate={handleTestUpdate}
                                            hasItemTests={hasItemTests}
                                        ></WorkItemsTable>

                                        {/* Materials and their tests */}
                                        {workItem.materials.map((material) => {
                                            // If material has no tests, just show the material row
                                            if (
                                                material.materialTest.length ===
                                                0
                                            ) {
                                                return (
                                                    <TableRow key={material.id}>
                                                        <TableCell></TableCell>
                                                        <TableCell className="pl-4 text-center">
                                                            {material.name}
                                                        </TableCell>
                                                        <TableCell className="text-center">
                                                            {material.quantity.toString()}
                                                        </TableCell>
                                                        <TableCell
                                                            colSpan={4}
                                                            className="text-center text-muted-foreground"
                                                        >
                                                            No tests available
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            }

                                            // If material has tests, show first test on same row as material
                                            return (
                                                <Fragment key={material.id}>
                                                    <MaterialsTable
                                                        material={material}
                                                        onServerUpdate={
                                                            onServerUpdate
                                                        }
                                                        handleTestUpdate={
                                                            handleTestUpdate
                                                        }
                                                    />
                                                </Fragment>
                                            );
                                        })}

                                        {/* If no tests or materials, show a message */}
                                        {workItem.materials.length === 0 &&
                                            workItem.itemTest.length === 0 && (
                                                <TableRow>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell
                                                        colSpan={4}
                                                        className="text-center text-muted-foreground"
                                                    >
                                                        No tests available
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                    </Fragment>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
}
