"use client";
import { Lock, Mail, User } from "lucide-react";
import Form from "next/form";
import { useState } from "react";
import { FormInput } from "./form/form-input";
import PasswordRequirements from "./form/password-req";
import { SubmitButton } from "./form/submit-button";

interface AuthFormProps {
    mode: "login" | "signup";
    action: (formData: FormData) => void | Promise<void>;
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
                <FormInput
                    id="fullName"
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                    Icon={User}
                />
            )}

            <FormInput
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                Icon={Mail}
            />

            <div className="grid w-full items-center gap-1.5">
                <FormInput
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    Icon={Lock}
                    error={
                        mode === "signup" && !isValidPassword && password !== ""
                    }
                />
                {mode === "signup" && (
                    <PasswordRequirements password={password} />
                )}
            </div>

            {mode === "signup" && (
                <div className="grid w-full items-center gap-1.5">
                    <FormInput
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        Icon={Lock}
                        error={!passwordsMatch && confirmPassword !== ""}
                    />
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
