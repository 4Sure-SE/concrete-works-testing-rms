"use client";

import { signUp } from "@/server/actions/auth";
import { AuthCard } from "../_components/auth-card";
import { AuthForm } from "../_components/auth-form";
import { useAuthAction } from "../_hooks/use-auth-action";
import { AuthLoadingCard } from "../_components/auth-loading-card";

export default function SignUpForm() {
    const [state, action] = useAuthAction(signUp);

    if (state?.success) {
        return (
            <AuthLoadingCard
                title="Check your email"
                message={
                    state.message ?? "We've sent you a confirmation email."
                }
                backUrl="/log-in"
                backText="Back to login"
            />
        );
    }

    return (
        <AuthCard
            title="Create an account"
            description="Enter your email below to create your account"
            alternateText="Already registered?"
            linkText="Sign in to your account"
            linkHref="/log-in"
        >
            <AuthForm
                mode="signup"
                error={state?.error ?? null}
                action={action}
            />
        </AuthCard>
    );
}
