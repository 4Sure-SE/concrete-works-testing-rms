import { Skeleton } from "@/components/ui/skeleton";

interface FormPageSkeletonProps {
    numberOfFields?: number;
    hasLeftControl?: boolean;
}

export function FormPageSkeleton({
    numberOfFields = 4,
    hasLeftControl = true,
}: FormPageSkeletonProps) {
    const fieldRows = Math.ceil(numberOfFields / 2);

    return (
        <div className="mx-auto max-w-7xl animate-pulse space-y-8 py-2 md:py-4">
            <div className="mb-6 flex flex-row">
                {hasLeftControl && (
                    <Skeleton className="mr-4 h-10 w-10 rounded-md" />
                )}
                <div className="flex-1">
                    <Skeleton className="h-7 w-1/2 rounded-md sm:w-1/3" />{" "}
                    <Skeleton className="mt-1.5 h-5 w-3/4 rounded-md sm:w-1/2" />{" "}
                </div>
            </div>

            <div className="space-y-6 rounded-lg border bg-card p-6 shadow-sm">
                {Array.from({ length: fieldRows }).map((_, rowIndex) => (
                    <div
                        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10"
                        key={`form-row-skel-${rowIndex}`}
                    >
                        <div className="space-y-1.5">
                            <Skeleton className="h-4 w-1/3 rounded-sm" />{" "}
                            <Skeleton className="h-10 w-full rounded-md" />{" "}
                        </div>
                        <div className="space-y-1.5">
                            <Skeleton className="h-4 w-1/3 rounded-sm" />{" "}
                            <Skeleton className="h-10 w-full rounded-md" />{" "}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end">
                <Skeleton className="h-10 w-28 rounded-md" />{" "}
            </div>
        </div>
    );
}
