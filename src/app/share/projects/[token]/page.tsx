import { ProjectContractDetails } from "@/app/(main)/projects/[id]/_components/project-details/contract-details";
import { ProjectDetailsSkeleton } from "@/app/(main)/projects/[id]/_components/project-details/project-details-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { tryCatch } from "@/lib/utils";
import { getProjectShareLinkByToken } from "@/server/data-access/project-share-link/project-share-link";
import { ProjectService } from "@/server/services/project.service";
import { FolderOpen, InfoIcon } from "lucide-react";
import { Suspense } from "react";
import { ReadOnlyProjecContent } from "../_components/read-only-content";

async function SharedProjectContent({ token }: { token: string }) {
    const { data: shareLink, error: shareLinkError } = await tryCatch(
        getProjectShareLinkByToken(token),
    );

    if (shareLinkError || !shareLink) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center">
                <FolderOpen className="h-15 w-15" />
                <div className="p-4 text-lg font-medium">
                    Shared Project Not Found
                </div>
                <div className="text-sm text-gray-500">
                    The shared link may be invalid
                </div>
            </div>
        );
    }

    const { data: project, error: projectError } = await tryCatch(
        ProjectService.getProjectDetails(shareLink.projectId),
    );
    if (projectError || !project) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center">
                <FolderOpen className="h-15 w-15" />
                <div className="p-4 text-lg font-medium">
                    Project Details Not Found
                </div>
                <div className="text-sm text-gray-500">
                    The project associated with this shared link could not be
                    found.
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-center p-4">
                <Alert className="mb-4 w-fit rounded-lg border border-white/10 bg-white/20 p-4 text-gray-900 shadow-lg backdrop-blur-md dark:bg-gray-800/20 dark:text-gray-100">
                    <InfoIcon className="h-4 w-4" />
                    <AlertTitle>Shared View</AlertTitle>
                    <AlertDescription>
                        You are viewing a read-only shared version of this
                        project.
                    </AlertDescription>
                </Alert>
            </div>
            <ProjectContractDetails
                id={project.id}
                project={project}
                hideBackButton={true}
            />
            <ReadOnlyProjecContent project={project} />
        </div>
    );
}

export default async function SharedProjectPage({
    params,
}: {
    params: Promise<{ token: string }>;
}) {
    const { token } = await params;

    return (
        <Suspense fallback={<ProjectDetailsSkeleton />}>
            <SharedProjectContent token={token} />
        </Suspense>
    );
}
