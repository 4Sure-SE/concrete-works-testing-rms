"use client";

import { startTransition, useOptimistic, useState } from "react";
import { toast } from "sonner";

import Pagination from "@/components/custom/custom-pagination";
import { type Callbacks } from "@/lib/types/actions.types";
import type {
    ProjectActionErrors,
    ProjectDTO,
    ProjectSummaryDTO,
} from "@/lib/types/project";
import { withCallbacks } from "@/lib/utils";
import { deleteProject } from "@/server/actions/projects/delete-project";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProjectItem } from "./project-item";
import { ProjectListHeader } from "./project-list-header";

interface ProjectListProps {
    data: { projects: ProjectSummaryDTO[]; count: number };
    currentPage: number;
    itemsPerPage: number;
}

type OptimisticAction = { type: "DELETE_PENDING"; payload: { id: string } };

export function ProjectList({
    data,
    currentPage,
    itemsPerPage,
}: ProjectListProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [deletingId, setDeletingId] = useState<string | null>(null);

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
    >(data.projects, (currentState, action) => {
        switch (action.type) {
            case "DELETE_PENDING":
                return currentState.filter(
                    (project) => project.id !== action.payload.id,
                );
            default:
                return currentState;
        }
    });

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

    const updateURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        startTransition(() => {
            params.set("page", pageNumber.toString());
            router.replace(`${pathname}?${params.toString()}`);
        });
    };

    const paginate = (pageNumber: number) => {
        updateURL(pageNumber);
    };

    const totalPages = Math.ceil(data.count / itemsPerPage);

    return (
        <div className="flex min-h-full flex-col">
            <ProjectListHeader title="Projects" />

            <div className="grow">
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
                    <div className="flex h-full flex-col items-center justify-center py-24">
                        <p className="text-lg text-muted-foreground">
                            No projects found.
                        </p>
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="mt-auto pt-4">
                    <div className="flex flex-col items-center justify-between sm:flex-row">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            paginate={paginate}
                        />
                        <div className="mt-2 text-sm text-muted-foreground sm:mt-0">
                            Showing {(currentPage - 1) * itemsPerPage + 1}-
                            {Math.min(currentPage * itemsPerPage, data.count)}{" "}
                            of {data.count} projects
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
