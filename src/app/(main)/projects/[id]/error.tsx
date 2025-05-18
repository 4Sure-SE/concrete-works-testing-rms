"use client";

import { SupportLink } from "@/components/custom/support-link";
import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { AlertTriangle, ListChecks, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ProjectDetailError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(`Error loading project detail:`, error);
    }, [error]);

    return (
        <div className="flex min-h-[calc(100vh-var(--header-height,4rem)-var(--page-padding-y,2rem))] flex-col items-center justify-center space-y-8 bg-background p-6 text-center sm:p-8">
            <div className="rounded-full bg-destructive/10 p-4">
                <AlertTriangle className="h-12 w-12 text-destructive" />
            </div>
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight text-destructive sm:text-4xl">
                    Error Loading Project
                </h1>
                <p className="text-muted-foreground md:text-lg">
                    We couldn&apos;t load the details for this project due to an
                    unexpected issue.
                    <br />
                    Please try again, or return to the projects list.
                </p>
                {error?.digest && (
                    <p className="text-xs text-muted-foreground/70">
                        Error Code: {error.digest}
                    </p>
                )}
                {env.NODE_ENV === "development" && error?.message && (
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

            <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Button
                    variant="destructive"
                    onClick={() => reset()}
                    className="min-w-[130px] cursor-pointer"
                >
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Try Again
                </Button>
                <Button
                    asChild
                    variant="outline"
                    className="min-w-[130px]"
                >
                    <Link href="/projects">
                        <ListChecks className="mr-2 h-4 w-4" />
                        View All Projects
                    </Link>
                </Button>
                <SupportLink />
            </div>
        </div>
    );
}
