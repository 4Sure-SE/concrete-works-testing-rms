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
    isReadOnly = false,
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
    isReadOnly?: boolean;
}) => {
    const [testsOnFile, setTestsOnFile] = useState(value);
    const [loadingDirection, setLoadingDirection] = useState<
        "inc" | "dec" | null
    >(null);
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (amount: number) => {
        if (isReadOnly) return;
        setLoading(true);
        setLoadingDirection(amount > 0 ? "inc" : "dec");
        try {
            const updatedCount = await onServerUpdate(id, amount, type);
            setTestsOnFile(updatedCount);
            onUpdate(id, amount, type);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
        setLoadingDirection(null);
        setLoading(false);
    };
    return (
        <div className="flex items-center justify-center gap-2 py-1">
            {!isReadOnly && (
                <button
                    onClick={() => handleUpdate(-1)}
                    disabled={loading || testsOnFile <= 0}
                    aria-label="decrease"
                    className="rounded-sm bg-red-500 px-0.5 py-0.5 text-white hover:bg-red-600"
                >
                    {loading && loadingDirection === "dec" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Minus />
                    )}
                </button>
            )}
            <div className="flex h-8.5 w-11 items-center justify-center rounded-sm border border-gray-200 bg-white">
                {testsOnFile}
            </div>
            {!isReadOnly && (
                <button
                    onClick={() => handleUpdate(1)}
                    disabled={loading}
                    aria-label="increase"
                    className="rounded-sm bg-green-500 px-0.5 py-0.5 text-white hover:bg-green-600"
                >
                    {loading && loadingDirection === "inc" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Plus />
                    )}
                </button>
            )}
        </div>
    );
};
