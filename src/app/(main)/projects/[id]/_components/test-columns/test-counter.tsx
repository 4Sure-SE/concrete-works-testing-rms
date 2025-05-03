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
    setLoading,
    globalLoading,
    setGlobalLoading,
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
    setLoading: (loading: boolean) => void;
    globalLoading: boolean;
    setGlobalLoading: (loading: boolean) => void;
}) => {
    const [testsOnFile, setTestsOnFile] = useState(value);
    const [loadingDirection, setLoadingDirection] = useState<
        "inc" | "dec" | null
    >(null);
    const isSelfLoading = loadingDirection !== null;

    const handleUpdate = async (amount: number) => {
        setLoading(true);
        setGlobalLoading(true);
        setLoadingDirection(amount > 0 ? "inc" : "dec");
        try {
            const updatedCount = await onServerUpdate(id, amount, type);
            setTestsOnFile(updatedCount);
            onUpdate(id, amount, type);
        } catch (error) {
            console.error(error);
        }
        setLoadingDirection(null);
        setLoading(false);
        setGlobalLoading(false);
    };

    return (
        <div className="flex items-center justify-center gap-2 py-1">
            <button
                onClick={() => handleUpdate(-1)}
                disabled={globalLoading || testsOnFile <= 0}
                aria-label="decrease"
                className={`cursor-pointer rounded-sm px-0.5 py-0.5 text-white ${isSelfLoading || globalLoading ? "bg-red-400 hover:bg-red-400" : "bg-red-500 hover:bg-red-600"}`}
            >
                {loadingDirection === "dec" ? (
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
                disabled={globalLoading}
                aria-label="increase"
                className={`cursor-pointer rounded-sm px-0.5 py-0.5 text-white ${
                    isSelfLoading || globalLoading
                        ? "bg-green-400 hover:bg-green-400"
                        : "bg-green-500 hover:bg-green-600"
                }`}
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
