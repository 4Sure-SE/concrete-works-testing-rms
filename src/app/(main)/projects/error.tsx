"use client";

import { SupportLink } from "@/components/custom/support-link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { useEffect } from "react";

export default function ProjectsError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Error in projects segment:", error);
    }, [error]);

    return (
        <div className="flex min-h-[calc(100vh-var(--header-height,4rem)-var(--page-padding-y,2rem))] flex-col items-center justify-center space-y-8 bg-background p-6 text-center sm:p-8">
            <div className="rounded-full bg-destructive/10 p-4">
                <AlertTriangle className="h-12 w-12 text-destructive" />
            </div>
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight text-destructive sm:text-4xl">
                    Oops! Something went wrong.
                </h1>
                <p className="text-muted-foreground md:text-lg">
                    We encountered an unexpected issue while trying to load the
                    projects.
                    <br />
                    You can try to refresh the page or attempt to recover below.
                </p>
                {error?.digest && (
                    <p className="text-xs text-muted-foreground/70">
                        Error Code: {error.digest}
                    </p>
                )}
                {process.env.NODE_ENV === "development" && error?.message && (
                    <details className="mt-2 text-left text-xs text-muted-foreground">
                        <summary className="cursor-pointer font-medium">
                            Error Details (Dev Only)
                        </summary>
                        <pre className="mt-1 rounded-md border border-dashed border-muted-foreground/30 bg-muted/50 p-3 text-left whitespace-pre-wrap">
                            {error.stack ?? error.message}
                        </pre>
                    </details>
                )}
            </div>

            <div className="flex items-center gap-4">
                <Button
                    variant="destructive"
                    onClick={() => reset()}
                    className="min-w-[120px] cursor-pointer"
                >
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Try Again
                </Button>
            </div>
            <SupportLink />
        </div>
    );
}
