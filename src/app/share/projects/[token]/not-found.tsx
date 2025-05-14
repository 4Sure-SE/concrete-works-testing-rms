import { Button } from "@/components/ui/button";
import { FileSearchIcon } from "lucide-react";

export default function SharedProjectNotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-slate-50 p-4 text-center dark:bg-slate-900">
            <div className="rounded-full bg-slate-100 p-5 dark:bg-slate-800">
                <FileSearchIcon className="h-16 w-16 text-slate-400 dark:text-slate-500" />
            </div>
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl dark:text-slate-100">
                    Shared Project Not Found
                </h1>
                <p className="text-slate-600 dark:text-slate-400">
                    The share link you followed may be invalid, expired, or the
                    project is no longer shared.
                    <br />
                    Please check the link or contact the person who shared it
                    with you.
                </p>
            </div>
            <Button
                asChild
                variant="outline"
            ></Button>
        </div>
    );
}
