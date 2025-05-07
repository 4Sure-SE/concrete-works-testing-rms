import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export function ProjectDetailsSkeleton() {
    return (
        <div>
            <div className="grid w-full grid-cols-1 gap-x-4 p-8">
                <div className="flex w-full flex-col">
                    <Skeleton className="mb-2 h-7 w-80" />

                    <div className="mt-4 flex w-auto flex-row gap-2">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-5 w-80" />
                    </div>

                    <div className="mt-4 flex w-auto flex-row gap-2">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-5 w-70" />
                    </div>

                    <div className="mt-4 flex w-auto flex-row gap-2">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-5 w-40" />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-between gap-4 px-8">
                <Skeleton className="h-9 w-36" />

                <div className="flex items-center justify-center space-x-2">
                    <Skeleton className="h-9 w-35" />
                    <Skeleton className="h-9 w-35" />
                    <Skeleton className="h-9 w-[137px] sm:w-[169px]" />
                </div>
            </div>

            <div className="overflow-y-auto p-8">
                <div className="rounded-md border">
                    <Table className="w-full border-separate border-spacing-0 overflow-hidden rounded-[7px]">
                        <TableHeader>
                            <TableRow className="bg-gray-100">
                                <TableHead className="text-center">
                                    <Skeleton className="mx-auto h-5 w-16" />
                                </TableHead>
                                <TableHead className="text-center">
                                    <Skeleton className="mx-auto h-5 w-28" />
                                </TableHead>
                                <TableHead className="text-center">
                                    <Skeleton className="mx-auto h-5 w-20" />
                                </TableHead>
                                <TableHead className="text-center">
                                    <Skeleton className="mx-auto h-5 w-14" />
                                </TableHead>
                                <TableHead className="text-center">
                                    <Skeleton className="mx-auto h-5 w-28" />
                                </TableHead>
                                <TableHead className="text-center">
                                    <Skeleton className="mx-auto h-5 w-36" />
                                </TableHead>
                                <TableHead className="text-center">
                                    <Skeleton className="mx-auto h-5 w-16" />
                                </TableHead>
                                <TableHead className="px-6 text-center">
                                    <Skeleton className="mx-auto h-5 w-28" />
                                </TableHead>
                                <TableHead className="text-center">
                                    <Skeleton className="mx-auto h-5 w-20" />
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {[1, 2, 3, 4].map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-3">
                                        <Skeleton className="mx-auto h-5 w-10" />
                                    </TableCell>
                                    <TableCell className="py-3">
                                        <Skeleton className="mx-auto h-5 w-full" />
                                    </TableCell>
                                    <TableCell className="py-3">
                                        <Skeleton className="mx-auto h-5 w-12" />
                                    </TableCell>
                                    <TableCell className="py-3">
                                        <Skeleton className="mx-auto h-5 w-10" />
                                    </TableCell>
                                    <TableCell className="py-3">
                                        <Skeleton className="mx-auto h-5 w-16" />
                                    </TableCell>
                                    <TableCell className="py-3">
                                        <Skeleton className="mx-auto h-5 w-20" />
                                    </TableCell>
                                    <TableCell className="py-3">
                                        <Skeleton className="mx-auto h-5 w-12" />
                                    </TableCell>
                                    <TableCell className="px-6 py-3">
                                        <Skeleton className="mx-auto h-5 w-20" />
                                    </TableCell>
                                    <TableCell className="py-3">
                                        <Skeleton className="mx-auto h-5 w-16" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
