import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { LucideIcon } from "lucide-react";

interface FormInputProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    Icon: LucideIcon;
    error?: boolean;
}

export function FormInput({
    id,
    label,
    type,
    placeholder,
    value,
    onChange,
    required = true,
    Icon,
    error,
}: FormInputProps) {
    return (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor={id}>{label}</Label>
            <div className="relative">
                <Icon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                <Input
                    required={required}
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`pl-10 ${error ? "border-red-500" : ""}`}
                />
            </div>
        </div>
    );
}
