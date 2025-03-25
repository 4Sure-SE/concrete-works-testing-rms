"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AuthCallbackPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const code = searchParams.get("code");
    const error = searchParams.get("error");
    const error_description = searchParams.get("error_description");

    useEffect(() => {
        const handleCallback = async () => {
            if (error ?? error_description) {
                router.push(
                    `/log-in?error=${encodeURIComponent(error_description ?? "Authentication failed")}`,
                );
                return;
            }

            if (!code) {
                router.push("/log-in?error=No authentication code provided");
                return;
            }

            try {
                const supabase = createClient();

                const { error: exchangeError } =
                    await supabase.auth.exchangeCodeForSession(code);

                if (exchangeError) {
                    router.push(
                        `/log-in?error=${encodeURIComponent(exchangeError.message)}`,
                    );
                    return;
                }

                router.push("/projects");
            } catch (err) {
                router.push(
                    `/log-in?error=${encodeURIComponent((err as Error).message ?? "An unexpected error occurred")}`,
                );
            }
        };

        void handleCallback();
    }, [code, error, error_description, router]);

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <Card className="w-[350px] border-primary/20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-semibold tracking-tight text-primary">
                        Authenticating...
                    </CardTitle>
                    <CardDescription>
                        Please wait while we complete the authentication
                        process.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center py-4">
                        <div className="size-8 animate-spin rounded-full border-4 border-primary border-r-transparent" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
