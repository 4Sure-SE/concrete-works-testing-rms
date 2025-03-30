"use client";

import { signUp } from "@/server/actions/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AuthForm } from "../_components/forms/auth-form";
import { AuthCard } from "../_components/layout/auth-card";
import { useAuthAction } from "../_hooks/use-auth-action";

export default function SignUpForm() {
    const [state, action] = useAuthAction(signUp);
    const router = useRouter();

    useEffect(() => {
        if (state?.success && state?.message) {
            setTimeout(() => {
                router.push("/log-in");
            }, 2000);
        }
    }, [state?.success, state?.message, router]);

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
