"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { UpdateProjectTest } from "@/lib/utils/update-project-test";
import { ArchiveX } from "lucide-react";
import { Fragment, useState } from "react";
import type { Projects } from "../../../../lib/types/project/project-details.types";
import { TestCounter } from "./test-counter";
import { TestStatus } from "./test-status";

export default function ProjectworkItemsTable({
    project,
}: {
    project: Projects;
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
                                        <TableRow className="bg-[#FCFCFD]">
                                            <TableCell className="text-center font-medium text-gray-900">
                                                {workItem.itemNo}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {workItem.description}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {workItem.quantity.toString()}
                                            </TableCell>

                                            {hasItemTests ? (
                                                // Show first item test on the main row
                                                <>
                                                    <TableCell className="text-center">
                                                        {workItem.unit ?? "N/A"}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {workItem.itemTest?.[0]
                                                            ?.testRequired ??
                                                            "N/A"}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        <TestCounter
                                                            id={
                                                                workItem
                                                                    .itemTest?.[0]
                                                                    ?.id
                                                            }
                                                            value={
                                                                workItem
                                                                    .itemTest?.[0]
                                                                    ?.testsOnFile ??
                                                                0
                                                            }
                                                            onUpdate={
                                                                handleTestUpdate
                                                            }
                                                            type="workItem"
                                                        ></TestCounter>
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {workItem.itemTest?.[0]
                                                            ?.balance ?? "N/A"}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        <TestStatus
                                                            testsOnFile={
                                                                workItem
                                                                    .itemTest?.[0]
                                                                    ?.testsOnFile ??
                                                                0
                                                            }
                                                            balance={
                                                                workItem
                                                                    .itemTest?.[0]
                                                                    ?.balance ??
                                                                0
                                                            }
                                                        ></TestStatus>
                                                    </TableCell>
                                                </>
                                            ) : (
                                                // No item tests
                                                <TableCell
                                                    colSpan={4}
                                                ></TableCell>
                                            )}
                                        </TableRow>

                                        {/* Additional item tests (if any) */}
                                        {workItem.itemTest
                                            .slice(1)
                                            .map((test) => (
                                                <TableRow key={test.id}>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell className="text-center">
                                                        {test.testRequired}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        <TestCounter
                                                            id={test.id}
                                                            value={
                                                                test.testsOnFile
                                                            }
                                                            type="material"
                                                            onUpdate={
                                                                handleTestUpdate
                                                            }
                                                        ></TestCounter>
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {test.balance}
                                                    </TableCell>

                                                    <TableCell className="text-center">
                                                        <TestStatus
                                                            testsOnFile={
                                                                test.testsOnFile
                                                            }
                                                            balance={
                                                                test.balance
                                                            }
                                                        ></TestStatus>
                                                    </TableCell>
                                                </TableRow>
                                            ))}

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
                                                    {material.materialTest.map(
                                                        (test, testIndex) => (
                                                            <TableRow
                                                                key={test.id}
                                                            >
                                                                <TableCell></TableCell>
                                                                {testIndex ===
                                                                0 ? (
                                                                    <TableCell className="pl-4 text-center">
                                                                        {" "}
                                                                        {
                                                                            material.name
                                                                        }
                                                                    </TableCell>
                                                                ) : (
                                                                    <TableCell></TableCell>
                                                                )}
                                                                {testIndex ===
                                                                0 ? (
                                                                    <TableCell className="text-center">
                                                                        {material.quantity.toString()}
                                                                    </TableCell>
                                                                ) : (
                                                                    <TableCell></TableCell>
                                                                )}
                                                                {testIndex ===
                                                                0 ? (
                                                                    <TableCell className="text-center">
                                                                        {
                                                                            material.unit
                                                                        }
                                                                    </TableCell>
                                                                ) : (
                                                                    <TableCell></TableCell>
                                                                )}
                                                                <TableCell className="text-center">
                                                                    {
                                                                        test.testRequired
                                                                    }
                                                                </TableCell>
                                                                <TableCell className="text-center">
                                                                    <TestCounter
                                                                        id={
                                                                            test.id
                                                                        }
                                                                        value={
                                                                            test.testsOnFile
                                                                        }
                                                                        type="material"
                                                                        onUpdate={
                                                                            handleTestUpdate
                                                                        }
                                                                    ></TestCounter>
                                                                </TableCell>
                                                                <TableCell className="text-center">
                                                                    {
                                                                        test.balance
                                                                    }
                                                                </TableCell>
                                                                <TableCell className="text-center">
                                                                    <TestStatus
                                                                        testsOnFile={
                                                                            test.testsOnFile
                                                                        }
                                                                        balance={
                                                                            test.balance
                                                                        }
                                                                    ></TestStatus>
                                                                </TableCell>
                                                            </TableRow>
                                                        ),
                                                    )}
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
