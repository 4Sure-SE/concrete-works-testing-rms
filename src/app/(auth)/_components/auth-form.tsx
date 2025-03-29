"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, User } from "lucide-react";
import Form from "next/form";
import { useState } from "react";
import { useFormStatus } from "react-dom";

interface AuthFormProps {
    mode: "login" | "signup";
    action: (formData: FormData) => void | Promise<void>;
}

function SubmitButton({
    mode,
    isDisabled,
}: {
    mode: AuthFormProps["mode"];
    isDisabled?: boolean;
}) {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending || isDisabled}
            className="w-full bg-orange-500 text-white hover:bg-orange-400"
        >
            {mode === "login" ? "Log In" : "Sign Up"}
        </Button>
    );
}

function PasswordRequirements({ password }: { password: string }) {
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);

    if (!password) return null;

    return (
        <div className="mt-1 text-xs">
            <p
                className={`${hasMinLength ? "text-green-600" : "text-red-600"}`}
            >
                • Minimum 8 characters {hasMinLength && "✓"}
            </p>
            <p
                className={`${hasUppercase ? "text-green-600" : "text-red-600"}`}
            >
                • At least one uppercase letter {hasUppercase && "✓"}
            </p>
        </div>
    );
}

export function AuthForm({ mode, action }: AuthFormProps) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isValidPassword = password.length >= 8 && /[A-Z]/.test(password);
    const passwordsMatch = mode === "login" || password === confirmPassword;
    const isFormValid = mode === "login" || (isValidPassword && passwordsMatch);

    return (
        <Form
            action={action}
            className="flex flex-col gap-6"
        >
            {mode === "signup" && (
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                        <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                        <Input
                            required
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            className="pl-10"
                        />
                    </div>
                </div>
            )}
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                    <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                    <Input
                        required
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                    />
                </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                    <Input
                        required
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className={`pl-10 ${mode === "signup" && !isValidPassword && password ? "border-red-500" : ""}`}
                    />
                </div>
                {mode === "signup" && (
                    <PasswordRequirements password={password} />
                )}
            </div>
            {mode === "signup" && (
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                        <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                        <Input
                            required
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            className={`pl-10 ${!passwordsMatch && confirmPassword ? "border-red-500" : ""}`}
                        />
                    </div>
                    {!passwordsMatch && confirmPassword && (
                        <p className="mt-1 text-xs text-red-600">
                            Passwords do not match
                        </p>
                    )}
                </div>
            )}
            <SubmitButton
                mode={mode}
                isDisabled={mode === "signup" && !isFormValid}
            />
        </Form>
    );
}
