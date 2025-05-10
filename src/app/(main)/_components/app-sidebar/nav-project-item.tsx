"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import type { ProjectSummaryDTO } from "@/lib/types/project";

type NavProjectItemProps = {
    data: ProjectSummaryDTO;
};

export function NavProjectItem({ data: project }: NavProjectItemProps) {
    const pathname = usePathname();
    const { open: sidebarOpen } = useSidebar();

    const isActive = pathname.startsWith(`/projects/${project.id}`);
    const initials = project.contractId.substring(0, 2);

    return (
        <SidebarMenuItem>
            <SidebarMenuButton
                asChild
                isActive={isActive}
                tooltip={project.contractId}
                className={`bg-primary/10 text-primary transition-colors hover:bg-primary/20 hover:text-primary active:bg-primary/10 active:text-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:hover:cursor-default data-[active=true]:hover:bg-primary/75`}
            >
                {/* navigate to the details page of the project when clicked */}
                <Link
                    href={`/projects/${project.id}`}
                    className={`flex items-center ${!sidebarOpen ? "justify-center" : ""}`}
                >
                    <Avatar
                        className={`size-8 rounded-md ${!sidebarOpen ? "ml-2" : "mr-2"}`}
                    >
                        <AvatarFallback className="rounded-md bg-transparent">
                            {initials}
                        </AvatarFallback>
                    </Avatar>
                    <span>{project.contractId}</span>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
}
