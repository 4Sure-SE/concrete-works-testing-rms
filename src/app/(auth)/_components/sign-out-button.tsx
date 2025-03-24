"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "../_hooks/use-auth";

export function SignOut() {
    const { signOut } = useAuth();

    return (
        <div>
            <Button
                variant="ghost"
                size="sm"
                className="w-full cursor-pointer justify-start"
                onClick={signOut}
            >
                <LogOut className="mr-2 size-4" />
                Sign Out
            </Button>
        </div>
    );
}

export default SignOut;
