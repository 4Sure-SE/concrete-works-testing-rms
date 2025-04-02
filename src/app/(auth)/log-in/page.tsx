"use client";

import { logIn } from "@/server/actions/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AuthForm } from "../_components/forms/auth-form";
import { AuthCard } from "../_components/layout/auth-card";
import { useAuthAction } from "../_hooks/use-auth-action";

export default function LoginForm() {
    const router = useRouter();
    const [, action] = useAuthAction(async (formData) => {
        const result = await logIn(formData);

        if (result?.error) {
            toast.error(result.error);
        } else if (result?.success) {
            toast.success(result.message ?? "Successfully logged in");
            setTimeout(() => {
                router.push("/projects");
            }, 1000);
        }

        return result;
    });

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
