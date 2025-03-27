"use client";

import { AuthLoadingCard } from "@/app/(auth)/_components";
import { useAuthCallback } from "../_hooks/use-auth-callback";
import { Suspense } from "react";

function AuthCallback() {
    const { isProcessing } = useAuthCallback();

    return (
        <AuthLoadingCard
            title="Authenticating"
            message={
                isProcessing
                    ? "Please wait while we process your authentication."
                    : "Authentication completed."
            }
            backUrl="/log-in"
            backText="Go back to login"
        />
    );
}

export default function AuthCallbackPage() {
    return (
        <Suspense
            fallback={
                <AuthLoadingCard
                    title="Loading"
                    message="Please wait while we load the authentication page."
                    backUrl="/log-in"
                    backText="Go back to login"
                />
            }
        >
            <AuthCallback />
        </Suspense>
    );
}
