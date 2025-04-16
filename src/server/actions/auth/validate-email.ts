"use server";

import { createClient } from "@/lib/supabase/server";

export async function validateEmail(email: string) {
    if (!email || typeof email !== "string") {
        return {
            isValid: false,
            error: "Email is required",
        };
    }

    try {
        const supabase = await createClient();

        const { error: signInError } = await supabase.auth.signInWithOtp({
            email,
            options: {
                shouldCreateUser: false,
            },
        });

        if (!signInError) {
            return {
                isValid: false,
                error: "This email is already in use. Please try logging in instead or reset your password.",
            };
        }

        return {
            isValid: true,
        };
    } catch (error) {
        console.error("Error validating email:", error);
        return {
            isValid: false,
            error: "An error occurred while validating email. Please try again.",
        };
    }
}
