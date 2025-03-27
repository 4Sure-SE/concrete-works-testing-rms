import type Project from "./interface";
export default function ProjectContractDetails({
    id,
    project,
}: {
    id: string;
    project: Project;
}) {
    return (
        <div className="grid w-full grid-cols-2 gap-x-4 p-8">
            <div className="flex w-full flex-col">
                <p className="text-xl font-bold text-gray-950">
                    {project.contractName}
                </p>
                <p className="mt-4 font-medium text-gray-700">
                    <span className="font-medium text-gray-800">
                        Contract ID:
                    </span>{" "}
                    {id} {project.contractId}
                </p>

                <p className="mt-4 font-medium text-gray-700">
                    <span className="font-medium text-gray-800">
                        Contractor:
                    </span>{" "}
                    {project.contractorName}
                </p>
            </div>
        </div>
    );
}
