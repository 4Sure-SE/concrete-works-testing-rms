"use server";

import { createClient } from "@/lib/supabase/server";

export async function signUp(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = await createClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/callback`,
        },
    });

    if (error) {
        return { error: error.message };
    }

    return {
        success: true,
        message:
            "Check your email for a confirmation link to complete your registration.",
    };
}
