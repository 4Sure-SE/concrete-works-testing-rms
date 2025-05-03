import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProjectSummaryDTO } from "@/lib/types/project";

import { ProgressBar } from "./progress-bar";
import { ProjectStats } from "./project-stats";

export function ProjectItem({
    contractId,
    id,
    contractName,
    stats,
}: Omit<ProjectSummaryDTO, "dateStarted">) {
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
                <CardHeader className="pb-2">
                    <h3 className="text-lg font-bold">{contractId}</h3>
                    <p className="text-sm font-semibold">{contractName}</p>
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
