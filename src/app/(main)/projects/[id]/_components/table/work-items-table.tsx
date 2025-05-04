"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import type { ProjectWorkItem } from "@/lib/types/project";
import { Fragment } from "react";
import { TestCounter } from "../test-columns/test-counter";
import { TestStatus } from "../test-columns/test-status";

export function WorkItemsTable({
    workItem,
    handleTestUpdate,
    onServerUpdate,
    hasItemTests,
    setLoading,
    globalLoading,
    setGlobalLoading,
    isReadOnly = false,
}: {
    workItem: ProjectWorkItem;
    handleTestUpdate: (
        id: string | undefined,
        amount: number,
        type: "material" | "workItem",
    ) => void;
    onServerUpdate: (
        id: string | undefined,
        amount: number,
        type: "material" | "workItem",
    ) => Promise<number>;
    hasItemTests: boolean;
    setLoading: (loading: boolean) => void;
    globalLoading: boolean;
    setGlobalLoading: (loading: boolean) => void;
    isReadOnly?: boolean;
}) {
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
                                id={workItem.itemTest?.[0]?.id}
                                value={workItem.itemTest?.[0]?.testsOnFile ?? 0}
                                onUpdate={handleTestUpdate}
                                type="workItem"
                                onServerUpdate={onServerUpdate}
                                setLoading={setLoading}
                                globalLoading={globalLoading}
                                setGlobalLoading={setGlobalLoading}
                                isReadOnly={isReadOnly}
                            ></TestCounter>
                        </TableCell>
                        <TableCell className="text-center">
                            {workItem.itemTest?.[0]?.balance ?? "N/A"}
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
                    <TableCell colSpan={4}></TableCell>
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
                            type="workItem"
                            onUpdate={handleTestUpdate}
                            onServerUpdate={onServerUpdate}
                            setLoading={setLoading}
                            globalLoading={globalLoading}
                            setGlobalLoading={setGlobalLoading}
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
