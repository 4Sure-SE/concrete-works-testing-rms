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
            className="cursor-pointer bg-red-600 text-white hover:bg-red-500 hover:text-white"
            disabled={isPending}
        >
            <X className="h-4 w-2" />
            <span>Clear</span>
        </Button>
    );
}
