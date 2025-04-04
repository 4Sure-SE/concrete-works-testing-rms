"use server";

import { createClient } from "@/lib/supabase/server";

export async function signUp(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const fullName = formData.get("fullName") as string;

    const supabase = await createClient();

    const { error: signInError } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
            shouldCreateUser: false,
        },
    });

    if (!signInError) {
        return {
            error: "This email is already in use. Please try logging in instead or reset your password.",
            success: false,
            field: "email",
        };
    }

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
