import { BackButton } from "@/app/(main)/_components";
import SectionHeader from "@/components/custom/section-header";
import { tryCatch } from "@/lib/utils";
import { createProjectWorkItem } from "@/server/actions/projects/create-project-work-item";
import { deleteProjectWorkItem } from "@/server/actions/projects/delete-project-work-item";
import { ProjectService } from "@/server/services/project.service";
import { WorkItemService } from "@/server/services/work-item.service";
import { AddWorkItemForm, ProjectWorkItemsTable } from "./_components";

export default async function ManageWorkItemsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const { data: project, error: getProjectError } = await tryCatch(
        ProjectService.getProjectById(id),
    );

    const { data: workItemDefinitions, error: getWorkItemDefinitionsError } =
        await tryCatch(WorkItemService.getWorkItemDefinitionList());

    const { data: projectWorkItems, error: getProjectWorkItemsError } =
        await tryCatch(ProjectService.getProjectWorkItemList(id));

    if (getProjectError) {
        throw getProjectError;
    }

    if (getWorkItemDefinitionsError) {
        throw getWorkItemDefinitionsError;
    }

    if (getProjectWorkItemsError) {
        throw getProjectWorkItemsError;
    }

    return (
        <div className="mx-auto max-w-7xl space-y-5 py-2 md:py-4">
            <SectionHeader
                title="Work Items"
                description={`Manage work items of project ${project?.contractId} `}
                leftControl={<BackButton />}
            />
            <AddWorkItemForm
                action={createProjectWorkItem}
                projectId={id}
                workItemDefinitions={workItemDefinitions}
            />
            <ProjectWorkItemsTable
                data={projectWorkItems}
                onDeleteAction={deleteProjectWorkItem}
            />
        </div>
    );
}
