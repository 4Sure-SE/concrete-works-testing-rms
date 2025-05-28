"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock } from "lucide-react";
import Form from "next/form";
import { useState } from "react";
import { SubmitButton } from "../actions/submit-button";
import { AuthCard } from "../layout/auth-card";
import type { AuthState } from "../types";
import { FormInput } from "./form-input";
import PasswordRequirements from "./password-req";

interface ResetPasswordFormProps {
    isTokenValid: boolean | null;
    state: AuthState;
    onSubmit: (formData: FormData) => Promise<void>;
}

export function ResetPasswordForm({
    isTokenValid,
    state,
    onSubmit,
}: ResetPasswordFormProps) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isPasswordValid, setPasswordValid] = useState(false);

    const passwordsMatch = password === confirmPassword;

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        try {
            await onSubmit(formData);
        } finally {
            setIsSubmitting(false);
        }
    };

    const ResetPasswordFormContent =
        isTokenValid === false ? null : (
            <>
                <Form
                    action={handleSubmit}
                    className="flex flex-col gap-6"
                >
                    <div className="relative grid w-full items-center gap-1.5">
                        <FormInput
                            id="password"
                            label="New Password"
                            type="password"
                            placeholder="Enter your new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            Icon={Lock}
                        />
                        {password.length > 0 && (
                            <PasswordRequirements
                                password={password}
                                validation={setPasswordValid}
                            />
                        )}
                    </div>

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

                    <SubmitButton
                        mode="reset-password"
                        isDisabled={isSubmitting}
                    />
                </Form>
                {state.error && isTokenValid && (
                    <div className="mt-4">
                        <Alert variant="destructive">
                            <AlertDescription>{state.error}</AlertDescription>
                        </Alert>
                    </div>
                )}
            </>
        );

    return (
        <AuthCard
            title={
                isTokenValid === false ? "Invalid Reset Link" : "Reset Password"
            }
            description={
                isTokenValid === false
                    ? "Your password reset link is invalid or has expired."
                    : "Enter your new password below."
            }
            alternateText={
                isTokenValid === false
                    ? "Need a new reset link?"
                    : "Remember your password?"
            }
            linkText={
                isTokenValid === false
                    ? "Request Password Reset"
                    : "Back to Login"
            }
            linkHref={isTokenValid === false ? "/forgot-password" : "/log-in"}
        >
            {isTokenValid === false ? (
                <Alert variant="destructive">
                    <AlertDescription>
                        {state.error ??
                            "The reset link you clicked is invalid or has expired. Please request a new one."}
                    </AlertDescription>
                </Alert>
            ) : (
                ResetPasswordFormContent
            )}
        </AuthCard>
    );
}
