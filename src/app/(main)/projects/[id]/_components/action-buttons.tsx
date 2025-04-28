"use client";
import type { Projects } from "@/lib/types/project";
import EditButton from "./edit-button";
import ExportPdfButton from "./export-pdf-button";
import ProjectInfoButton from "./project-info-button";
import ShareButton from "./share-button";
import { WorkItemsButton } from "./work-items-button";

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
                <ExportPdfButton project={project} />
                <EditButton projectId={project.id} />
                <WorkItemsButton projectId={project.id} />
            </div>
        </div>
    );
}
