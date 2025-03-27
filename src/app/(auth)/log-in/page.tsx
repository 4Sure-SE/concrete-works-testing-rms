"use client";

import { logIn } from "@/server/actions/auth";
import { useAuthAction } from "../_hooks/use-auth-action";
import { AuthCard } from "../_components/auth-card";
import { AuthForm } from "../_components/auth-form";

export default function LoginForm() {
    const [state, action] = useAuthAction(logIn);

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
                error={state?.error}
                action={action}
            />
        </AuthCard>
    );
}
