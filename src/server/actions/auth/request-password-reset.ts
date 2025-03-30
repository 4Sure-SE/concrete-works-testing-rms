"use server";

import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";

export async function requestPasswordReset(formData: FormData) {
    const email = formData.get("email") as string;

    if (!email || typeof email !== "string") {
        return {
            error: "Email is required",
            success: false,
        };
    }

    try {
        const headersList = headers();
        const host = (await headersList).get("host") ?? "";
        const protocol =
            process.env.NODE_ENV === "development" ? "http" : "https";

        const redirectUrl = `${protocol}://${host}/reset-password`;

        const supabase = await createClient();
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: redirectUrl,
        });

        if (error) {
            return {
                error: "Something went wrong. Please try again later.",
                success: false,
            };
        }

        // Always return success even if email doesn't exist (security best practice)
        return {
            success: true,
            message:
                "If your email exists in our system, you will receive reset instructions shortly.",
        };
    } catch (error) {
        console.error("Error in requestPasswordReset:", error);
        return {
            error: "An unexpected error occurred. Please try again later.",
            success: false,
        };
    }
}
