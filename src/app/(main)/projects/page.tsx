import { tryCatch } from "@/lib/utils";
import { ProjectService } from "@/server/services";

import { ProjectList } from "./_components";

export default async function ProjectListPage() {
    const { data: projects, error } = await tryCatch(
        ProjectService.getProjectSummaryList(),
    );

    if (error) {
        throw error;
    }

    return (
        <div className="container mx-auto p-4">
            <ProjectList projects={projects} />
        </div>
    );
}
