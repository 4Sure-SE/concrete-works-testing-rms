"use client";

import { signUp } from "@/server/actions/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { AuthForm } from "../_components/forms/auth-form";
import { AuthCard } from "../_components/layout/auth-card";
import { useAuthAction } from "../_hooks/use-auth-action";

export default function SignUpForm() {
    const [state, action] = useAuthAction(async (formData) => {
        const result = await signUp(formData);

        if (result?.error) {
            toast.error(result.error);
        } else if (result?.success) {
            toast.success(result.message ?? "Account created successfully");
        }

        return result;
    });
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
