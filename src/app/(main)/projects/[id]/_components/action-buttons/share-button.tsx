"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { tryCatch } from "@/lib/utils";
import { generateProjectShareLink } from "@/server/actions/projects/generate-project-share-link";
import { Check, ChevronDown, Copy, Loader2, Share2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export function ShareButton() {
    const params = useParams();
    const projectId = params.id as string;
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [shareableLink, setShareableLink] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const fetchShareLink = async () => {
        if (shareableLink) return;

        setIsLoading(true);
        setError(null);
        const { data, error } = await tryCatch(
            generateProjectShareLink(projectId),
        );

        if (error) {
            console.error("Failed to fetch share link:", data);
            setError("Failed to generate share link.");
            setShareableLink(null);
        }

        if (data?.success) {
            setIsLoading(false);
            setShareableLink(data.data);
        }
    };

    const handleOpen = async (open: boolean) => {
        setIsOpen(open);
        if (open) {
            await fetchShareLink();
        }
    };

    const handleCopy = async () => {
        if (!shareableLink) return;

        try {
            await navigator.clipboard.writeText(shareableLink);
            setError(null);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error("Failed to copy:", error);
            setError("Failed to copy link to clipboard.");
        }
    };

    return (
        <DropdownMenu
            open={isOpen}
            onOpenChange={handleOpen}
        >
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="default"
                    className="flex w-[110px] items-center justify-between gap-1 px-2 py-1 text-xs text-gray-700 sm:w-[142px] sm:gap-2 sm:text-sm md:text-sm"
                >
                    <div className="flex items-center justify-center gap-2">
                        <Share2 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                        <span className="xs:inline">Share</span>
                    </div>

                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                side="bottom"
                align="start"
                className="w-89 p-2"
            >
                <div className="flex flex-col items-center justify-center space-x-2 px-1 py-2">
                    <div className="flex flex-col justify-start">
                        <p className="text-sm font-semibold">Share Link</p>
                        <p className="text-xs text-gray-700">
                            Anyone who has this link will be able to view this
                            project.
                        </p>
                    </div>

                    <div className="flex w-full justify-start py-2">
                        <Input
                            value={shareableLink ?? ""}
                            placeholder={
                                isLoading
                                    ? "Loading project share link..."
                                    : shareableLink
                                      ? "Click Copy Link button to share"
                                      : "No share link available"
                            }
                            readOnly
                            className="w-full"
                            autoFocus={false}
                        />
                    </div>

                    {error && (
                        <p className="mt-1 self-start text-xs text-red-500">
                            {error}
                        </p>
                    )}

                    <Button
                        onClick={handleCopy}
                        disabled={isLoading || !shareableLink}
                        className={`mt-2 w-full ${
                            copied ? "bg-green-600 hover:bg-green-700" : ""
                        }`}
                        size="sm"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Loading...
                            </>
                        ) : copied ? (
                            <>
                                <Check className="mr-2 h-4 w-4" />
                                Copied!
                            </>
                        ) : (
                            <>
                                <Copy className="mr-2 h-4 w-4" />
                                Copy Link
                            </>
                        )}
                    </Button>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
