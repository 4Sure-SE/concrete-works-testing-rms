"use client";

import { requestPasswordReset } from "@/server/actions/auth";
import { useState } from "react";
import { SuccessMessage } from "../_components";
import { ForgotPasswordForm } from "../_components/forms/forgot-password-form";
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
                <ForgotPasswordForm
                    action={handleResetRequest}
                    state={state}
                />
            )}
        </div>
    );
}
