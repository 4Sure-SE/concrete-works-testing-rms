"use client";

import Header from "@/components/custom/header";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export function AppHeader() {
    const { open: sidebarOpen } = useSidebar();

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
            // hide logo if sidebar is open
            title={sidebarOpen ? "" : "Concrete Works Testing RMS"}
        />
    );
}

export default AppHeader;
