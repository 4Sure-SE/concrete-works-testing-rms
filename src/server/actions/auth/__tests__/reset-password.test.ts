import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { resetPassword } from "../reset-password";

import * as supabaseServer from "@/lib/supabase/server";

vi.mock("@/lib/supabase/server", () => ({
    createClient: vi.fn().mockImplementation(() => ({
        auth: {
            updateUser: vi.fn().mockImplementation(({ password }) => {
                if (password === "ValidPassword123") {
                    return { error: null };
                }
                if (password === "short") {
                    return {
                        error: {
                            message: "Password should be at least 8 characters",
                        },
                    };
                }
                return {
                    error: {
                        message: "An error occurred during password reset",
                    },
                };
            }),
        },
    })),
}));

describe("resetPassword function", () => {
    let formData: FormData;

    beforeEach(() => {
        formData = new FormData();

        vi.spyOn(console, "error").mockImplementation(() => {
            return;
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    test("successful password reset with valid password", async () => {
        formData.append("password", "ValidPassword123");

        const result = await resetPassword(formData);

        expect(result).toEqual({
            success: true,
            message:
                "Password reset successfully. You can now log in with your new password.",
        });
    });

    test("failed password reset with error from Supabase", async () => {
        formData.append("password", "short");

        const result = await resetPassword(formData);

        expect(result).toEqual({
            error: "An unexpected error occurred. Please try again.",
            success: false,
        });
        expect(console.error).toHaveBeenCalled();
    });

    test("handles thrown exceptions", async () => {
        formData.append("password", "ThrowError");

        vi.mocked(supabaseServer).createClient.mockImplementationOnce(() => {
            throw new Error("Unexpected error");
        });

        const result = await resetPassword(formData);

        expect(result).toEqual({
            error: "An unexpected error occurred. Please try again.",
            success: false,
        });
        expect(console.error).toHaveBeenCalled();
    });
});
