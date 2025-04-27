import { TrafficCone } from "lucide-react";
import Link from "next/link";

import { SidebarMenuButton } from "@/components/ui/sidebar";

export function HeaderButton() {
    return (
        <SidebarMenuButton
            size="lg"
            asChild
        >
            <Link href="/projects">
                <div className="flex aspect-square size-12 items-center justify-center rounded-xl text-secondary">
                    <TrafficCone className="size-7" />
                </div>
                <div className="flex flex-col">
                    <span className="text-base font-semibold">
                        Concrete Works
                    </span>
                    <span className="text-sm">Testing RMS</span>
                </div>
            </Link>
        </SidebarMenuButton>
    );
}
