"use client";

import type {
    ProjectActionErrors,
    ProjectDTO,
    ProjectSummaryDTO,
} from "@/lib/types/project";

import type { Callbacks } from "@/lib/types/actions.types";
import { withCallbacks } from "@/lib/utils";
import { deleteProject } from "@/server/actions/projects/delete-project";
import { useOptimistic, useState, useTransition } from "react";
import { toast } from "sonner";
import { ProjectItem } from "./project-item";
import { ProjectListHeader } from "./project-list-header";

interface ProjectListProps {
    data: ProjectSummaryDTO[];
}

type OptimisticAction = { type: "DELETE"; payload: { id: string } };

export function ProjectList({ data }: ProjectListProps) {
    // delete callbacks
    const callbacks: Callbacks<ProjectDTO | null, ProjectActionErrors> = {
        onSuccess: () => {
            toast.success("Project deleted successfully.");
        },
        onError: (error) => {
            toast.error(error.general?.[0] ?? "Failed to delete project.");
        },
    };

    // optimistic update for project list
    const [projects, setProjects] = useOptimistic(
        data,
        (currentState, action: OptimisticAction) => {
            switch (action.type) {
                case "DELETE":
                    return currentState.filter(
                        (project) => project.id !== action.payload.id,
                    );
                default:
                    return currentState;
            }
        },
    );

    const [, startTransition] = useTransition();
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const deleteAction = async (id: string) => {
        setDeletingId(id);
        const deleteProjectAction = withCallbacks(
            deleteProject.bind(null, id),
            callbacks,
        );
        const res = await deleteProjectAction();

        startTransition(async () => {
            if (res.success && res.data) {
                setProjects({ type: "DELETE", payload: { id: res.data.id } });
                setDeletingId(null);
            }
        });
    };

    return (
        <>
            <ProjectListHeader title="Projects" />
            {projects.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectItem
                            key={project.id}
                            data={project}
                            onDeleteAction={deleteAction}
                            disabled={deletingId === project.id}
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
