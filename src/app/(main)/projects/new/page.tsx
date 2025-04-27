import SectionHeader from "@/components/custom/section-header";
import { createProject } from "@/server/actions/projects";

import { BackButton } from "../../_components";
import { getDefaultValues } from "./_components/create-project-form";
import CreateProjectForm from "./_components/create-project-form/create-project-form";

export default function NewProjectPage() {
    const defaultValues = getDefaultValues();

    return (
        <div className="mx-auto max-w-7xl py-2 md:py-4">
            <SectionHeader
                title="Project Information"
                description="Provide information about the project"
                leftControl={<BackButton />}
            />
            <CreateProjectForm
                action={createProject}
                defaultValues={defaultValues}
            />
        </div>
    );
}
