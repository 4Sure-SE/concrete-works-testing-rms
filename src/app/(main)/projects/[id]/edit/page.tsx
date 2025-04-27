import SectionHeader from "@/components/custom/section-header";
import { tryCatch } from "@/lib/utils";
import { updateProject } from "@/server/actions/projects/update-project";
import { ProjectService } from "@/server/services/project.service";
import UpdateProjectForm from "./_components/update-project-form/update-project-form";

export default async function ProjectEditPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const { data: project, error: getProjectError } = await tryCatch(
        ProjectService.getProjectById(id),
    );

    if (getProjectError) {
        throw getProjectError;
    }

    return (
        <div className="mx-auto max-w-7xl py-2 md:py-4">
            <SectionHeader
                title="Edit Project"
                description={`Update information about project ${project.id}`}
            />
            <UpdateProjectForm
                projectId={id}
                action={updateProject}
                defaultValues={project}
            />
        </div>
    );
}
