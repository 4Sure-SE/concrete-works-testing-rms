"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavNewProject() {
    const pathname = usePathname();

    const isActive = pathname.startsWith(`/projects/new`);

    return (
        <SidebarMenu className="pb-2">
            <SidebarMenuItem>
                <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip="New Project"
                    className={`bg-primary/10 p-5 font-medium text-primary transition-colors hover:bg-primary/20 hover:text-primary active:bg-primary/10 active:text-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:hover:cursor-default data-[active=true]:hover:bg-primary/75`}
                >
                    {/* navigate to new project page when clicked */}
                    <Link
                        href="/projects/new"
                        className="flex items-center"
                    >
                        <Plus
                            className="size-4"
                            strokeWidth={2.5}
                        />
                        <span>New Project</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
