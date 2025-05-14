import Link from "next/link";

import { DeleteDialog } from "@/components/custom/delete-dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { ProjectSummaryDTO } from "@/lib/types/project";
import { formatDate } from "@/lib/utils";
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
                tabIndex={disabled ? -1 : undefined}
            >
                <Card
                    className={`group-hover: h-72 transition-all duration-150 ease-in-out group-hover:bg-muted/35 ${disabled ? "cursor-not-allowed opacity-50" : "group-hover:shadow-lg hover:shadow-md"}`}
                >
                    <CardHeader className="pb-2">
                        <div className="min-h-[72px] w-auto max-w-[485px] space-y-2 overflow-hidden">
                            <h3 className="truncate overflow-hidden text-lg font-bold whitespace-nowrap">
                                {data.contractId}
                            </h3>
                            <p className="text-sm leading-tight font-semibold break-words">
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
            {!disabled && (
                <div className="absolute top-2 right-2 z-10 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
                    <DeleteDialog
                        entityId={data.id}
                        entityName={"project"}
                        entityAlias={data.contractId}
                        onDeleteAction={onDeleteAction}
                    />
                </div>
            )}
        </div>
    );
}
