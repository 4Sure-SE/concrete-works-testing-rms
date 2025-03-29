"use server";

import { createClient } from "@/lib/supabase/server";

function validatePassword(password: string): {
    isValid: boolean;
    error?: string;
} {
    if (password.length < 8) {
        return {
            isValid: false,
            error: "Password must be at least 8 characters long",
        };
    }

    if (!/[A-Z]/.test(password)) {
        return {
            isValid: false,
            error: "Password must contain at least one uppercase letter",
        };
    }

    return { isValid: true };
}

export async function signUp(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const fullName = formData.get("fullName") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
        return {
            error: "Passwords do not match",
            success: false,
        };
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
        return {
            error: passwordValidation.error,
            success: false,
        };
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName,
            },
        },
    });

    if (error) {
        return {
            error: error.message,
            success: false,
        };
    }

    return {
        success: true,
        message:
            "Check your email for confirmation instructions. You will be redirected to login after confirming.",
    };
}
