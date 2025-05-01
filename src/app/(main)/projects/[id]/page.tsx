import { tryCatch } from "@/lib/utils";
import { updateProjectTest } from "@/server/actions/projects/update-test-on-file";
import { ProjectService } from "@/server/services/project.service";
import { FolderOpen } from "lucide-react";
import { Suspense } from "react";
import { validate as uuidValidate } from "uuid";
import { ProjectContractDetails } from "./_components/project-details/contract-details";
import { ProjectDetailsSkeleton } from "./_components/project-details/project-details-skeleton";
import { ProjectWorkItemsTable } from "./_components/table/table";

async function ProjectDetailsContent({ id }: { id: string }) {
    if (!uuidValidate(id)) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center">
                <FolderOpen className="h-15 w-15" />
                <div className="p-4 text-lg font-medium">
                    Project Details not Found
                </div>
            </div>
        );
    }

    const { data: project, error } = await tryCatch(
        ProjectService.getProjectDetails(id),
    );

    if (error || !project) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center">
                <FolderOpen className="h-15 w-15" />
                <div className="p-4 text-lg font-medium">
                    Project Details not Found
                </div>
            </div>
        );
    }

    return (
        <div>
            <ProjectContractDetails
                id={id}
                project={project}
            />
            <ProjectWorkItemsTable
                project={project}
                onServerUpdate={updateProjectTest}
            />
        </div>
    );
}

export async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <Suspense fallback={<ProjectDetailsSkeleton />}>
            <ProjectDetailsContent id={id} />
        </Suspense>
    );
}
