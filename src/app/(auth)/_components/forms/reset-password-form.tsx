"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { AuthCard, AuthForm } from "..";
import type { AuthState } from "../types";

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
                <>
                    <AuthForm
                        mode="reset-password"
                        action={onSubmit}
                    />
                    {state.error && (
                        <div className="mt-4">
                            <Alert variant="destructive">
                                <AlertDescription>
                                    {state.error}
                                </AlertDescription>
                            </Alert>
                        </div>
                    )}
                </>
            )}
        </AuthCard>
    );
}
