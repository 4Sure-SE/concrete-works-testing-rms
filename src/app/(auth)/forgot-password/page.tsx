"use client";

import { requestPasswordReset } from "@/server/actions/auth";
import { useState } from "react";
import { AuthCard, AuthForm, SuccessMessage } from "../_components";
import { type AuthState } from "../_components/types";

export default function ForgotPasswordPage() {
    const [state, setState] = useState<AuthState>({});

    async function handleResetRequest(formData: FormData) {
        const result = await requestPasswordReset(formData);
        setState(result);
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            {state.success ? (
                <SuccessMessage
                    title="Check Your Email"
                    message={
                        state.message ??
                        "We've sent you instructions to reset your password."
                    }
                    linkText="Return to Login"
                    linkHref="/log-in"
                />
            ) : (
                <AuthCard
                    title="Forgot Password"
                    description="Enter your email to receive a password reset link."
                    alternateText="Remember your password?"
                    linkText="Back to Login"
                    linkHref="/log-in"
                >
                    <AuthForm
                        mode="reset-request"
                        action={handleResetRequest}
                    />
                    {state.error && (
                        <div className="relative mt-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
                            <span className="block sm:inline">
                                {state.error}
                            </span>
                        </div>
                    )}
                </AuthCard>
            )}
        </div>
    );
}
