import type { Projects } from "@/lib/types/project/project-details.types";
export default function ProjectContractDetails({
    project,
}: {
    id: string;
    project: Projects;
}) {
    return (
        <div className="grid w-full grid-cols-2 gap-x-4 p-8">
            <div className="flex w-full flex-col">
                <p className="text-xl font-bold text-gray-950">
                    {project.contractId === ""
                        ? "N/A"
                        : `${project.contractId}`}
                </p>
                <div className="mt-4 flex w-auto flex-row gap-2">
                    <span className="font-medium whitespace-nowrap text-gray-800">
                        Contract Name:
                    </span>

                    <p className="flex-1 truncate font-medium text-wrap text-gray-700">
                        {project.contractName === ""
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
                <div className="mt-4 flex w-auto flex-row gap-2">
                    <span className="font-medium whitespace-nowrap text-gray-800">
                        Contract Cost:
                    </span>{" "}
                    <p className="text-gray-7000 flex-1 truncate font-medium text-wrap">
                        {project.contractCost === 0
                            ? "N/A"
                            : new Intl.NumberFormat("en-PH", {
                                  style: "currency",
                                  currency: "PHP",
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 2,
                              }).format(
                                  Number(project.contractCost.toFixed(2)),
                              )}
                    </p>
                </div>
            </div>
        </div>
    );
}
