"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { DateRangeFilter } from "./date-filter";
import { SearchBar } from "./search-bar";

interface ProjectListHeaderProps {
    title: string;
    searchTerm: string;
    onSearchChange: (value: string) => void;
    startDate: string;
    endDate: string;
    onStartDateChange: (date: string) => void;
    onEndDateChange: (date: string) => void;
}

export function ProjectListHeader({
    title,
    searchTerm,
    onSearchChange,
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
}: ProjectListHeaderProps) {
    return (
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                <DateRangeFilter
                    startDate={startDate}
                    endDate={endDate}
                    onStartDateChange={onStartDateChange}
                    onEndDateChange={onEndDateChange}
                />
                <div className="flex items-center gap-3">
                    <SearchBar
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={onSearchChange}
                    />
                    <Button>
                        <Plus className="h-4 w-4" />
                        <span>New Project</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
