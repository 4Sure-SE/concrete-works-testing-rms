"use client";

import { Fragment } from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import type { ProjectWorkItem } from "@/lib/types/project";
import type { TestUpdateType } from "@/lib/types/project-test/project-test.types";
import { TestCounter } from "../test-columns/test-counter";
import { TestStatus } from "../test-columns/test-status";

interface WorkItemsTableProps {
    workItem: ProjectWorkItem;
    isReadOnly?: boolean;
    onTestCountUpdate: (
        id: string,
        amount: number,
        type: TestUpdateType,
    ) => Promise<void>;
}

export function WorkItemsTable({
    workItem,
    isReadOnly = false,
    onTestCountUpdate,
}: WorkItemsTableProps) {
    const hasItemTests = workItem.itemTest.length > 0;

    const sortedWorkItemTests = [...workItem.itemTest].sort((a, b) =>
        a.testRequired.localeCompare(b.testRequired),
    );

    return (
        <Fragment>
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
                            {sortedWorkItemTests?.[0]?.testRequired ?? "N/A"}
                        </TableCell>
                        <TableCell className="text-center">
                            <TestCounter
                                id={sortedWorkItemTests[0]?.id}
                                value={sortedWorkItemTests[0]?.testsOnFile ?? 0}
                                type="workItem"
                                updateTestAction={onTestCountUpdate}
                                isReadOnly={isReadOnly}
                            ></TestCounter>
                        </TableCell>
                        <TableCell className="text-center">
                            {sortedWorkItemTests?.[0]?.balance ?? "N/A"}
                        </TableCell>
                        <TableCell className="text-center">
                            <TestStatus
                                testsOnFile={
                                    sortedWorkItemTests?.[0]?.testsOnFile ?? 0
                                }
                                balance={sortedWorkItemTests?.[0]?.balance ?? 0}
                            ></TestStatus>
                        </TableCell>
                    </>
                ) : (
                    // No item tests
                    <TableCell colSpan={4}></TableCell>
                )}
            </TableRow>

            {/* Additional item tests (if any) */}
            {sortedWorkItemTests.slice(1).map((test) => (
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
                            value={test.testsOnFile}
                            type="workItem"
                            updateTestAction={onTestCountUpdate}
                            isReadOnly={isReadOnly}
                        ></TestCounter>
                    </TableCell>
                    <TableCell className="text-center">
                        {test.balance}
                    </TableCell>
                    <TableCell className="text-center">
                        <TestStatus
                            testsOnFile={test.testsOnFile}
                            balance={test.balance}
                        ></TestStatus>
                    </TableCell>
                </TableRow>
            ))}
        </Fragment>
    );
}
