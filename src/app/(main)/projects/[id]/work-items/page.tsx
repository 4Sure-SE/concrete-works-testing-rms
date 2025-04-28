import SectionHeader from "@/components/custom/section-header";
import { tryCatch } from "@/lib/utils";
import { createProjectWorkItem } from "@/server/actions/projects/create-project-work-item";
import { ProjectService } from "@/server/services/project.service";
import { WorkItemService } from "@/server/services/work-item.service";
import { AddWorkItemForm } from "./_components";
import WorkItemsTable from "./_components/work-items-table";

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

    if (getProjectError) {
        throw getProjectError;
    }

    if (getWorkItemDefinitionsError) {
        throw getWorkItemDefinitionsError;
    }

    return (
        <div className="mx-auto max-w-7xl py-2 md:py-4">
            <SectionHeader
                title="Work Items"
                description={`Manage work items of project ${project?.contractId} `}
            />
            <AddWorkItemForm
                action={createProjectWorkItem}
                projectId={id}
                workItemDefinitions={workItemDefinitions}
            />
            <WorkItemsTable />
        </div>
    );
}
