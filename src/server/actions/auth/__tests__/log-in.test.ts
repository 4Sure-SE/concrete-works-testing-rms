import { beforeEach, describe, expect, test, vi } from "vitest";
import { logIn } from "../log-in";

vi.mock("@/lib/supabase/server", () => ({
    createClient: vi.fn().mockImplementation(() => ({
        auth: {
            signInWithPassword: vi
                .fn()
                .mockImplementation(({ email, password }) => {
                    if (
                        email === "test@gmail.com" &&
                        password === "Password123"
                    ) {
                        return { error: null };
                    }
                    return {
                        error: { message: "Invalid login credentials" },
                    };
                }),
        },
    })),
}));

describe("logIn function", () => {
    let formData: FormData;

    beforeEach(() => {
        formData = new FormData();
    });

    test("successful login with valid credentials", async () => {
        formData.append("email", "test@gmail.com");
        formData.append("password", "Password123");

        const result = await logIn(formData);

        expect(result).toEqual({
            success: true,
            message: "Successfully logged in",
        });
    });

    test("failed login with invalid credentials", async () => {
        formData.append("email", "wrong@gmail.com");
        formData.append("password", "WrongPassword");
        const result = await logIn(formData);

        expect(result).toEqual({
            error: "Invalid login credentials",
            success: false,
        });
    });
});
