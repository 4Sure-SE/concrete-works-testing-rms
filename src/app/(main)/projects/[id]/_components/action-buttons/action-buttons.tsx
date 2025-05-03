"use client";
import type { Projects } from "@/lib/types/project";
import { ProjectInfoButton } from "../project-details/project-info-button";
import { EditButton } from "./edit-button";
import { ExportPdfButton } from "./export-pdf-button";
import { ShareButton } from "./share-button";
import { WorkItemsButton } from "./work-items-button";

export function ProjectDetailsActionButtons({
    project,
    disabled,
}: {
    project: Projects;
    disabled: boolean;
}) {
    return (
        <div className="flex flex-wrap justify-between gap-4 px-8">
            <ProjectInfoButton project={project} />
            <div className="flex items-center justify-center space-x-2">
                <ShareButton />
                <ExportPdfButton
                    project={project}
                    disabled={disabled}
                />
                <EditButton projectId={project.id} />
                <WorkItemsButton projectId={project.id} />
            </div>
        </div>
    );
}
