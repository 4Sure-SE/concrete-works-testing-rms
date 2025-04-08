import type { Project } from "./interface";
export default function ProjectContractDetails({
    project,
}: {
    id: string;
    project: Project;
}) {
    return (
        <div className="grid w-full grid-cols-2 gap-x-4 p-8">
            <div className="flex w-full flex-col">
                <p className="text-xl font-bold text-gray-950">
                    {project.contractName === ""
                        ? "N/A"
                        : `${project.contractId}`}
                </p>
                <div className="mt-4 flex w-auto flex-row gap-2">
                    <span className="font-medium whitespace-nowrap text-gray-800">
                        Contract Name:
                    </span>

                    <p className="flex-1 truncate font-medium text-wrap text-gray-700">
                        {project.contractId === ""
                            ? "N/A"
                            : project.contractName}
                    </p>
                </div>
                <div className="mt-4 flex w-auto flex-row gap-2">
                    <span className="font-medium whitespace-nowrap text-gray-800">
                        Contractor:
                    </span>{" "}
                    <p className="text-gray-7000 flex-1 truncate font-medium text-wrap">
                        {project.contractor === "" ? "N/A" : project.contractor}
                    </p>
                </div>
            </div>
        </div>
    );
}
