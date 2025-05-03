"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import type { Material } from "@/lib/types/project";
import { TestCounter } from "../test-columns/test-counter";
import { TestStatus } from "../test-columns/test-status";

export function MaterialsTable({
    material,
    onServerUpdate,
    handleTestUpdate,
    isReadOnly = false,
}: {
    material: Material;
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
    isReadOnly?: boolean;
}) {
    return (
        <>
            {material.materialTest.map((test, testIndex) => (
                <TableRow key={test.id}>
                    <TableCell></TableCell>
                    {testIndex === 0 ? (
                        <TableCell className="pl-4 text-center">
                            {" "}
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
                    </TableCell>{" "}
                    <TableCell className="text-center">
                        <TestCounter
                            id={test.id}
                            value={test.testsOnFile}
                            type="material"
                            onUpdate={handleTestUpdate}
                            onServerUpdate={onServerUpdate}
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
        </>
    );
}
