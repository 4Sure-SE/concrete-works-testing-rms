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
                <p className="font-medium text-gray-700">
                    <span className="font-semibold text-gray-900">
                        Contract ID:
                    </span>{" "}
                    {id}
                </p>
                <p className="mt-4 font-medium text-gray-700">
                    <span className="font-semibold text-gray-900">
                        Contract Name:
                    </span>{" "}
                    {project.contractName}
                </p>
                <p className="mt-4 font-medium text-gray-700">
                    <span className="font-semibold text-gray-900">
                        Contractor Name:
                    </span>{" "}
                    {project.contractorName}
                </p>
            </div>
            <div className="flex w-full flex-col">
                <p className="font-medium text-gray-700">
                    <span className="font-semibold text-gray-900">Limits:</span>{" "}
                    {project.limits}
                </p>
                <p className="mt-4 font-medium text-gray-700">
                    <span className="font-semibold text-gray-900">
                        Location:
                    </span>{" "}
                    {project.location}
                </p>
            </div>
        </div>
    );
}
