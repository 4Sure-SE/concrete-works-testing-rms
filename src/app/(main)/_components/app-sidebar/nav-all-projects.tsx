"use client";

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavAllProjects() {
    const pathname = usePathname();
    const isActive = pathname === "/projects";

    return (
        <SidebarMenu className="pb-2">
            <SidebarMenuItem>
                <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip="All Projects"
                    className={`bg-primary/10 p-5 font-medium text-primary transition-colors hover:bg-primary/20 hover:text-primary active:bg-primary/10 active:text-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:hover:cursor-default data-[active=true]:hover:bg-primary/75`}
                >
                    <Link
                        href="/projects"
                        className="flex items-center"
                    >
                        <LayoutDashboard
                            className="size-4"
                            strokeWidth={2.5}
                        />
                        <span>All Projects</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
