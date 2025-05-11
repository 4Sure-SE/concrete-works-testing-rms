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
import { Pagination } from "@/components/custom/pagination";
import { ProjectCount } from "@/components/custom/project-count";
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

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Show 6 projects per page
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    // Get current page projects
    const indexOfLastProject = currentPage * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;
    const currentProjects = projects.slice(
        indexOfFirstProject,
        indexOfLastProject,
    );

    // Change page
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

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

                // If deleting the last item on a page, go to previous page
                if (currentProjects.length === 1 && currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                }
            }
        });
    };

    return (
        <>
            <ProjectListHeader title="Projects" />
            <div className="mb-4 flex justify-end">
                <ProjectCount
                    currentCount={currentProjects.length}
                    totalCount={projects.length}
                />
            </div>

            {projects.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {currentProjects.map((project) => (
                            <ProjectItem
                                key={project.id}
                                data={project}
                                onDeleteAction={deleteAction}
                                disabled={deletingId === project.id}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center py-24">
                    <p className="text-lg text-muted-foreground">
                        No projects found.
                    </p>
                </div>
            )}

            {/* Show pagination regardless of page count */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    );
}
