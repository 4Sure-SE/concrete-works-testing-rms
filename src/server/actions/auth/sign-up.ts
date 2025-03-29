"use server";

import { createClient } from "@/lib/supabase/server";

export async function signUp(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const fullName = formData.get("fullName") as string;

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
