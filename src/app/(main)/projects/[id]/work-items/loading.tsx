import { Skeleton } from "@/components/ui/skeleton";

export default function ManageWorkItemsPageSkeleton() {
    const numberOfTableRows = 3;

    return (
        <div className="mx-auto max-w-7xl animate-pulse space-y-5 py-2 md:py-4">
            <div className="mb-6 flex flex-row">
                <Skeleton className="mr-4 h-10 w-10 rounded-md" />

                <div>
                    <Skeleton className="h-7 w-48 rounded-md" />
                    <Skeleton className="mt-1 h-5 w-80 rounded-md" />
                </div>
            </div>

            <div className="space-y-4 rounded-lg border bg-card p-4 shadow-sm">
                <div className="flex gap-4">
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-1/3 rounded-md" />
                        <Skeleton className="h-10 w-full rounded-md" />
                    </div>
                    <div className="w-32 space-y-2">
                        <Skeleton className="h-4 w-1/2 rounded-md" />
                        <Skeleton className="h-10 w-full rounded-md" />
                    </div>
                    <div className="w-16 space-y-2 self-end pb-2">
                        <Skeleton className="h-5 w-full rounded-md" />
                    </div>
                    <div className="self-end pb-1">
                        <Skeleton className="h-9 w-20 rounded-md" />
                    </div>
                </div>
            </div>

            <div className="rounded-md border">
                <div className="w-full p-2">
                    <div className="flex h-12 items-center border-b bg-gray-100 px-4">
                        <Skeleton className="h-5 w-[100px] rounded-sm" />
                        <Skeleton className="ml-4 h-5 flex-1 rounded-sm" />
                        <Skeleton className="ml-4 h-5 w-[150px] rounded-sm" />
                        <Skeleton className="ml-4 h-5 w-[100px] rounded-sm" />
                        <Skeleton className="ml-4 h-5 w-[120px] rounded-sm" />
                    </div>

                    {Array.from({ length: numberOfTableRows }).map(
                        (_, index) => (
                            <div
                                key={index}
                                className="flex h-14 items-center border-b px-4"
                            >
                                <Skeleton className="h-5 w-[100px] rounded-sm" />
                                <Skeleton className="ml-4 h-5 flex-1 rounded-sm" />
                                <Skeleton className="ml-4 h-5 w-[150px] rounded-sm" />
                                <Skeleton className="ml-4 h-5 w-[100px] rounded-sm" />
                                <Skeleton className="ml-4 h-5 w-[120px] rounded-sm" />
                            </div>
                        ),
                    )}
                </div>
            </div>

            <div className="mt-6 flex justify-end">
                <Skeleton className="h-10 w-48 rounded-md" />
            </div>
        </div>
    );
}
