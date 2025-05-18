"use client";

import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { AlertTriangleIcon, RefreshCcwIcon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TestRecordsModalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();

    useEffect(() => {
        console.error("Error loading test records modal:", error);
    }, [error]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-md space-y-6 rounded-xl bg-card p-6 text-center shadow-2xl">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                    <AlertTriangleIcon className="h-7 w-7 text-destructive" />
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-destructive">
                        Error Loading Records
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        An unexpected error occurred while trying to load the
                        test records.
                    </p>
                    {error?.digest && (
                        <p className="mt-1 text-xs text-muted-foreground/80">
                            Error Code: {error.digest}
                        </p>
                    )}
                    {env.NODE_ENV === "development" && error?.message && (
                        <details className="mt-2 text-left text-xs text-muted-foreground">
                            <summary className="cursor-pointer font-medium">
                                Details (Dev Only)
                            </summary>
                            <pre className="mt-1 rounded-md bg-muted/50 p-2 text-left whitespace-pre-wrap">
                                {error.stack ?? error.message}
                            </pre>
                        </details>
                    )}
                </div>
                <div className="flex justify-center gap-3">
                    <Button
                        variant="outline"
                        onClick={() => router.back()}
                    >
                        <XIcon className="mr-2 h-4 w-4" /> Close
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={() => reset()}
                    >
                        <RefreshCcwIcon className="mr-2 h-4 w-4" /> Try Again
                    </Button>
                </div>
            </div>
        </div>
    );
}
