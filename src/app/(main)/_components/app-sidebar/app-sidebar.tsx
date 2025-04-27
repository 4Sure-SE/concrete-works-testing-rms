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
} from "@/components/ui/sidebar";

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

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="flex items-center">
                        Projects
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <NavNewProject />
                        <Suspense fallback={<NavProjectListSkeleton />}>
                            <NavProjectList />
                        </Suspense>
                    </SidebarGroupContent>
                    <SidebarGroupContent>
                        <Suspense fallback={<NavProjectListSkeleton />}>
                            <SignOut />
                        </Suspense>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
