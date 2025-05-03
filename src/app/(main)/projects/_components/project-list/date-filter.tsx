"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

export function DateRangeFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);

    function handleStartDateChange(dateValue: string) {
        const params = new URLSearchParams(searchParams);
        if (dateValue) {
            params.set("from", dateValue);
        } else {
            params.delete("from");
        }
        router.replace(`${pathname}?${params.toString()}`);
    }

    function handleEndDateChange(dateValue: string) {
        const params = new URLSearchParams(searchParams);
        if (dateValue) {
            params.set("to", dateValue);
        } else {
            params.delete("to");
        }
        router.replace(`${pathname}?${params.toString()}`);
    }

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
                    onChange={(e) => handleStartDateChange(e.target.value)}
                    defaultValue={searchParams.get("from") ?? ""}
                    onClick={() => triggerDatePicker(startDateRef)}
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
                    onChange={(e) => handleEndDateChange(e.target.value)}
                    defaultValue={searchParams.get("to") ?? ""}
                    onClick={() => triggerDatePicker(endDateRef)}
                />
            </div>
        </div>
    );
}
