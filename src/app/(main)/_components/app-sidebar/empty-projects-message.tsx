"use client";

import { SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { FolderOpen } from "lucide-react";

export function EmptyProjectsMessage() {
    const { open: sidebarOpen } = useSidebar();

    if (!sidebarOpen) {
        return null;
    }

    return (
        <SidebarMenuItem>
            <div className="flex flex-col items-center justify-center rounded-md p-4 text-center text-sm text-muted-foreground hover:bg-muted/50">
                <FolderOpen className="mb-2 size-8 opacity-50" />
                <span>No projects found</span>
            </div>
        </SidebarMenuItem>
    );
}
