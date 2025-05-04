import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { ProjectSummaryDTO } from "@/lib/types/project";

import { formatDate } from "@/lib/utils";
import { ProgressBar } from "./progress-bar";
import { ProjectStats } from "./project-stats";

export function ProjectItem({
    id,
    contractId,
    contractName,
    dateStarted,
    stats,
}: ProjectSummaryDTO) {
    const completionPercentage =
        stats.totalRequiredTests === 0
            ? 0
            : Math.min(
                  Math.round(
                      (stats.totalOnFileTests / stats.totalRequiredTests) * 100,
                  ),
                  100,
              );

    return (
        <Link
            href={`/projects/${id}`}
            className="block h-full"
        >
            <Card className="transition-shadow hover:shadow-md">
                <CardHeader className="flex flex-row justify-between pb-2">
                    <div>
                        <h3 className="text-lg font-bold">{contractId}</h3>
                        <p className="text-sm font-semibold">{contractName}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Started: {formatDate(dateStarted)}
                    </p>
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
                            total={stats.totalRequiredTests}
                            balance={stats.totalBalanceTests}
                            onFile={stats.totalOnFileTests}
                        />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
