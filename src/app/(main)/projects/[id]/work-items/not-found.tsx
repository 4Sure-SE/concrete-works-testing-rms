import { Button } from "@/components/ui/button";
import { FolderOpen, HomeIcon } from "lucide-react";
import Link from "next/link";

export default function ProjectNotFound() {
    return (
        <div className="flex min-h-[calc(100vh-var(--header-height,4rem)-var(--page-padding-y,2rem))] flex-col items-center justify-center space-y-6 bg-background p-4 text-center">
            <div className="rounded-full bg-muted p-4">
                <FolderOpen className="h-12 w-12 text-muted-foreground" />
            </div>
            <div className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Project Not Found
                </h1>
                <p className="text-muted-foreground">
                    Sorry, we couldn&apos;t find the project you were looking
                    for.
                    <br />
                    It might have been moved, deleted, or the link might be
                    incorrect.
                </p>
            </div>
            <div className="flex items-center gap-4">
                <Button
                    asChild
                    variant="outline"
                >
                    <Link href="/projects">
                        <HomeIcon className="mr-2 h-4 w-4" />
                        Back to Projects List
                    </Link>
                </Button>
            </div>
        </div>
    );
}
