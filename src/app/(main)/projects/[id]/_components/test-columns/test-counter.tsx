"use client";
import { Loader2, Minus, Plus } from "lucide-react";
import { useState } from "react";

type TestType = "material" | "workItem";

export const TestCounter = ({
    id,
    value,
    type,
    onUpdate,
    onServerUpdate,
}: {
    id: string | undefined;
    value: number;
    type: TestType;
    onUpdate: (id: string | undefined, amount: number, type: TestType) => void;
    onServerUpdate: (
        id: string | undefined,
        amount: number,
        type: TestType,
    ) => Promise<number>;
}) => {
    const [testsOnFile, setTestsOnFile] = useState(value);
    const [loadingDirection, setLoadingDirection] = useState<
        "inc" | "dec" | null
    >(null);

    const handleUpdate = async (amount: number) => {
        setLoadingDirection(amount > 0 ? "inc" : "dec");
        try {
            const updatedCount = await onServerUpdate(id, amount, type);
            setTestsOnFile(updatedCount);
            onUpdate(id, amount, type);
        } catch (error) {
            console.error(error);
        }
        setLoadingDirection(null);
    };

    return (
        <div className="flex items-center justify-center gap-2 py-1">
            <button
                onClick={() => handleUpdate(-1)}
                disabled={loadingDirection !== null || testsOnFile <= 0}
                aria-label="decrease"
                className="rounded-sm bg-red-500 px-0.5 py-0.5 text-white hover:bg-red-600"
            >
                {loadingDirection == "dec" ? (
                    <Loader2 className="animate-spin" />
                ) : (
                    <Minus />
                )}
            </button>
            <div className="flex h-8.5 w-11 items-center justify-center rounded-sm border border-gray-200 bg-white">
                {testsOnFile}
            </div>
            <button
                onClick={() => handleUpdate(1)}
                disabled={loadingDirection !== null}
                aria-label="increase"
                className="rounded-sm bg-green-500 px-0.5 py-0.5 text-white hover:bg-green-600"
            >
                {loadingDirection === "inc" ? (
                    <Loader2 className="animate-spin" />
                ) : (
                    <Plus />
                )}
            </button>
        </div>
    );
};
