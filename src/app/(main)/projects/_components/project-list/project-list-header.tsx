"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { ClearFiltersButton } from "./clear-filter"; // Assuming this handles its own logic
import { DateRangeFilter } from "./date-filter";
import { SearchBar } from "./search-bar";

interface ProjectListHeaderProps {
    title: string;
}

export function ProjectListHeader({ title }: ProjectListHeaderProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isFiltering, startFilteringTransition] = useTransition();

    const updateQueryParams = (
        newParams: Record<string, string | undefined>,
    ) => {
        startFilteringTransition(() => {
            const currentParams = new URLSearchParams(searchParams);
            Object.entries(newParams).forEach(([key, value]) => {
                if (value) {
                    currentParams.set(key, value);
                } else {
                    currentParams.delete(key);
                }
            });
            router.replace(`${pathname}?${currentParams.toString()}`);
        });
    };

    return (
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                <DateRangeFilter
                    isPending={isFiltering}
                    startDateValue={searchParams.get("from") ?? ""}
                    endDateValue={searchParams.get("to") ?? ""}
                    onDateChange={(from, to) => updateQueryParams({ from, to })}
                />
                <div className="flex items-center gap-3">
                    <SearchBar
                        placeholder="Search projects..."
                        value={searchParams.get("query") ?? ""}
                        isPending={isFiltering}
                        onSearchChange={(query) => updateQueryParams({ query })}
                    />
                    <div className="flex items-center gap-24">
                        <ClearFiltersButton />
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
