import { notFound } from "next/navigation";
import { Suspense } from "react";

import { BackButton } from "@/app/(main)/_components";
import SectionHeader from "@/components/custom/section-header";
import { tryCatch } from "@/lib/utils";
import { updateProject } from "@/server/actions/projects/update-project";
import { ProjectService } from "@/server/services/project.service";
import { FormPageSkeleton } from "../../_components/project-form/project-form-skeleton";
import { UpdateProjectForm } from "./_components/";

async function EditProjectContent({ projectId }: { projectId: string }) {
    const { data: project, error: getProjectError } = await tryCatch(
        ProjectService.getProjectById(projectId),
    );

    if (getProjectError) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-7xl py-2 md:py-4">
            <SectionHeader
                title="Edit Project"
                description={`Update information about project ${project.contractId}`}
                leftControl={<BackButton />}
            />
            <UpdateProjectForm
                projectId={projectId}
                action={updateProject}
                defaultValues={project}
            />
        </div>
    );
}

export default async function ProjectEditPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <Suspense
            fallback={
                <FormPageSkeleton
                    numberOfFields={8}
                    hasLeftControl={true}
                />
            }
        >
            <EditProjectContent projectId={id} />
        </Suspense>
    );
}
