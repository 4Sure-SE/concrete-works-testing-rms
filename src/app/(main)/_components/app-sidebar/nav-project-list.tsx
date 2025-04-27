import { SidebarMenu } from "@/components/ui/sidebar";
import { tryCatch } from "@/lib/utils";
import { ProjectService } from "@/server/services";

import { EmptyProjectListMessage } from "./empty-project-list-message";
import { NavProjectItem } from "./nav-project-item";

// server component to fetch projects then pass down project data to client component
export async function NavProjectList() {
    // display the last five projects only
    const { data: projects, error } = await tryCatch(
        ProjectService.getLastFiveProjectSummaryList(),
    );

    if (error) {
        throw error;
    }

    return (
        <SidebarMenu>
            {projects && projects.length > 0 ? (
                projects.map((project) => (
                    <NavProjectItem
                        data={project}
                        key={project.id}
                    />
                ))
            ) : (
                <EmptyProjectListMessage />
            )}
        </SidebarMenu>
    );
}
