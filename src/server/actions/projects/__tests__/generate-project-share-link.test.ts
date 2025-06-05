import { beforeEach, describe, expect, test, vi } from "vitest";

vi.mock("@/server/services/project.service", () => ({
    ProjectService: {
        generateShareLink: vi.fn(),
    },
}));

vi.mock("@/lib/utils/try-catch", () => ({
    tryCatch: vi.fn(),
}));

vi.mock("@/env", () => ({
    env: {
        NEXT_PUBLIC_SITE_URL: "https://test-site.com",
    },
}));

vi.mock("@/lib/utils/error-handler", () => ({
    errorHandler: vi.fn((error) => ({
        message:
            error instanceof Error
                ? error.message
                : "Failed to generate shareable link",
        statusCode: 400,
    })),
}));

import { env } from "@/env";
import { tryCatch } from "@/lib/utils/try-catch";
import { generateProjectShareLink } from "../generate-project-share-link";

describe("generateProjectShareLink", () => {
    const projectId = "test-project-id";
    const testToken = "test-token-123";

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(env, true).NEXT_PUBLIC_SITE_URL = "https://test-site.com";
    });

    test("should return a successful response with shareable URL when token is generated", async () => {
        vi.mocked(tryCatch, true).mockResolvedValue({
            data: testToken,
            error: null,
        });

        const result = await generateProjectShareLink(projectId);

        expect(result).toEqual({
            success: true,
            data: `https://test-site.com/share/projects/${testToken}`,
        });
    });

    test("should use fallback URL when NEXT_PUBLIC_SITE_URL is not available", async () => {
        vi.mocked(tryCatch, true).mockResolvedValue({
            data: testToken,
            error: null,
        });

        vi.mocked(env, true).NEXT_PUBLIC_SITE_URL = undefined;

        const result = await generateProjectShareLink(projectId);

        expect(result).toEqual({
            success: true,
            data: `http://localhost:3000/share/projects/${testToken}`,
        });
    });

    test("should return an error response when service call fails", async () => {
        const testError = new Error("Failed to generate share link");
        vi.mocked(tryCatch, true).mockResolvedValue({
            data: null,
            error: testError,
        });

        const result = await generateProjectShareLink(projectId);

        expect(result).toEqual({
            success: false,
            error: testError.message,
        });
    });

    test("should handle non-Error objects in error handler", async () => {
        const nonErrorObject = "This is not an Error object";
        vi.mocked(tryCatch, true).mockResolvedValue({
            data: null,
            error: nonErrorObject,
        });

        const result = await generateProjectShareLink(projectId);

        expect(result).toEqual({
            success: false,
            error: "Failed to generate shareable link",
        });
    });
});
