"use client";

import { Button } from "@/components/ui/button";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogOut } from "lucide-react";
import { useAuth } from "../../_hooks/use-auth";

export function SignOut() {
    const { signOut } = useAuth();

    return (
        <SidebarMenu className="pt-2">
            <SidebarMenuItem>
                <SidebarMenuButton
                    asChild
                    tooltip={"Sign Out"}
                >
                    <Button
                        variant="ghost"
                        size="sm"
                        className="w-full cursor-pointer justify-start"
                        onClick={signOut}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                    </Button>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}

export default SignOut;
