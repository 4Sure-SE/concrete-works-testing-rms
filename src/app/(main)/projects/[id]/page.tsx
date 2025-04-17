import { tryCatch } from "@/lib/utils";
import { UpdateProjectTest } from "@/server/actions/projects/update-test-on-file";
import { ProjectService } from "@/server/services/project.service";
import { FolderOpen } from "lucide-react";
import { Suspense } from "react";
import { validate as uuidValidate } from "uuid";
import ProjectDetailsActionButtons from "./_components/action-buttons";
import ProjectContractDetails from "./_components/contract-details";
import ProjectDetailsSkeleton from "./_components/project-details-skeleton";
import ProjectWorkItemsTable from "./_components/table";

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
            <ProjectDetailsActionButtons project={project} />
            <ProjectWorkItemsTable
                project={project}
                onServerUpdate={UpdateProjectTest}
            />
        </div>
    );
}

export default async function ProjectDetailsPage({
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

    return (
        <Suspense fallback={<ProjectDetailsSkeleton />}>
            <ProjectDetailsContent id={id} />
        </Suspense>
    );
}
