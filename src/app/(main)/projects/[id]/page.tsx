import { notFound } from "next/navigation";
import { Suspense } from "react";

import { tryCatch } from "@/lib/utils";
import { ProjectService } from "@/server/services/project.service";
import { ProjectContractDetails } from "./_components/project-details/contract-details";
import { ProjectDetailsSkeleton } from "./_components/project-details/project-details-skeleton";
import { ProjectWorkItemsTable } from "./_components/table/table";

async function ProjectDetailsContent({ id }: { id: string }) {
    const { data: project, error } = await tryCatch(
        ProjectService.getProjectDetails(id),
    );

    if (error) {
        notFound();
    }

    return (
        <div>
            <ProjectContractDetails
                id={id}
                project={project}
            />
            <ProjectWorkItemsTable data={project} />
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
        <>
            <Suspense fallback={<ProjectDetailsSkeleton />}>
                <ProjectDetailsContent id={id} />
            </Suspense>
        </>
    );
}
