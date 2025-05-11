"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

interface SearchBarProps {
    placeholder: string;
    value: string;
    isPending?: boolean;
    onSearchChange: (query: string | undefined) => void;
}

export function SearchBar({
    placeholder,
    value,
    isPending = false,
    onSearchChange,
}: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current && inputRef.current.value !== value) {
            inputRef.current.value = value;
        }
    }, [value]);

    const debouncedSearch = useDebouncedCallback((term: string) => {
        onSearchChange(term || undefined);
    }, 500);

    return (
        <div className="relative flex-grow">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                className="pl-10"
                onChange={(e) => debouncedSearch(e.target.value)}
                defaultValue={value}
                disabled={isPending}
                key={value}
            />
        </div>
    );
}
