"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export function ClearFiltersButton() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const hasFilters = searchParams.size > 0;

    if (!hasFilters) return null;

    const handleClearFilters = () => {
        const params = new URLSearchParams();
        startTransition(() => {
            router.replace(`${pathname}?${params.toString()}`);
        });
    };

    return (
        <Button
            onClick={handleClearFilters}
            variant="outline"
            className="cursor-pointer"
            disabled={isPending}
        >
            <X className="mr-2 h-4 w-4" /> <span>Clear Filters</span>
        </Button>
    );
}
