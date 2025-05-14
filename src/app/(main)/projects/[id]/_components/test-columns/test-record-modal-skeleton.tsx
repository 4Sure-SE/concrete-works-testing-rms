import { Skeleton } from "@/components/ui/skeleton";

export function TestRecordModalSkeleton() {
    const numberOfRecordSkeletons = 3;

    return (
        <div className="animate-in fade-in-0 fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="flex max-h-[90vh] w-full max-w-lg flex-col rounded-xl bg-card p-0 shadow-2xl sm:max-w-xl md:max-w-2xl">
                <div className="flex flex-shrink-0 flex-row items-center justify-between border-b px-6 pt-5 pb-4">
                    <Skeleton className="h-7 w-1/2 rounded-md sm:w-1/3" />{" "}
                    <Skeleton className="h-8 w-8 rounded-full" />{" "}
                </div>

                <div className="flex-grow space-y-6 overflow-y-auto px-6 py-4">
                    <div className="mb-2">
                        <Skeleton className="h-32 w-full rounded-lg border-2 border-dashed border-gray-300 p-4 md:h-40" />{" "}
                    </div>

                    <div>
                        <Skeleton className="mb-3 h-6 w-1/3 rounded-md" />{" "}
                        <div className="space-y-3">
                            {Array.from({
                                length: numberOfRecordSkeletons,
                            }).map((_, index) => (
                                <div
                                    key={`record-skel-${index}`}
                                    className="flex items-center justify-between rounded-md border p-3"
                                >
                                    <div className="flex min-w-0 flex-1 items-center gap-3">
                                        <Skeleton className="h-6 w-6 shrink-0 rounded" />{" "}
                                        <div className="min-w-0 flex-1 space-y-1.5">
                                            <Skeleton className="h-4 w-3/4 rounded" />{" "}
                                            <Skeleton className="h-3 w-1/2 rounded" />{" "}
                                        </div>
                                    </div>
                                    <Skeleton className="h-8 w-8 shrink-0 rounded-md" />{" "}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-auto flex flex-shrink-0 justify-end gap-2 border-t px-6 pt-4 pb-5">
                    <Skeleton className="h-9 w-20 rounded-md" />{" "}
                    <Skeleton className="h-9 w-32 rounded-md" />{" "}
                </div>
            </div>
        </div>
    );
}
