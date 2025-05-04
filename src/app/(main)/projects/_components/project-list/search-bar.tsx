"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";

interface SearchBarProps {
    placeholder: string;
    onSearchAction: (query: string) => void;
    value: string;
    isPending?: boolean;
}

export function SearchBar({
    placeholder,
    onSearchAction,
    value,
    isPending = false,
}: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    // set default value when the component mounts
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = value ?? "";
        }
    }, [value]);

    return (
        <div className="relative flex-grow">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                className="pl-10"
                onChange={(e) => onSearchAction(e.target.value)}
                defaultValue={value}
                disabled={isPending}
            />
        </div>
    );
}
