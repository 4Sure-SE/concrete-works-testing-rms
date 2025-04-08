import { getProjectDetails } from "@/server/queries";
import { validate as uuidValidate } from "uuid";
import ProjectDetailsActionButtons from "../../_components/project-details/action-buttons";
import ProjectContractDetails from "../../_components/project-details/contract-details";
import ProjectDetailsTable from "../../_components/project-details/table";

export default async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const { data: project, error } = await getProjectDetails(id);

    console.log(id);

    if (!uuidValidate(id)) {
        return (
            <div className="text-red-500">Error: Invalid project ID format</div>
        );
    }

    if (error || !project) {
        return <div className="text-red-500">Failed to load project data.</div>;
    }
    return (
        <div>
            <ProjectContractDetails
                id={id}
                project={project}
            />
            <ProjectDetailsActionButtons project={project} />
            <ProjectDetailsTable project={project} />
        </div>
    );
}
