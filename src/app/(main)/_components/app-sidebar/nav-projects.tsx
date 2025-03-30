import { SidebarMenu } from "@/components/ui/sidebar";
import { getProjects } from "@/server/queries/";
import { EmptyProjectsMessage } from "./empty-projects-message";
import NavProjectItem from "./nav-project-item";

// server component to fetch projects then pass down project data to client component
async function NavProjects() {
    const { data: projects } = await getProjects();

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
                <EmptyProjectsMessage />
            )}
        </SidebarMenu>
    );
}

export default NavProjects;
