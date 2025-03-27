import ProjectDetailsActionButtons from "../../_components/project-details/action-buttons";
import ProjectContractDetails from "../../_components/project-details/contract-details";
import fakeProjectsData from "../../_components/project-details/fake-data";
import ProjectDetailsTable from "../../_components/project-details/table";
export default async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div>
            <ProjectContractDetails
                id={id}
                project={fakeProjectsData}
            />
            <ProjectDetailsActionButtons project={fakeProjectsData} />
            <ProjectDetailsTable project={fakeProjectsData} />
        </div>
    );
}
