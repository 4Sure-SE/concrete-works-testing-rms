"use server";

import { createClient } from "@/lib/supabase/server";

export async function logIn(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return {
            error: error.message,
            success: false,
        };
    }

    return {
        success: true,
        message: "Successfully logged in",
    };
}
