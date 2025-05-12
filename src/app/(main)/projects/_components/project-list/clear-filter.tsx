"use client";

import { X } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ClearFiltersButtonProps {
    onClear: () => void;
    isPending?: boolean;
}

export function ClearFiltersButton({
    onClear,
    isPending = false,
}: ClearFiltersButtonProps) {
    const searchParams = useSearchParams();

    // only show the button if there are filters applied
    const hasFilters =
        searchParams.has("query") ||
        searchParams.has("from") ||
        searchParams.has("to");

    if (!hasFilters) return null;

    return (
        <Button
            onClick={onClear}
            variant="outline"
            className="cursor-pointer"
            disabled={isPending}
        >
            <X className="mr-2 h-4 w-4" />
            <span>Clear Filters</span>
        </Button>
    );
}
