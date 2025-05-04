import { DeleteDialog } from "@/components/custom/delete-dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { ProjectSummaryDTO } from "@/lib/types/project";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { ProgressBar } from "./progress-bar";
import { ProjectStats } from "./project-stats";

interface ProjectItemProps {
    data: ProjectSummaryDTO;
    onDeleteAction: (id: string) => Promise<void>;
    disabled?: boolean;
}

export function ProjectItem({
    data,
    onDeleteAction,
    disabled = false,
}: ProjectItemProps) {
    const completionPercentage =
        data.stats.totalRequiredTests === 0
            ? 0
            : Math.min(
                  Math.round(
                      (data.stats.totalOnFileTests /
                          data.stats.totalRequiredTests) *
                          100,
                  ),
                  100,
              );

    return (
        <div className="group relative">
            <Link
                href={`/projects/${data.id}`}
                className={disabled ? "pointer-events-none" : ""}
                aria-disabled={disabled}
            >
                <Card
                    className={`transition-shadow hover:shadow-md ${disabled ? "opacity-50" : ""}`}
                >
                    <CardHeader className="pb-2">
                        <div>
                            <h3 className="text-lg font-bold">
                                {data.contractId}
                            </h3>
                            <p className="text-sm font-semibold">
                                {data.contractName}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                                Started: {formatDate(data.dateStarted)}
                            </p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span className="text-sm">
                                    {completionPercentage}%
                                </span>
                            </div>
                            <ProgressBar percentage={completionPercentage} />
                            <ProjectStats
                                total={data.stats.totalRequiredTests}
                                balance={data.stats.totalBalanceTests}
                                onFile={data.stats.totalOnFileTests}
                            />
                        </div>
                    </CardContent>
                </Card>
            </Link>
            <div className="absolute top-2 right-2 z-10">
                <DeleteDialog
                    entityId={data.id}
                    entityName={"project"}
                    entityAlias={data.contractId}
                    onDeleteAction={onDeleteAction}
                />
            </div>
        </div>
    );
}
