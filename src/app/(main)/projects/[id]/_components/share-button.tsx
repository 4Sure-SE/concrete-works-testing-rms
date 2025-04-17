"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Check, ChevronDown, Copy, Share2 } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
    const [copied, setCopied] = useState(false);

    const shareableLink = "https://yourwebsite.com/shared-link";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareableLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    };
    return (
        <DropdownMenu>
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

                    <div className="flex w-full justify-start space-x-2 py-2">
                        <Input
                            value={shareableLink}
                            readOnly
                            className="w-full"
                            autoFocus={false}
                        />
                        <button
                            onClick={handleCopy}
                            className="rounded-md p-2.5 hover:bg-gray-300"
                            data-testid="copy-button"
                        >
                            {!copied ? (
                                <Copy className="h-4 w-4" />
                            ) : (
                                <Check
                                    data-testid="check-icon"
                                    className="h-4 w-4 text-green-500"
                                ></Check>
                            )}
                        </button>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
