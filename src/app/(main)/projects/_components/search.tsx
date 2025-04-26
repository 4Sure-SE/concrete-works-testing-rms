"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
    return (
        <div className="relative flex-grow">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
                type="text"
                placeholder={placeholder}
                className="pl-10"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
