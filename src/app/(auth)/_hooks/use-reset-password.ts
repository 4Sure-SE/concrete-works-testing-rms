"use client";

import { resetPassword } from "@/server/actions/auth";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { AuthState } from "../_components/types";

export function useResetPasswordLogic() {
    const [state, setState] = useState<AuthState>({});
    const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const hasToken = searchParams.has("code");
        setIsTokenValid(hasToken);

        if (!hasToken) {
            setState({
                error: "Invalid or missing password reset token. Please request a new reset link.",
                success: false,
            });
        }
    }, [searchParams]);

    async function handlePasswordReset(formData: FormData) {
        try {
            const result = await resetPassword(formData);

            setState({
                error: result?.error?.toString(),
                success: result?.success || false,
                message: result?.message,
            });
        } catch (err) {
            console.error("Error resetting password:", err);
            setState({
                error: "An unexpected error occurred. Please try again.",
                success: false,
            });
        }
    }

    return {
        state,
        isTokenValid,
        handlePasswordReset,
    };
}
