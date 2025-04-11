// import { getProjectDetails } from "@/server/queries";
// import { FolderOpen } from "lucide-react";
// import { validate as uuidValidate } from "uuid";
// import ProjectDetailsActionButtons from "../../_components/project-details/action-buttons";
// import ProjectContractDetails from "../../_components/project-details/contract-details";
// import ProjectDetailsTable from "../../_components/project-details/table";
// export default async function ProjectDetailsPage({
//     params,
// }: {
//     params: Promise<{ id: string }>;
// }) {
//     const { id } = await params;
//     const { data: project, error } = await getProjectDetails(id);

//     console.log(id);

//     if (!uuidValidate(id)) {
//         return (
//             <div className="flex h-full w-full flex-col items-center justify-center">
//                 <FolderOpen className="h-15 w-15"></FolderOpen>
//                 <div className="p-4 text-lg font-medium">
//                     Project Details not Found
//                 </div>
//             </div>
//         );
//     }

//     if (error || !project) {
//         return (
//             <div className="flex h-full w-full flex-col items-center justify-center">
//                 <FolderOpen className="h-15 w-15"></FolderOpen>
//                 <div className="p-4 text-lg font-medium">
//                     Project Details not Found
//                 </div>
//             </div>
//         );
//     }
//     return (
//         <div>
//             <ProjectContractDetails
//                 id={id}
//                 project={project}
//             />
//             <ProjectDetailsActionButtons project={project} />
//             <ProjectDetailsTable project={project} />
//         </div>
//     );
// }

import { getProjectDetails } from "@/server/queries";
import { FolderOpen } from "lucide-react";
import { Suspense } from "react";
import { validate as uuidValidate } from "uuid";
import ProjectDetailsActionButtons from "../../_components/project-details/action-buttons";
import ProjectContractDetails from "../../_components/project-details/contract-details";
import ProjectDetailsSkeleton from "../../_components/project-details/project-details-skeleton";
import ProjectDetailsTable from "../../_components/project-details/table";

async function ProjectDetailsContent({ id }: { id: string }) {
    if (!uuidValidate(id)) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center">
                <FolderOpen className="h-15 w-15" />
                <div className="p-4 text-lg font-medium">
                    Project Details not Found
                </div>
            </div>
        );
    }

    const { data: project, error } = await getProjectDetails(id);

    if (error || !project) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center">
                <FolderOpen className="h-15 w-15" />
                <div className="p-4 text-lg font-medium">
                    Project Details not Found
                </div>
            </div>
        );
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

export default async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <Suspense fallback={<ProjectDetailsSkeleton />}>
            <ProjectDetailsContent id={id} />
        </Suspense>
    );
}
