import { SidebarMenu } from "@/components/ui/sidebar";
import { ProjectService } from "@/server/services/project.service";
import { EmptyProjectListMessage } from "./empty-project-list-message";
import NavProjectItem from "./nav-project-item";

// server component to fetch projects then pass down project data to client component
async function NavProjectList() {
    // display the last five projects only
    const projects = await ProjectService.getLastFiveProjectSummaryList();

    if (!projects) {
        return null;
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

export default NavProjectList;
