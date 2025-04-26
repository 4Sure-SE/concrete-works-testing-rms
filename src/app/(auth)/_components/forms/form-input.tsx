import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { LucideIcon } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

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
    errorMessage?: string;
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
    errorMessage,
}: FormInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const hasValue = Boolean(value && value.length > 0);
    return (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor={id}>{label}</Label>
            <div className="relative">
                <Icon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                <Input
                    required={required}
                    id={id}
                    name={id}
                    type={isPassword && showPassword ? "text" : type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`pl-10 ${isPassword ? "pr-10" : ""} ${error ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    aria-invalid={error}
                    aria-errormessage={error ? `${id}-error` : undefined}
                />
                {isPassword && hasValue && (
                    <Button
                        type="button"
                        variant="ghost"
                        tabIndex={-1}
                        className="absolute top-1/2 right-2 h-auto w-auto -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={
                            showPassword ? "Hide password" : "Show password"
                        }
                    >
                        {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                        )}
                    </Button>
                )}
            </div>
            {error && errorMessage && (
                <p
                    id={`${id}-error`}
                    className="mt-1 text-xs text-red-600"
                    role="alert"
                >
                    {errorMessage}
                </p>
            )}
        </div>
    );
}
