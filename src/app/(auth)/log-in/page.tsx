"use client";

import { logIn } from "@/server/actions/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LoginForm } from "../_components/forms/login-form";
import { useAuthAction } from "../_hooks/use-auth-action";

export default function LoginPage() {
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
        <div className="flex min-h-screen items-center justify-center">
            <LoginForm action={action} />
        </div>
    );
}
