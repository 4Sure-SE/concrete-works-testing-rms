"use client";

import Header from "@/components/custom/header";
import { useSidebar } from "@/components/ui/sidebar";

type HeaderWithSidebarStateProps = {
    withSidebarTrigger?: boolean;
    title: string;
};

function HeaderWithSidebarState(props: HeaderWithSidebarStateProps) {
    const { state } = useSidebar();
    const isOpen = state === "expanded";

    return (
        <Header
            {...props}
            title={isOpen ? "" : props.title}
        />
    );
}

export default HeaderWithSidebarState;
