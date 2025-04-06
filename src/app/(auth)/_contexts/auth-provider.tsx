"use client";

import { createClient } from "@/lib/supabase/client";
import { type Session, type User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

type AuthContextType = {
    user: User | null;
    session: Session | null;
    isLoading: boolean;
    fullName: string | null;
    signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
    session: null,
    isLoading: true,
    fullName: null,
    signOut: async () => {
        throw new Error(
            "AuthContext.signOut was called outside of AuthProvider",
        );
    },
});

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fullName, setFullName] = useState<string | null>(null);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(async (event, session) => {
            setSession(session);
            setUser(session?.user ?? null);

            if (session?.user) {
                const userFullName = session.user.user_metadata?.full_name as
                    | string
                    | undefined;
                setFullName(userFullName ?? null);
            } else {
                setFullName(null);
            }

            setIsLoading(false);

            if (event === "SIGNED_IN") {
                router.refresh();
            }

            if (event === "SIGNED_OUT") {
                router.refresh();
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [router, supabase]);

    const signOut = async () => {
        await supabase.auth.signOut();
        toast.success("You have been signed out");
        router.refresh();
    };

    const value = {
        user,
        session,
        isLoading,
        fullName,
        signOut,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
