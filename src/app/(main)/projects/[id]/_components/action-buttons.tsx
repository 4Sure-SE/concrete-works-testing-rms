"use client";
import { Button } from "@/components/ui/button";
import type { Projects } from "@/lib/types/project";
import { Plus } from "lucide-react";
import Link from "next/link";
import ExportPdfButton from "./export-pdf-button";
import ProjectInfoButton from "./project-info-button";
import ShareButton from "./share-button";

export default function ProjectDetailsActionButtons({
    project,
}: {
    project: Projects;
}) {
    return (
        <div className="flex flex-wrap justify-between gap-4 px-8">
            <ProjectInfoButton project={project} />
            <div className="flex items-center justify-center space-x-2">
                <ShareButton />
                <ExportPdfButton />
                <Button
                    asChild
                    variant="default"
                    size="default"
                    className="flex w-[137px] items-center gap-1 bg-blue-700 px-2 py-1 text-xs text-white hover:bg-blue-800 sm:w-[169px] sm:gap-2 sm:text-sm md:text-sm"
                >
                    <Link href={`/projects/${project.id}/work-items`}>
                        <>
                            <Plus className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                            <span className="xs:inline">Add Item of Work</span>
                        </>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
