import { ProjectContractDetails } from "@/app/(main)/projects/[id]/_components/project-details/contract-details";
import { ProjectDetailsSkeleton } from "@/app/(main)/projects/[id]/_components/project-details/project-details-skeleton";
import { tryCatch } from "@/lib/utils";
import { ProjectService } from "@/server/services";
import { InfoIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ReadOnlyProjectContent } from "../_components/read-only-content";

async function SharedProjectContent({ token }: { token: string }) {
    const { data: sharedProject, error } = await tryCatch(
        ProjectService.getProjectDetailsByToken(token),
    );

    if (error) {
        notFound();
    }

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex justify-center p-4">
                <div
                    role="status"
                    className="mb-4 flex w-fit items-center gap-2 rounded-md bg-blue-50 px-4 py-3 text-sm text-blue-700 dark:bg-blue-900/20 dark:text-blue-200"
                >
                    <InfoIcon className="h-4 w-4 text-blue-500 dark:text-blue-300" />
                    <span>
                        You are viewing a read-only shared version of this
                        project.
                    </span>
                </div>
            </div>
            <ProjectContractDetails
                id={sharedProject.id}
                project={sharedProject}
                hideBackButton={true}
            />
            <ReadOnlyProjectContent project={sharedProject} />
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
