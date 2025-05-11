import { Skeleton } from "@/components/ui/skeleton";
import { ProjectItemSkeleton } from "./project-item-skeleton";

export function ProjectListSkeleton() {
    return (
        <div className="container mx-auto p-4">
            <div className="mb-4 flex items-center justify-between">
                <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <Skeleton className="h-8 w-32" />
                    <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                        <div className="flex gap-2">
                            <Skeleton className="h-9 w-32" />
                            <Skeleton className="h-9 w-32" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-9 w-48" />
                            <Skeleton className="h-9 w-16" />
                            <Skeleton className="h-9 w-28" />
                        </div>
                    </div>
                </div>
                <Skeleton className="h-5 w-28" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {Array.from({ length: 6 }).map((_, index) => (
                    <ProjectItemSkeleton key={index} />
                ))}
            </div>
            <div className="mt-6 flex justify-center gap-2">
                <Skeleton className="h-9 w-9" />
                {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        className="h-9 w-9"
                    />
                ))}
                <Skeleton className="h-9 w-9" />
            </div>
        </div>
    );
}
