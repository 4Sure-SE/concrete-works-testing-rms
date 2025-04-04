"use client";
import { Lock, Mail, User } from "lucide-react";
import Form from "next/form";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SubmitButton } from "../actions/submit-button";
import type { AuthFormMode } from "../types";
import { FormInput } from "./form-input";
import PasswordRequirements from "./password-req";

interface AuthFormProps {
    mode: AuthFormMode;
    action: (
        formData: FormData,
    ) => void | Promise<void | { error?: string | null; field?: string }>;
    initialError?: {
        error?: string | null;
        field?: string;
    } | null;
}

export function AuthForm({ mode, action, initialError = null }: AuthFormProps) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (
            initialError &&
            initialError.field === "email" &&
            initialError.error
        ) {
            setEmailError(initialError.error);
        }
    }, [initialError]);

    const isValidPassword = password.length >= 8 && /[A-Z]/.test(password);
    const passwordsMatch =
        !["signup", "reset-password"].includes(mode) ||
        password === confirmPassword;
    const isFormValid =
        (mode === "login" ||
            mode === "reset-request" ||
            (isValidPassword && passwordsMatch)) &&
        !emailError;
    useEffect(() => {
        setEmailError("");
    }, [email]);

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        try {
            const result = await action(formData);
            if (result && "error" in result && result.field === "email") {
                setEmailError(result.error ?? "");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form
            action={handleSubmit}
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

            {mode !== "reset-password" && (
                <FormInput
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    Icon={Mail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!emailError}
                    errorMessage={emailError}
                />
            )}

            {mode !== "reset-request" && (
                <div className="relative grid w-full items-center gap-1.5">
                    <FormInput
                        id="password"
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        Icon={Lock}
                        error={
                            (mode === "signup" || mode === "reset-password") &&
                            !isValidPassword &&
                            password !== ""
                        }
                    />
                    {mode === "login" && (
                        <div className="absolute top-0 right-0 text-xs">
                            <Link
                                href="/forgot-password"
                                className="text-blue-600 hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                    )}
                    {(mode === "signup" || mode === "reset-password") &&
                        password.length > 0 && (
                            <PasswordRequirements password={password} />
                        )}
                </div>
            )}

            {(mode === "signup" || mode === "reset-password") && (
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
                isDisabled={
                    (mode === "signup" || mode === "reset-password") &&
                    (!isFormValid || isSubmitting)
                }
            />
        </Form>
    );
}
