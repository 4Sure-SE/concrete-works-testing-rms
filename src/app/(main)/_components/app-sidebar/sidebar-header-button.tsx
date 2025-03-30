"use client";

import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { TrafficCone } from "lucide-react";
import Link from "next/link";

function SidebarHeaderButton() {
    const { open: sidebarOpen } = useSidebar();

    return (
        <SidebarMenuButton
            size="lg"
            asChild
            tooltip="Concrete Works"
        >
            <Link
                href="/projects"
                className="relative"
            >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <TrafficCone
                        className="size-5"
                        strokeWidth={1.75}
                    />
                </div>

                {sidebarOpen && (
                    <div className="ml-2 flex flex-col">
                        <span className="text-base font-semibold">
                            Concrete Works
                        </span>
                        <span className="text-xs text-muted-foreground">
                            Testing RMS
                        </span>
                    </div>
                )}
            </Link>
        </SidebarMenuButton>
    );
}

export default SidebarHeaderButton;
