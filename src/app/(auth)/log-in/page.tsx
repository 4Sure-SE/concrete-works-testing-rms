"use client";

import { logIn } from "@/server/actions/auth";
import { AuthCard } from "../_components/auth-card";
import { AuthForm } from "../_components/auth-form";
import { useAuthAction } from "../_hooks/use-auth-action";

export default function LoginForm() {
    const [, action] = useAuthAction(logIn);

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
