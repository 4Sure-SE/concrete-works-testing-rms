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
import HeaderButton from "./header-button";
import NavProjects from "./nav-projects";
import NavProjectsSkeleton from "./nav-projects-skeleton";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <HeaderButton />
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
