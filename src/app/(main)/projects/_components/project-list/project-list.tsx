"use client";

import type { ProjectSummaryDTO } from "@/lib/types/project";

import { ProjectItem } from "./project-item";
import { ProjectListHeader } from "./project-list-header";

interface ProjectListProps {
    data: ProjectSummaryDTO[];
}

export function ProjectList({ data }: ProjectListProps) {
    return (
        <>
            <ProjectListHeader title="Projects" />
            {data.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {data.map((project) => (
                        <ProjectItem
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-24">
                    <p className="text-lg text-muted-foreground">
                        No projects found.
                    </p>
                </div>
            )}
        </>
    );
}
