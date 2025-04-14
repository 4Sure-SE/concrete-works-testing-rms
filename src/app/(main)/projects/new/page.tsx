import type { CreateProjectInitialState } from "@/lib/types/project/project.types";
import { addProject } from "@/server/actions/projects";
import { getDefaultValues, ProjectForm } from "./_components/project-form";

export default function NewProjectPage() {
    const newProjectInitialState: CreateProjectInitialState = {
        data: getDefaultValues(),
        error: null,
    };

    return (
        <ProjectForm
            action={addProject}
            initialState={newProjectInitialState}
        />
    );
}
