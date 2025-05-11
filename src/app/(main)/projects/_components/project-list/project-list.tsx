"use client";

import { startTransition, useOptimistic, useState } from "react";
import { toast } from "sonner";

import { type Callbacks } from "@/lib/types/actions.types";
import type {
    ProjectActionErrors,
    ProjectDTO,
    ProjectSummaryDTO,
} from "@/lib/types/project";
import { withCallbacks } from "@/lib/utils";
import { deleteProject } from "@/server/actions/projects/delete-project";
import { ProjectItem } from "./project-item";
import { ProjectListHeader } from "./project-list-header";

interface ProjectListProps {
    data: ProjectSummaryDTO[];
}

type OptimisticAction = { type: "DELETE_PENDING"; payload: { id: string } };

export function ProjectList({ data }: ProjectListProps) {
    // delete callbacks
    const callbacks: Callbacks<ProjectDTO | null, ProjectActionErrors> = {
        onSuccess: () => {
            startTransition(() => {
                setDeletingId(null);
                toast.success("Project deleted successfully.");
            });
        },
        onError: (error) => {
            startTransition(() => {
                setDeletingId(null);
                toast.error(error.general?.[0] ?? "Failed to delete project.");
            });
        },
    };

    const [optimisticProjects, setOptimisticProjects] = useOptimistic<
        ProjectSummaryDTO[],
        OptimisticAction
    >(data, (currentState, action) => {
        switch (action.type) {
            case "DELETE_PENDING":
                return currentState.filter(
                    (project) => project.id !== action.payload.id,
                );
            default:
                return currentState;
        }
    });

    const [deletingId, setDeletingId] = useState<string | null>(null);

    const deleteAction = async (id: string) => {
        setDeletingId(id);

        startTransition(() => {
            setOptimisticProjects({
                type: "DELETE_PENDING",
                payload: { id: id },
            });
        });

        const deleteAction = withCallbacks(deleteProject, callbacks);

        await deleteAction(id);
    };

    return (
        <>
            <ProjectListHeader title="Projects" />
            {optimisticProjects.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {optimisticProjects.map((project) => (
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
