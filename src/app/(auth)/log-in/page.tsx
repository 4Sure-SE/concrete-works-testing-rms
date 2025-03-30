"use client";

import { logIn } from "@/server/actions/auth";
import { AuthForm } from "../_components/forms/auth-form";
import { AuthCard } from "../_components/layout/auth-card";
import { useAuthAction } from "../_hooks/use-auth-action";

export default function LoginForm() {
    const [, action] = useAuthAction(logIn);

    return (
        <AuthCard
            title="Welcome back"
            description="Enter your email to sign in to your account"
            alternateText="Don't have an account?"
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
