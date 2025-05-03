"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SearchBarProps {
    placeholder: string;
}

export function SearchBar({ placeholder }: SearchBarProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        router.replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="relative flex-grow">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
                type="text"
                placeholder={placeholder}
                className="pl-10"
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("query")?.toString()}
            />
        </div>
    );
}
