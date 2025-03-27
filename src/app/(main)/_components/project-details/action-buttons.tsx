"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Building2,
    Check,
    ChevronDown,
    Copy,
    Factory,
    FilePenLine,
    FileText,
    HardHat,
    Info,
    MapPinned,
    Plus,
    Share2,
    TriangleAlert,
} from "lucide-react";
import { useState } from "react";
import type Project from "./interface";

export default function ProjectDetailsActionButtons({
    project,
}: {
    project: Project;
}) {
    const [copied, setCopied] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
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
        <div className="flex flex-wrap justify-between gap-4 px-8">
            <Button
                variant="outline"
                size="default"
                className="flex w-[110px] items-center gap-1 px-2 py-1 text-xs text-gray-700 sm:w-[142px] sm:gap-2 sm:text-sm md:text-sm"
                onClick={() => setIsDetailsOpen(true)}
            >
                <Info className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Project Details
            </Button>
            <Dialog
                open={isDetailsOpen}
                onOpenChange={setIsDetailsOpen}
            >
                <DialogContent>
                    <DialogHeader className="flex justify-center px-4 py-1">
                        <DialogTitle>Project Details</DialogTitle>
                    </DialogHeader>
                    <div className="w-full space-y-4 p-4">
                        <div className="flex w-full items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <Building2 className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Contract Name
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.contractName}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <FilePenLine className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Contract Id
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.contractId}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <Factory className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Contractor
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.contractorName}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <MapPinned className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Location
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.location}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <TriangleAlert className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Limits
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.limits}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <HardHat className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Material Engineer
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.materialsEngineer}
                                </p>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <div className="flex items-center justify-center space-x-2">
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
                                <p className="text-sm font-semibold">
                                    Share Link
                                </p>
                                <p className="text-xs text-gray-700">
                                    Anyone who has this link will be able to
                                    view this project.
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
                                >
                                    {!copied ? (
                                        <Copy className="h-4 w-4" />
                                    ) : (
                                        <Check className="h-4 w-4 text-green-500"></Check>
                                    )}
                                </button>
                            </div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button
                    variant="outline"
                    size="default"
                    className="flex w-[110px] items-center gap-1 px-2 py-1 text-xs text-gray-700 sm:w-[142px] sm:gap-2 sm:text-sm md:text-sm"
                >
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    Export Report
                </Button>
                <Button
                    variant="default"
                    size="default"
                    className="flex w-[137px] items-center gap-1 bg-blue-700 px-2 py-1 text-xs text-white hover:bg-blue-800 sm:w-[169px] sm:gap-2 sm:text-sm md:text-sm"
                >
                    <Plus className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    <span className="xs:inline">Add Item of Work</span>
                </Button>
            </div>
        </div>
    );
}
