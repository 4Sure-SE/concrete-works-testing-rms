import SectionHeader from "@/components/custom/section-header";
import { createProject } from "@/server/actions/projects";
import { getDefaultValues, ProjectForm } from "./_components/project-form";

export default function NewProjectPage() {
    return (
        <div className="mx-auto max-w-7xl py-2 md:py-4">
            <SectionHeader
                title="Project Information"
                description="Provide information about the project"
            />
            <ProjectForm
                action={createProject}
                defaultValues={getDefaultValues()}
            />
        </div>
    );
}
