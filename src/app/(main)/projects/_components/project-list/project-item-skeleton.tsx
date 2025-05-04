import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectItemSkeleton() {
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between pb-2">
                <div>
                    <Skeleton className="mb-1 h-6 w-24" />

                    <Skeleton className="h-5 w-48" />
                </div>

                <Skeleton className="h-5 w-28" />
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <Skeleton className="h-5 w-16" />

                        <Skeleton className="h-5 w-10" />
                    </div>

                    <Skeleton className="h-2 w-full" />

                    <div className="flex justify-between space-x-4 pt-2 text-center">
                        <Skeleton className="h-10 w-1/3" />
                        <Skeleton className="h-10 w-1/3" />
                        <Skeleton className="h-10 w-1/3" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
