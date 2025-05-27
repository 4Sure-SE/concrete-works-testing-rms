"use client";

import { FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import type { Material } from "@/lib/types/project";
import type { TestType } from "@/lib/types/project-test/project-test.types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { TestCounter } from "../test-columns/test-counter";
import { TestStatus } from "../test-columns/test-status";

interface MaterialsTableProps {
    material: Material;
    isReadOnly?: boolean;
    onTestCountUpdate: (
        id: string,
        amount: number,
        type: TestType,
    ) => Promise<void>;
    isUpdating?: boolean;
}

export function MaterialsTable({
    material,
    onTestCountUpdate,
    isReadOnly = false,
    isUpdating = false,
}: MaterialsTableProps) {
    const { id: projectId, token } = useParams<{ id: string; token: string }>();

    const getTestRecordUrl = (testId: string) => {
        return isReadOnly
            ? `${token}/test-records/${testId}/material`
            : `/projects/${projectId}/test-records/${testId}/material`;
    };

    return (
        <>
            {material.materialTest.map((test, testIndex) => (
                <TableRow key={test.id}>
                    <TableCell></TableCell>
                    {testIndex === 0 ? (
                        <TableCell className="pl-4 text-center">
                            {material.name}
                        </TableCell>
                    ) : (
                        <TableCell></TableCell>
                    )}
                    {testIndex === 0 ? (
                        <TableCell className="text-center">
                            {material.quantity.toString()}
                        </TableCell>
                    ) : (
                        <TableCell></TableCell>
                    )}
                    {testIndex === 0 ? (
                        <TableCell className="text-center">
                            {material.unit}
                        </TableCell>
                    ) : (
                        <TableCell></TableCell>
                    )}
                    <TableCell className="text-center">
                        {test.testRequired}
                    </TableCell>
                    <TableCell className="text-center">
                        <TestCounter
                            id={test.id}
                            value={test.testsOnFile}
                            type="material"
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
        </>
    );
}
