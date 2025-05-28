"use client";

import { Fragment } from "react";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import type { ProjectWorkItem } from "@/lib/types/project";
import type { TestType } from "@/lib/types/project-test/project-test.types";
import { FileText } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { TestCounter } from "../test-columns/test-counter";
import { TestStatus } from "../test-columns/test-status";

interface WorkItemsTableProps {
    workItem: ProjectWorkItem;
    isReadOnly?: boolean;
    onTestCountUpdate: (
        id: string,
        amount: number,
        type: TestType,
    ) => Promise<void>;
    isUpdating?: boolean;
}

export function WorkItemsTable({
    workItem,
    isReadOnly = false,
    onTestCountUpdate,
    isUpdating = false,
}: WorkItemsTableProps) {
    const hasItemTests = workItem.itemTest.length > 0;
    const { id: projectId, token } = useParams<{ id: string; token: string }>();

    const getTestRecordUrl = (testId: string) => {
        return isReadOnly
            ? `${token}/test-records/${testId}/work-item`
            : `/projects/${projectId}/test-records/${testId}/work-item`;
    };

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
                            {workItem.itemTest?.[0]?.testRequired ?? "N/A"}
                        </TableCell>
                        <TableCell className="text-center">
                            <TestCounter
                                id={workItem.itemTest[0]?.id}
                                value={workItem.itemTest[0]?.testsOnFile ?? 0}
                                type="work-item"
                                updateTestAction={onTestCountUpdate}
                                isReadOnly={isReadOnly}
                            ></TestCounter>
                        </TableCell>
                        <TableCell className="text-center">
                            {workItem.itemTest?.[0]?.balance ?? "N/A"}
                        </TableCell>
                        <TableCell className="px-2 py-1">
                            <div className="flex items-center justify-center">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="flex cursor-pointer items-center gap-1 text-xs font-medium"
                                    disabled={isUpdating}
                                    asChild
                                >
                                    <Link
                                        href={getTestRecordUrl(
                                            workItem.itemTest[0]?.id ?? "",
                                        )}
                                        scroll={false}
                                    >
                                        <FileText className="h-4 w-4" />
                                        {isReadOnly ? "View" : "Manage"}
                                    </Link>
                                </Button>
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            <TestStatus
                                testsOnFile={
                                    workItem.itemTest?.[0]?.testsOnFile ?? 0
                                }
                                balance={workItem.itemTest?.[0]?.balance ?? 0}
                            ></TestStatus>
                        </TableCell>
                    </>
                ) : (
                    // No item tests
                    <TableCell colSpan={5}></TableCell>
                )}
            </TableRow>

            {/* Additional item tests (if any) */}
            {workItem.itemTest.slice(1).map((test) => (
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
                            type="work-item"
                            updateTestAction={onTestCountUpdate}
                            isReadOnly={isReadOnly}
                        ></TestCounter>
                    </TableCell>
                    <TableCell className="text-center">
                        {test.balance}
                    </TableCell>
                    <TableCell className="px-2 py-1">
                        <div className="flex items-center justify-center">
                            <Button
                                size="sm"
                                variant="outline"
                                className="flex cursor-pointer items-center gap-1 text-xs font-medium"
                                disabled={isUpdating}
                                asChild
                            >
                                <Link
                                    href={getTestRecordUrl(test.id)}
                                    scroll={false}
                                >
                                    <FileText className="h-4 w-4" />
                                    {isReadOnly ? "View" : "Manage"}
                                </Link>
                            </Button>
                        </div>
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
