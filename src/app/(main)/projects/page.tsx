import { Suspense } from "react";

import { tryCatch } from "@/lib/utils";
import { ProjectService } from "@/server/services";
import { ProjectList, ProjectListSkeleton } from "./_components";

const ITEMS_PER_PAGE = 4;
interface ProjectListPageSearchParams {
    query?: string;
    from?: string;
    to?: string;
    page?: string;
}

export default async function ProjectListPage({
    searchParams,
}: {
    searchParams?: Promise<ProjectListPageSearchParams>;
}) {
    const params = await searchParams;

    return (
        <Suspense fallback={<ProjectListSkeleton />}>
            <ProjectsLoader searchParams={params} />
        </Suspense>
    );
}

async function ProjectsLoader({
    searchParams,
}: {
    searchParams?: ProjectListPageSearchParams;
}) {
    const query = searchParams?.query ?? "";
    const dateFrom = searchParams?.from;
    const dateTo = searchParams?.to;
    const currentPage = Number(searchParams?.page) || 1;

    const { data: count, error: countError } = await tryCatch(
        ProjectService.getProjectsCount({
            query,
            dateFrom,
            dateTo,
            currentPage,
            itemsPerPage: ITEMS_PER_PAGE,
        }),
    );

    const { data: projects, error: listError } = await tryCatch(
        ProjectService.getProjectSummaryList({
            query,
            dateFrom,
            dateTo,
            currentPage,
            itemsPerPage: ITEMS_PER_PAGE,
        }),
    );

    if (countError) {
        throw countError;
    }

    if (listError) {
        throw listError;
    }

    return (
        <div className="container mx-auto h-full p-4">
            <ProjectList
                data={{ projects, count }}
                currentPage={currentPage}
                itemsPerPage={ITEMS_PER_PAGE}
            />
        </div>
    );
}
