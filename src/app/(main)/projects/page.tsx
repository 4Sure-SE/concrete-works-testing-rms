import { ProjectClient } from "@/app/(main)/_components/project-list/client";
import { tryCatch } from "@/lib/utils";
import { ProjectService } from "@/server/services/project.service";

export default async function ProjectListPage() {
    const { data: projectSummaries, error } = await tryCatch(
        ProjectService.getProjectSummaryList(),
    );

    if (error) {
        throw error;
    }

    const projects =
        projectSummaries?.map((summary) => ({
            contractId: summary.contractId,
            id: summary.id,
            title: summary.contractName,
            dateStarted: summary.dateStarted.toISOString(),
            stats: {
                total: summary.totalRequiredTests,
                ongoing: summary.totalOnFileTests,
                completed: summary.totalBalanceTests,
            },
            contractCost: 0, // Default value o
        })) || [];

    return (
        <div className="container mx-auto p-4">
            <ProjectClient projects={projects} />
        </div>
    );
}
