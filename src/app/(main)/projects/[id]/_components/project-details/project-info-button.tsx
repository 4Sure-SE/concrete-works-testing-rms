"use client";
import { DialogContent } from "@/components/custom/hidden-close-button-dialog";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import type { Projects } from "@/lib/types/project";
import {
    Building2,
    Factory,
    FilePenLine,
    HardHat,
    Info,
    MapPinned,
    PhilippinePeso,
    TriangleAlert,
    X,
} from "lucide-react";
import { useState } from "react";

export function ProjectInfoButton({ project }: { project: Projects }) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    return (
        <>
            <Button
                variant="outline"
                size="default"
                className="flex w-[110px] cursor-pointer items-center gap-1 px-2 py-1 text-xs text-gray-700 sm:w-[142px] sm:gap-2 sm:text-sm md:text-sm"
                onClick={() => setIsDetailsOpen(true)}
            >
                <Info className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Project Details
            </Button>
            <Dialog
                open={isDetailsOpen}
                onOpenChange={setIsDetailsOpen}
            >
                <DialogContent
                    hideCloseButton={true}
                    className="h-140"
                >
                    <DialogClose className="absolute top-4 right-4 cursor-pointer rounded-md p-1 text-muted-foreground hover:bg-gray-100 hover:text-foreground">
                        <X className="h-6 w-6 text-black" />
                        <span className="sr-only">Close</span>
                    </DialogClose>

                    <DialogHeader className="flex justify-center px-4 py-1">
                        <DialogTitle>Project Details</DialogTitle>
                    </DialogHeader>

                    <div
                        className="w-auto space-y-4 overflow-y-auto px-4 py-4"
                        style={{ scrollbarWidth: "none" }}
                    >
                        <div className="flex w-auto items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <FilePenLine className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Contract Id
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {!project.contractId
                                        ? "N/A"
                                        : project.contractId}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-auto items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <Building2 className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Contract Name
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {!project.contractName
                                        ? "N/A"
                                        : project.contractName}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-auto items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <Factory className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Contractor
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {!project.contractor
                                        ? "N/A"
                                        : project.contractor}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-auto items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <PhilippinePeso className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Contract Cost
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {!project.contractCost
                                        ? "N/A"
                                        : new Intl.NumberFormat("en-PH", {
                                              style: "currency",
                                              currency: "PHP",
                                              minimumFractionDigits: 0,
                                              maximumFractionDigits: 2,
                                          }).format(
                                              Number(
                                                  project.contractCost.toFixed(
                                                      2,
                                                  ),
                                              ),
                                          )}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-auto items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <MapPinned className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Location
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.location?.trim()
                                        ? project.location
                                        : "N/A"}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-auto items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <TriangleAlert className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Limits
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.limits?.trim()
                                        ? project.limits
                                        : "N/A"}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-auto items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <HardHat className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Materials Engineer
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {!project.materialsEngineer
                                        ? "N/A"
                                        : project.materialsEngineer}
                                </p>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
