import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getProjects } from "@/server/queries/";
import Link from "next/link";

async function NavProjects() {
    const { data: projects } = await getProjects();

    return (
        <SidebarMenu>
            {projects?.map((project) => (
                <SidebarMenuItem key={project.contractId}>
                    <SidebarMenuButton
                        asChild
                        isActive={false}
                    >
                        <Link
                            href={`/projects/${project.id}`}
                            className="w-full"
                        >
                            <span>{project.contractId}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    );
}

export default NavProjects;
