"use client";

import { signUp } from "@/server/actions/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { SignupForm } from "../_components/forms/signup-form";
import { useAuthAction } from "../_hooks/use-auth-action";

export default function SignUpPage() {
    const [state, action] = useAuthAction(async (formData) => {
        const result = await signUp(formData);

        if (result?.error && result?.field === "email") {
            return result;
        }

        if (result?.error) {
            toast.error(result.error);
        } else if (result?.success) {
            toast.success(result.message ?? "Account created successfully");
        }

        return result;
    });

    const router = useRouter();

    useEffect(() => {
        if (state?.success && state?.message && !state?.field) {
            setTimeout(() => {
                router.push("/log-in");
            }, 2000);
        }
    }, [state, router]);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <SignupForm
                action={action}
                initialError={
                    state?.field === "email"
                        ? { error: state.error, field: state.field }
                        : null
                }
            />
        </div>
    );
}
