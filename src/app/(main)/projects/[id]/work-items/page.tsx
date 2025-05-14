import { notFound } from "next/navigation";
import { Suspense } from "react";

import { BackButton } from "@/app/(main)/_components";
import SectionHeader from "@/components/custom/section-header";
import { tryCatch } from "@/lib/utils";
import { createProjectWorkItem } from "@/server/actions/projects/create-project-work-item";
import { deleteProjectWorkItem } from "@/server/actions/projects/delete-project-work-item";
import { ProjectService } from "@/server/services/project.service";
import { WorkItemService } from "@/server/services/work-item.service";

import { AddProjectWorkItemForm, ProjectWorkItemsTable } from "./_components";
import ManageWorkItemsPageSkeleton from "./loading";

async function WorkItemsContent({ projectId }: { projectId: string }) {
    const projectPromise = tryCatch(ProjectService.getProjectById(projectId));
    const definitionsPromise = tryCatch(
        WorkItemService.getWorkItemDefinitionList(),
    );
    const projectWorkItemsPromise = tryCatch(
        ProjectService.getProjectWorkItemList(projectId),
    );

    const [projectResult, definitionsResult, projectWorkItemsResult] =
        await Promise.all([
            projectPromise,
            definitionsPromise,
            projectWorkItemsPromise,
        ]);

    if (projectResult.error) {
        notFound();
    }

    const project = projectResult.data;

    if (definitionsResult.error) {
        throw definitionsResult.error;
    }
    const workItemDefinitions = definitionsResult.data || [];

    if (projectWorkItemsResult.error) {
        throw projectWorkItemsResult.error;
    }
    const projectWorkItems = projectWorkItemsResult.data || [];

    return (
        <div className="mx-auto max-w-7xl space-y-5 py-2 md:py-4">
            <SectionHeader
                title={"Manage Work Items"}
                description={`For project ${project.contractId}`}
                leftControl={<BackButton />}
            />
            <AddProjectWorkItemForm
                action={createProjectWorkItem}
                projectId={projectId}
                workItemDefinitions={workItemDefinitions}
            />
            <ProjectWorkItemsTable
                projectId={projectId}
                data={projectWorkItems}
                onDeleteAction={deleteProjectWorkItem}
            />
        </div>
    );
}

export default async function ManageWorkItemsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <Suspense fallback={<ManageWorkItemsPageSkeleton />}>
            <WorkItemsContent projectId={id} />
        </Suspense>
    );
}
