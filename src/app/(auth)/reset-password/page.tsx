"use client";

import { ResetPasswordForm, ResetPasswordSuccess } from "../_components/";
import { useResetPasswordLogic } from "../_hooks/use-reset-password";

export default function ResetPasswordPage() {
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
