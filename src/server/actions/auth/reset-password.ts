"use server";

import { createClient } from "@/lib/supabase/server";

export async function resetPassword(formData: FormData) {
    const password = formData.get("password") as string;

    try {
        const supabase = await createClient();

        const { error } = await supabase.auth.updateUser({
            password,
        });

        if (error) {
            console.error("Error updating password:", error);
            return {
                error: error.message,
                success: false,
            };
        }

        // Return success message
        return {
            success: true,
            message:
                "Password reset successfully. You can now log in with your new password.",
        };
    } catch (error) {
        console.error("Unexpected error during password reset:", error);
        return {
            error: "An unexpected error occurred. Please try again.",
            success: false,
        };
    }
}
