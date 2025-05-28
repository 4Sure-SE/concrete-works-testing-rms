import { Suspense } from "react";

import { SignOut } from "@/app/(auth)/_components";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar";

import { NavAllProjects } from "./nav-all-projects";
import { NavNewProject } from "./nav-new-project";
import { NavProjectList } from "./nav-project-list";
import { NavProjectListSkeleton } from "./nav-project-list-skeleton";
import { SidebarHeaderButton } from "./sidebar-header-button";

export function AppSidebar() {
    return (
        <Sidebar
            collapsible="icon"
            variant="inset"
            className="border-border"
        >
            <SidebarHeader className="pb-2">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarHeaderButton />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="overflow-x-hidden">
                <SidebarGroup>
                    <SidebarGroupLabel className="flex items-center">
                        Manage Projects
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <NavAllProjects />
                        <NavNewProject />
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator />
                <SidebarGroup>
                    <SidebarGroupLabel className="flex items-center">
                        Recent Projects
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <Suspense fallback={<NavProjectListSkeleton />}>
                            <NavProjectList />
                        </Suspense>
                        <SignOut />
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
