import { beforeEach, describe, expect, test, vi } from "vitest";
import { signUp } from "../sign-up";
import { validateEmail } from "../validate-email";

vi.mock("../validate-email", () => ({
    validateEmail: vi.fn(),
}));

vi.mock("@/lib/supabase/server", () => ({
    createClient: vi.fn().mockImplementation(() => ({
        auth: {
            signUp: vi.fn().mockImplementation(({ email }) => {
                if (email === "newuser@example.com") {
                    return { error: null };
                }
                if (email === "existing@example.com") {
                    return {
                        error: { message: "User already registered" },
                    };
                }
                return {
                    error: { message: "An error occurred during signup" },
                };
            }),
        },
    })),
}));

describe("signUp function", () => {
    let formData: FormData;

    beforeEach(() => {
        formData = new FormData();
        vi.mocked(validateEmail).mockReset();
    });

    test("successful signup with valid data", async () => {
        formData.append("email", "newuser@example.com");
        formData.append("password", "Password123");
        formData.append("fullName", "New User");

        vi.mocked(validateEmail).mockResolvedValue({
            isValid: true,
        });

        const result = await signUp(formData);

        expect(validateEmail).toHaveBeenCalledWith("newuser@example.com");
        expect(result).toEqual({
            success: true,
            message:
                "Check your email for confirmation instructions. You will be redirected to login after confirming.",
        });
    });

    test("failed signup with invalid email", async () => {
        formData.append("email", "invalidemail@example.com");
        formData.append("password", "Password123");
        formData.append("fullName", "Invalid User");

        vi.mocked(validateEmail).mockResolvedValue({
            isValid: false,
            error: "This email is already in use. Please try logging in instead or reset your password.",
        });

        const result = await signUp(formData);

        expect(validateEmail).toHaveBeenCalledWith("invalidemail@example.com");
        expect(result).toEqual({
            error: "This email is already in use. Please try logging in instead or reset your password.",
            success: false,
            field: "email",
        });
    });

    test("failed signup with existing email", async () => {
        formData.append("email", "existing@example.com");
        formData.append("password", "Password123");
        formData.append("fullName", "Existing User");

        vi.mocked(validateEmail).mockResolvedValue({
            isValid: true,
        });

        const result = await signUp(formData);

        expect(validateEmail).toHaveBeenCalledWith("existing@example.com");
        expect(result).toEqual({
            error: "User already registered",
            success: false,
        });
    });
});
