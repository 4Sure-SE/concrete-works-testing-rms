import { Skeleton } from "@/components/ui/skeleton";
import { ProjectItemSkeleton } from "./project-item-skeleton";

interface ProjectListSkeletonProps {
    itemsPerPage?: number;
}

export function ProjectListSkeleton({
    itemsPerPage = 4,
}: ProjectListSkeletonProps) {
    return (
        <div className="container mx-auto h-full p-4">
            <div className="flex min-h-full flex-col">
                <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <Skeleton className="h-8 w-32 rounded-md" />
                    <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-5 w-20 rounded-sm" />
                                <Skeleton className="h-9 w-[140px] rounded-md" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-5 w-8 rounded-sm" />
                                <Skeleton className="h-9 w-[140px] rounded-md" />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Skeleton className="h-9 w-48 flex-grow rounded-md sm:flex-grow-0" />
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-9 w-28 rounded-md" />
                                <Skeleton className="h-9 w-32 rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grow">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {Array.from({ length: itemsPerPage }).map(
                            (_, index) => (
                                <ProjectItemSkeleton
                                    key={`skel-item-${index}`}
                                />
                            ),
                        )}
                    </div>
                </div>

                <div className="mt-auto pt-4">
                    <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between">
                        <div className="ml-auto flex gap-1">
                            <Skeleton className="h-9 w-9 rounded-md" />
                            <Skeleton className="h-9 w-9 rounded-md" />
                            <Skeleton className="h-9 w-9 rounded-md" />
                            <Skeleton className="h-9 w-9 rounded-md" />
                            <Skeleton className="h-9 w-9 rounded-md" />
                        </div>
                        <Skeleton className="h-5 w-48 rounded-sm sm:ml-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}
