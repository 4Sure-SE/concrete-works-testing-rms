"use client";

import { Button } from "@/components/ui/button";
import { FileWarningIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TestRecordsModalNotFound() {
    const router = useRouter();
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-md space-y-4 rounded-xl bg-card p-6 text-center shadow-2xl">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <FileWarningIcon className="h-7 w-7 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-semibold">
                    Test Records Not Found
                </h2>
                <p className="text-sm text-muted-foreground">
                    The specific test records you&apos;re looking for could not
                    be found. This might be due to an invalid link or if the
                    test itself no longer exists.
                </p>
                <Button
                    variant="outline"
                    onClick={() => router.back()}
                >
                    Close
                </Button>
            </div>
        </div>
    );
}
