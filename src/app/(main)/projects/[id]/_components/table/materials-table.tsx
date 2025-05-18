"use client";

import { FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import type { Material } from "@/lib/types/project";
import type { TestType } from "@/lib/types/project-test/project-test.types";
import { useParams, useRouter } from "next/navigation";
import { useTransition } from "react";
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
    const router = useRouter();
    const { id: projectId, token } = useParams<{ id: string; token: string }>();
    const [isNavigating, startNavigation] = useTransition();

    const handleManageClick = (testId: string) => {
        startNavigation(() => {
            let modalUrl;
            if (isReadOnly)
                modalUrl = `${token}/test-records/${testId}/material`;
            else
                modalUrl = `/projects/${projectId}/test-records/${testId}/material`;
            router.push(modalUrl, { scroll: false });
        });
    };

    const sortedMaterialTests = [...material.materialTest].sort((a, b) =>
        a.testRequired.localeCompare(b.testRequired),
    );
    return (
        <>
            {sortedMaterialTests.map((test, testIndex) => (
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
                            isDisabled={isNavigating}
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
                                onClick={() => handleManageClick(test.id)}
                                disabled={isUpdating}
                            >
                                <FileText className="h-4 w-4" />
                                {isReadOnly ? "View" : "Manage"}
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
