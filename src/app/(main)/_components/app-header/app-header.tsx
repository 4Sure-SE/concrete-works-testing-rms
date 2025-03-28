// components/navigation/app-header.tsx
"use client";

import Header from "@/components/custom/header";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

type AppHeaderProps = {
    title: string;
};

export function AppHeader({ title }: AppHeaderProps) {
    const { open: sideBarOpen } = useSidebar();

    const headerControls = (
        <>
            <SidebarTrigger className="cursor-pointer" />
            <Separator
                orientation="vertical"
                className="mr-2 h-4"
            />
        </>
    );

    return (
        <Header
            leftControls={headerControls}
            // hide title if sidebar is open
            title={sideBarOpen ? "" : title}
        />
    );
}

export default AppHeader;
