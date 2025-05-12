"use client";

import { ExportPdfButton } from "@/app/(main)/projects/[id]/_components/action-buttons/export-pdf-button";
import downloadQCP from "@/app/(main)/projects/[id]/_components/export-pdf/qcp-report";
import downloadSOT from "@/app/(main)/projects/[id]/_components/export-pdf/sot-report";
import { ProjectInfoButton } from "@/app/(main)/projects/[id]/_components/project-details/project-info-button";
import { ProjectWorkItemsTable } from "@/app/(main)/projects/[id]/_components/table/table";
import { Button } from "@/components/ui/button";
import type { Projects } from "@/lib/types/project";
import { RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

function ActionButtons({
    project,
    isRefreshing,
    onRefresh,
}: {
    project: Projects;
    isRefreshing: boolean;
    onRefresh: () => void;
}) {
    return (
        <div className="flex flex-wrap justify-between gap-4 px-8">
            <div>
                <ProjectInfoButton project={project} />
            </div>
            <div className="flex items-center justify-center space-x-2">
                <Button
                    variant="outline"
                    size="default"
                    onClick={onRefresh}
                    disabled={isRefreshing}
                    className="flex cursor-pointer items-center gap-1 px-2 py-1 text-xs text-gray-700 sm:gap-2 sm:text-sm md:text-sm"
                >
                    <RefreshCw
                        className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ${isRefreshing ? "animate-spin" : ""}`}
                    />
                    <span>Refresh</span>
                </Button>
                <ExportPdfButton
                    project={project}
                    disabled={isRefreshing}
                    downloadQCP={downloadQCP}
                    downloadSOT={downloadSOT}
                />
            </div>
        </div>
    );
}

export function ReadOnlyProjectContent({ project }: { project: Projects }) {
    const router = useRouter();
    const [isRefreshing, startRefreshing] = useTransition();

    const handleRefresh = () => {
        startRefreshing(() => {
            router.refresh();
        });
    };

    return (
        <>
            <ActionButtons
                project={project}
                isRefreshing={isRefreshing}
                onRefresh={handleRefresh}
            />
            <ProjectWorkItemsTable
                data={project}
                isReadOnly={true}
            />
        </>
    );
}
