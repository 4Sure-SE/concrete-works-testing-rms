import { tryCatch } from "@/lib/utils";
import { ProjectService } from "@/server/services";
import { Suspense } from "react";
import { ProjectList, ProjectListSkeleton } from "./_components";

interface ProjectListPageSearchParams {
    query?: string;
    from?: string;
    to?: string;
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

    const { data: projects, error } = await tryCatch(
        ProjectService.getProjectSummaryList({ query, dateFrom, dateTo }),
    );

    if (error) {
        throw error;
    }

    return (
        <div className="container mx-auto p-4">
            <ProjectList data={projects} />
        </div>
    );
}
