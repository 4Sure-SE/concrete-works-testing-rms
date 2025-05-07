"use client";
import { TestRecordModal } from "@/components/custom/test-record-modal";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import type { Material } from "@/lib/types/project";
import { FileText } from "lucide-react";
import { useState } from "react";
import { TestCounter } from "../test-columns/test-counter";
import { TestStatus } from "../test-columns/test-status";

interface MaterialsTableProps {
    material: Material;
    isReadOnly?: boolean;
    onTestCountUpdate: (
        id: string,
        amount: number,
        type: "material" | "workItem",
    ) => Promise<void>;
}

export function MaterialsTable({
    material,
    onTestCountUpdate,
    isReadOnly = false,
}: MaterialsTableProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestId, setSelectedTestId] = useState<string | null>(null);

    const handleManageClick = (testId: string) => {
        setSelectedTestId(testId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedTestId(null);
        setIsModalOpen(false);
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
                    <TableCell className="px-6 text-center">
                        <Button
                            size="sm"
                            variant="outline"
                            className="bg-primary-50 hover:bg-primary-100 flex min-w-[100px] items-center gap-1 text-xs font-medium"
                            onClick={() => handleManageClick(test.id)}
                        >
                            <FileText className="h-4 w-4" />
                            Manage
                        </Button>
                    </TableCell>
                    <TableCell className="text-center">
                        <TestStatus
                            testsOnFile={test.testsOnFile}
                            balance={test.balance}
                        ></TestStatus>
                    </TableCell>
                </TableRow>
            ))}
            {isModalOpen && selectedTestId && (
                <TestRecordModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    testId={selectedTestId}
                    testType="material"
                />
            )}
        </>
    );
}
