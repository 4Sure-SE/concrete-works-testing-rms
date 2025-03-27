"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ROUTES = {
    LOGIN: "/log-in",
    PROJECTS: "/projects",
} as const;

const ERROR_MESSAGES = {
    AUTH_FAILED: "Authentication failed",
    NO_CODE: "No authentication code provided",
    UNEXPECTED: "An unexpected error occurred",
} as const;

export function useAuthCallback() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(true);

    const code = searchParams.get("code");
    const error = searchParams.get("error");
    const error_description = searchParams.get("error_description");

    useEffect(() => {
        const handleCallback = async () => {
            if (error ?? error_description) {
                router.push(
                    `${ROUTES.LOGIN}?error=${encodeURIComponent(error_description ?? ERROR_MESSAGES.AUTH_FAILED)}`,
                );
                return;
            }

            if (!code) {
                router.push(`${ROUTES.LOGIN}?error=${ERROR_MESSAGES.NO_CODE}`);
                return;
            }

            try {
                const supabase = createClient();
                const { error: exchangeError } =
                    await supabase.auth.exchangeCodeForSession(code);

                if (exchangeError) {
                    router.push(
                        `${ROUTES.LOGIN}?error=${encodeURIComponent(exchangeError.message)}`,
                    );
                    return;
                }

                router.push(ROUTES.PROJECTS);
            } catch (err) {
                router.push(
                    `${ROUTES.LOGIN}?error=${encodeURIComponent((err as Error).message ?? ERROR_MESSAGES.UNEXPECTED)}`,
                );
            } finally {
                setIsProcessing(false);
            }
        };

        void handleCallback();
    }, [code, error, error_description, router]);

    return { isProcessing };
}
