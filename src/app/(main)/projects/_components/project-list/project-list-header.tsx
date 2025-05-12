"use client";
import { Plus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ClearFiltersButton } from "./clear-filter";
import { DateRangeFilter } from "./date-filter";
import { SearchBar } from "./search-bar";

interface ProjectListHeaderProps {
    title: string;
    isFiltering: boolean;
    onFilterChange: (newParams: Record<string, string | undefined>) => void;
}

export function ProjectListHeader({
    title,
    isFiltering,
    onFilterChange,
}: ProjectListHeaderProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    return (
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                <DateRangeFilter
                    isPending={isFiltering}
                    startDateValue={searchParams.get("from") ?? ""}
                    endDateValue={searchParams.get("to") ?? ""}
                    onDateChange={(from, to) => onFilterChange({ from, to })}
                />
                <div className="flex items-center gap-3">
                    <SearchBar
                        placeholder="Search projects..."
                        value={searchParams.get("query") ?? ""}
                        isPending={isFiltering}
                        onSearchChange={(query) => onFilterChange({ query })}
                    />
                    <div className="flex items-center gap-2">
                        <ClearFiltersButton
                            onClear={() =>
                                onFilterChange({
                                    query: undefined,
                                    from: undefined,
                                    to: undefined,
                                })
                            }
                            isPending={isFiltering}
                        />
                        <Button
                            onClick={() => router.push("/projects/new")}
                            className="cursor-pointer"
                            disabled={isFiltering}
                        >
                            <Plus className="h-4 w-4" />
                            <span>New Project</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
