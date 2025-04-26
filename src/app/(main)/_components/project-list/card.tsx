import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProgressBar } from "./progress";
import { ProjectStats } from "./stats";
import Link from "next/link";

interface ProjectCardProps {
    contractId: string;
    id: string;
    title: string;
    stats: {
        total: number;
        ongoing: number;
        completed: number;
    };
}

export function ProjectCard({
    contractId,
    id,
    title,
    stats,
}: ProjectCardProps) {
    const completionPercentage = Math.round(
        (stats.completed / stats.total) * 100,
    );

    return (
        <Link
            href={`/projects/${id}`}
            className="block h-full"
        >
            <Card className="h-full cursor-pointer transition-shadow hover:shadow-md">
                <CardHeader className="pb-2">
                    <h3 className="text-lg font-bold">{contractId}</h3>
                    <p className="text-sm font-semibold">{title}</p>
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
                            total={stats.total}
                            ongoing={stats.ongoing}
                            completed={stats.completed}
                        />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
