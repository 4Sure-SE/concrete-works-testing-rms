"use client";

import type { Projects } from "@/lib/types/project";
import downloadQCP from "../export-pdf/qcp-report";
import downloadSOT from "../export-pdf/sot-report";
import { ProjectInfoButton } from "../project-details/project-info-button";
import { EditButton } from "./edit-button";
import { ExportPdfButton } from "./export-pdf-button";
import { ShareButton } from "./share-button";
import { WorkItemsButton } from "./work-items-button";

export function ProjectDetailsActionButtons({
    project,
    isReadOnly = false,
    disabled = false,
}: {
    project: Projects;
    disabled: boolean;
    isReadOnly?: boolean;
}) {
    return (
        <div className="flex flex-wrap justify-between gap-4 px-8">
            <ProjectInfoButton project={project} />
            <div className="flex items-center justify-center space-x-2">
                {isReadOnly ? (
                    <ExportPdfButton
                        project={project}
                        downloadQCP={downloadQCP}
                        downloadSOT={downloadSOT}
                    />
                ) : (
                    <>
                        <ShareButton />
                        <ExportPdfButton
                            project={project}
                            disabled={disabled}
                            downloadQCP={downloadQCP}
                            downloadSOT={downloadSOT}
                        />
                        <EditButton projectId={project.id} />
                        <WorkItemsButton projectId={project.id} />
                    </>
                )}
            </div>
        </div>
    );
}
