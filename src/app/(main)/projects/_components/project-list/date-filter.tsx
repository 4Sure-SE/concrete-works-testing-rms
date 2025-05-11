"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

interface DateRangeFilterProps {
    startDateValue?: string;
    endDateValue?: string;
    isPending: boolean;
    onDateChange: (
        startDate: string | undefined,
        endDate: string | undefined,
    ) => void;
}

export function DateRangeFilter({
    startDateValue = "",
    endDateValue = "",
    isPending,
    onDateChange,
}: DateRangeFilterProps) {
    const [localStart, setLocalStart] = useState(startDateValue);
    const [localEnd, setLocalEnd] = useState(endDateValue);

    useEffect(() => {
        setLocalStart(startDateValue);
    }, [startDateValue]);

    useEffect(() => {
        setLocalEnd(endDateValue);
    }, [endDateValue]);

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newStart = e.target.value;
        setLocalStart(newStart);
        onDateChange(newStart || undefined, localEnd || undefined);
    };

    const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEnd = e.target.value;
        setLocalEnd(newEnd);
        onDateChange(localStart || undefined, newEnd || undefined);
    };

    const triggerDatePicker = (
        ref: React.RefObject<HTMLInputElement | null>,
    ) => {
        ref.current?.showPicker();
    };
    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);

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
                    value={localStart}
                    onChange={handleStartDateChange}
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
                    value={localEnd}
                    onChange={handleEndDateChange}
                    onClick={() => triggerDatePicker(endDateRef)}
                    disabled={isPending}
                    min={localStart || undefined}
                />
            </div>
        </div>
    );
}
