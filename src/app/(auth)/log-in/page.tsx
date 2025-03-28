"use client";

import { logIn } from "@/server/actions/auth";
import { useEffect } from "react";
import { toast } from "sonner";
import { AuthCard } from "../_components/auth-card";
import { AuthForm } from "../_components/auth-form";
import { useAuthAction } from "../_hooks/use-auth-action";

export default function LoginForm() {
    const [state, action] = useAuthAction(logIn);

    useEffect(() => {
        if (state?.error) {
            if (toast && typeof toast.error === "function") {
                toast.error("Login failed", {
                    description: state.error,
                });
            }
        }
    }, [state?.error]);

    return (
        <AuthCard
            title="Welcome back"
            description="Enter your email to sign in to your account"
            alternateText="New here?"
            linkText="Create an account"
            linkHref="/sign-up"
        >
            <AuthForm
                mode="login"
                action={action}
            />
        </AuthCard>
    );
}
