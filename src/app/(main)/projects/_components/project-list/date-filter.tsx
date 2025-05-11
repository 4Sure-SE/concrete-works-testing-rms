"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";

interface DateRangeFilterProps {
    onStartDateChangeAction: (date: string) => void;
    onEndDateChangeAction: (date: string) => void;
    startDateValue?: string;
    endDateValue?: string;
    isPending: boolean;
}

export function DateRangeFilter({
    onStartDateChangeAction,
    onEndDateChangeAction,
    isPending,
    endDateValue,
    startDateValue,
}: DateRangeFilterProps) {
    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);

    // set default values when the component mounts
    useEffect(() => {
        if (startDateRef.current) {
            startDateRef.current.value = startDateValue ?? "";
        }
        if (endDateRef.current) {
            endDateRef.current.value = endDateValue ?? "";
        }
    }, [startDateValue, endDateValue]);

    const triggerDatePicker = (
        ref: React.RefObject<HTMLInputElement | null>,
    ) => {
        ref.current?.showPicker();
    };

    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                    STARTED FROM
                </span>

                <Input
                    ref={startDateRef}
                    type="date"
                    className="h-9 w-[140px] cursor-pointer text-muted-foreground uppercase transition-colors hover:bg-muted"
                    onChange={(e) => onStartDateChangeAction(e.target.value)}
                    defaultValue={startDateValue}
                    onClick={() => triggerDatePicker(startDateRef)}
                    disabled={isPending}
                />
            </div>

            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                    TO
                </span>

                <Input
                    ref={endDateRef}
                    type="date"
                    className="h-9 w-[140px] cursor-pointer text-muted-foreground uppercase transition-colors hover:bg-muted"
                    onChange={(e) => onEndDateChangeAction(e.target.value)}
                    defaultValue={endDateValue}
                    onClick={() => triggerDatePicker(endDateRef)}
                    disabled={isPending}
                />
            </div>
        </div>
    );
}
