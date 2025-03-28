"use client";

import { signUp } from "@/server/actions/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { AuthCard } from "../_components/auth-card";
import { AuthForm } from "../_components/auth-form";
import { useAuthAction } from "../_hooks/use-auth-action";

export default function SignUpForm() {
    const [state, action] = useAuthAction(signUp);
    const router = useRouter();

    useEffect(() => {
        if (state?.error) {
            toast?.error?.("Sign up failed", {
                description: state.error,
            });
        }

        if (state?.success && state?.message) {
            toast?.success?.("Sign up successful", {
                description: state.message,
            });

            setTimeout(() => {
                router.push("/log-in");
            }, 2000);
        }
    }, [state?.error, state?.success, state?.message, router]);

    return (
        <AuthCard
            title="Create an account"
            description="Enter your details to create an account"
            alternateText="Already have an account?"
            linkText="Log in"
            linkHref="/log-in"
        >
            <AuthForm
                mode="signup"
                action={action}
            />
        </AuthCard>
    );
}
