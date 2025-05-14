"use client";

import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { AlertCircleIcon, RefreshCcwIcon } from "lucide-react";
import { useEffect } from "react";

export default function SharedProjectError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Error loading shared project:", error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center space-y-8 bg-red-50 p-6 text-center dark:bg-red-900/20">
            <div className="rounded-full bg-red-100 p-5 dark:bg-red-800/30">
                <AlertCircleIcon className="h-16 w-16 text-red-500 dark:text-red-400" />
            </div>
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight text-red-700 sm:text-4xl dark:text-red-300">
                    Error Loading Project
                </h1>
                <p className="text-red-600 dark:text-red-300/90">
                    We&apos;re sorry, but we couldn&apos;t load the shared
                    project at this time due to a technical issue.
                    <br />
                    Please try again in a few moments.
                </p>
                {error?.digest && (
                    <p className="pt-2 text-xs text-red-500 dark:text-red-400/80">
                        Error Code: {error.digest}
                    </p>
                )}
                {env.NODE_ENV === "development" && error?.message && (
                    <details className="mt-2 text-left text-xs text-red-600 dark:text-red-300/80">
                        <summary className="cursor-pointer font-medium">
                            Details (Dev Only)
                        </summary>
                        <pre className="mt-1 rounded-md bg-red-100/50 p-2 text-left whitespace-pre-wrap dark:bg-red-900/30">
                            {error.stack ?? error.message}
                        </pre>
                    </details>
                )}
            </div>

            <Button
                variant="destructive"
                onClick={() => reset()}
                className="min-w-[140px] cursor-pointer bg-red-600 text-white hover:bg-red-700"
            >
                <RefreshCcwIcon className="mr-2 h-4 w-4" />
                Try Again
            </Button>
            <p className="text-sm text-red-500 dark:text-red-400/90">
                If the problem continues, the share link might be temporarily
                unavailable.
            </p>
        </div>
    );
}
