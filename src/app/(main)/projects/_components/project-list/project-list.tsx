"use client";

import { Loader2 } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useOptimistic, useState, useTransition } from "react";
import { toast } from "sonner";

import Pagination from "@/components/custom/custom-pagination";
import EmptyMessage from "@/components/custom/empty-message";
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

    // to disable the specific project while deleting
    const [deletingId, setDeletingId] = useState<string | null>(null);

    // loading state for pagination and filtering
    const [isPaginatingOrFiltering, startUrlUpdateTransition] = useTransition();

    // loading state for deleting a project
    const [isDeleting, startDeleteTransition] = useTransition();

    // to prevent the user from going to an out of bounds page
    useEffect(() => {
        if (searchParams.has("page")) {
            const totalPages = Math.ceil(data.count / itemsPerPage);
            const params = new URLSearchParams(searchParams);

            if (currentPage > totalPages) {
                const newPage = totalPages;
                params.set("page", newPage.toString());
                // go to prev page
                router.replace(`${pathname}?${params.toString()}`);
            }
        }
    }, [currentPage, data.count, itemsPerPage, pathname, router, searchParams]);

    // optimistic state for deleting a project
    // this will remove the project from the list without waiting for the server response
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

    // callbacks on deleting a project
    const callbacks: Callbacks<ProjectDTO | null, ProjectActionErrors> = {
        onSuccess: () => {
            // wait for the state to update before showing the toast
            startDeleteTransition(() => {
                setDeletingId(null);
                toast.success("Project deleted successfully.");
            });
        },
        onError: (error) => {
            startDeleteTransition(() => {
                setDeletingId(null);
                toast.error(error.general?.[0] ?? "Failed to delete project.");
            });
        },
    };

    const handleDelete = async (id: string) => {
        setDeletingId(id);

        startDeleteTransition(() => {
            setOptimisticProjects({
                type: "DELETE_PENDING",
                payload: { id: id },
            });
        });

        const deleteAction = withCallbacks(deleteProject, callbacks);

        await deleteAction(id);
    };

    const handleFilter = (
        newFilterParams: Record<string, string | undefined>,
    ) => {
        const params = new URLSearchParams(searchParams);

        // set the new filter params from args
        Object.entries(newFilterParams).forEach(([key, value]) => {
            if (value) {
                params.set(key, value);
            } else {
                params.delete(key);
            }
        });

        // reset page to 1 after filtering
        params.set("page", "1");

        startUrlUpdateTransition(() => {
            router.replace(`${pathname}?${params.toString()}`);
        });
    };

    const handlePageChange = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        startUrlUpdateTransition(() => {
            router.replace(`${pathname}?${params.toString()}`);
        });
    };

    const totalPages = Math.ceil(data.count / itemsPerPage);

    const isLoading = isPaginatingOrFiltering || isDeleting;

    return (
        <div className="flex min-h-full flex-col">
            <ProjectListHeader
                title="Projects"
                isFiltering={isPaginatingOrFiltering}
                onFilterChange={handleFilter}
            />

            <div className="grow">
                {optimisticProjects.length > 0 ? (
                    <div className={`grid grid-cols-1 gap-6 md:grid-cols-2`}>
                        {optimisticProjects.map((project) => (
                            <ProjectItem
                                key={project.id}
                                data={project}
                                onDeleteAction={handleDelete}
                                disabled={
                                    deletingId === project.id ||
                                    isPaginatingOrFiltering
                                }
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyMessage
                        title="No projects found"
                        description={`${searchParams.has("query") ? "There are no projects matching your search." : "You have not created any projects yet."}`}
                    />
                )}
            </div>

            {totalPages > 1 && (
                <div className="mt-auto pt-4">
                    <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            paginate={handlePageChange}
                            isDisabled={isLoading}
                        />
                        <div className="text-center text-sm whitespace-nowrap text-muted-foreground sm:text-right">
                            {isPaginatingOrFiltering && !isDeleting ? (
                                <span className="inline-flex items-center">
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Loading projects...
                                </span>
                            ) : (
                                <span>
                                    {`Showing ${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
                                        currentPage * itemsPerPage,
                                        data.count,
                                    )} of ${data.count} projects`}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
