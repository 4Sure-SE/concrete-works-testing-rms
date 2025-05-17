"use client";

import { Loader2, Minus, Plus } from "lucide-react";
import { useState } from "react";

import type { TestType } from "@/lib/types/project-test/project-test.types";

interface TestCounterProps {
    id: string | undefined;
    value: number;
    type: TestType;
    updateTestAction: (
        id: string,
        amount: number,
        type: TestType,
    ) => Promise<void>;
    isReadOnly?: boolean;
    isDisabled?: boolean;
}

export const TestCounter = ({
    id,
    value,
    type,
    updateTestAction,
    isReadOnly = false,
    isDisabled = false,
}: TestCounterProps) => {
    const [loadingDirection, setLoadingDirection] = useState<
        "inc" | "dec" | null
    >(null);

    const handleUpdate = async (amount: number) => {
        if (isReadOnly || !id || isPending) return;

        const direction = amount > 0 ? "inc" : "dec";
        setLoadingDirection(direction);

        await updateTestAction(id, amount, type);

        setLoadingDirection(null);
    };

    const isPending = loadingDirection !== null;
    const isIncLoading = isPending && loadingDirection === "inc";
    const isDecLoading = isPending && loadingDirection === "dec";

    return (
        <div className="flex items-center justify-center gap-2 py-1">
            {value === 0 || isReadOnly ? (
                <div className="h-[32px] w-[28px]"></div>
            ) : (
                <button
                    onClick={() => handleUpdate(-1)}
                    disabled={isPending || value <= 0 || isDisabled}
                    aria-label="decrease"
                    className={`cursor-pointer rounded-sm px-0.5 py-0.5 text-white ${
                        isPending
                            ? "bg-red-400 hover:bg-red-400"
                            : "bg-red-500 hover:bg-red-600"
                    }`}
                >
                    {isDecLoading ? (
                        <Loader2 className="animate-spin" />
                    ) : (
                        <Minus />
                    )}
                </button>
            )}

            <div className="flex h-8.5 w-11 items-center justify-center rounded-sm border border-gray-200 bg-white">
                {value}
            </div>

            {isReadOnly ? (
                <div className="h-[32px] w-[28px]"></div>
            ) : (
                <button
                    onClick={() => handleUpdate(1)}
                    disabled={isPending || isDisabled}
                    aria-label="increase"
                    className={`cursor-pointer rounded-sm px-0.5 py-0.5 text-white ${
                        isPending
                            ? "bg-green-400 hover:bg-green-400"
                            : "bg-green-500 hover:bg-green-600"
                    }`}
                >
                    {isIncLoading ? (
                        <Loader2 className="animate-spin" />
                    ) : (
                        <Plus />
                    )}
                </button>
            )}
        </div>
    );
};
