"use client";

import type { TestUpdateType } from "@/lib/types/project-test/project-test.types";
import { Loader2, Minus, Plus } from "lucide-react";
import { useOptimistic, useState, useTransition } from "react";

interface TestCounterProps {
    id: string | undefined;
    value: number;
    type: TestUpdateType;
    updateTestAction: (
        id: string,
        amount: number,
        type: TestUpdateType,
    ) => Promise<void>;
    isLoading?: boolean;
    isReadOnly?: boolean;
}

export const TestCounter = ({
    id,
    value,
    type,
    updateTestAction,
    isLoading: parentIsLoading = false,
    isReadOnly = false,
}: TestCounterProps) => {
    const [optimisticValue, addOptimisticValue] = useOptimistic(
        value,
        (state, amount: number) => state + amount,
    );
    const [isPending, startTransition] = useTransition();
    const [loadingDirection, setLoadingDirection] = useState("inc");
    const isDisabled = isPending || parentIsLoading;

    const handleUpdate = async (amount: number) => {
        if (isReadOnly || !id || isDisabled) return;

        startTransition(async () => {
            // optimistically update the value
            addOptimisticValue(amount);
            await updateTestAction(id, amount, type);

            const direction = amount > 0 ? "inc" : "dec";
            setLoadingDirection(direction);
        });
    };

    const isIncLoading = isPending && loadingDirection === "inc";
    const isDecLoading = isPending && loadingDirection === "dec";

    return (
        <div className="flex items-center justify-center gap-2 py-1">
            {value === 0 || isReadOnly ? (
                <div className="h-[32px] w-[28px]"></div>
            ) : (
                <button
                    onClick={() => handleUpdate(-1)}
                    disabled={isDisabled || optimisticValue <= 0}
                    aria-label="decrease"
                    className={`cursor-pointer rounded-sm px-0.5 py-0.5 text-white ${
                        isDisabled
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
                {optimisticValue}
            </div>

            {isReadOnly ? (
                <div className="h-[32px] w-[28px]"></div>
            ) : (
                <button
                    onClick={() => handleUpdate(1)}
                    disabled={isDisabled}
                    aria-label="increase"
                    className={`cursor-pointer rounded-sm px-0.5 py-0.5 text-white ${
                        isDisabled
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
