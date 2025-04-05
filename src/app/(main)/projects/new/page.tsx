import {
    getDefaultValues,
    type ProjectActionState,
} from "@/lib/definitions/project";
import { addProject } from "@/server/actions/projects/";
import { ProjectForm } from "../../_components/project-form/";

export default function NewProjectPage() {
    const newProjectInitialState: ProjectActionState = {
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
