"use client";

import { Suspense } from "react";
import { ResetPasswordSuccess } from "../_components";
import { ResetPasswordForm } from "../_components/forms/reset-password-form";
import { useResetPasswordLogic } from "../_hooks/use-reset-password";

function ResetPasswordContent() {
    const { state, isTokenValid, handlePasswordReset } =
        useResetPasswordLogic();

    if (state.success) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <ResetPasswordSuccess message={state.message} />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <ResetPasswordForm
                isTokenValid={isTokenValid}
                state={state}
                onSubmit={handlePasswordReset}
            />
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center">
                    <div className="animate-pulse">
                        Loading reset password...
                    </div>
                </div>
            }
        >
            <ResetPasswordContent />
        </Suspense>
    );
}
