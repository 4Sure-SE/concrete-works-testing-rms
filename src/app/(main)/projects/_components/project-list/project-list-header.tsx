"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";
import { DateRangeFilter } from "./date-filter";
import { SearchBar } from "./search-bar";

interface ProjectListHeaderProps {
    title: string;
}

export function ProjectListHeader({ title }: ProjectListHeaderProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const [isPending, startTransition] = useTransition();

    // wait 500ms before calling the search
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        startTransition(() => {
            router.replace(`${pathname}?${params.toString()}`);
        });
    }, 500);

    const handleDateRangeChange = (param: "from" | "to", value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set(param, value);
        } else {
            params.delete(param);
        }
        startTransition(() => {
            router.replace(`${pathname}?${params.toString()}`);
        });
    };

    return (
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                <DateRangeFilter
                    onStartDateChangeAction={(value) =>
                        handleDateRangeChange("from", value)
                    }
                    onEndDateChangeAction={(value) =>
                        handleDateRangeChange("to", value)
                    }
                    isPending={isPending}
                    startDateValue={searchParams.get("from") ?? ""}
                    endDateValue={searchParams.get("to") ?? ""}
                />
                <div className="flex items-center gap-3">
                    <SearchBar
                        placeholder="Search projects..."
                        onSearchAction={handleSearch}
                        value={searchParams.get("query") ?? ""}
                        isPending={isPending}
                    />
                    <Button
                        onClick={() => router.push("/projects/new")}
                        className="cursor-pointer"
                    >
                        <Plus className="h-4 w-4" />
                        <span>New Project</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
