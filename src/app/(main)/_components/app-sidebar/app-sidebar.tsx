import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import NavProjects from "./nav-projects";
import NavProjectsSkeleton from "./nav-projects-skeleton";
import SidebarHeaderButton from "./sidebar-header-button";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarHeaderButton />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupAction
                        title="Add Project"
                        asChild
                    >
                        <Link href="/projects/new">
                            <Plus />
                        </Link>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <Suspense fallback={<NavProjectsSkeleton />}>
                            <NavProjects />
                        </Suspense>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}

export default AppSidebar;
