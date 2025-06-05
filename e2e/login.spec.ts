import { expect, test } from "@playwright/test";

test.describe("Authenticated user flow", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/projects");
        await page.waitForLoadState("networkidle");
    });
    test("should access projects page when authenticated", async ({ page }) => {
        await page.waitForURL("**/projects");
        expect(page.url()).toContain("/projects");

        await expect(page.getByText("Manage Projects")).toBeVisible();
        await expect(
            page.getByRole("link", { name: "All Projects" }),
        ).toBeVisible();
        await expect(
            page.getByRole("link", { name: "New Project" }),
        ).toBeVisible();

        await expect(
            page.getByRole("button", { name: "Toggle Sidebar" }),
        ).toBeVisible();

        await expect(
            page.getByRole("heading", {
                name: "Projects",
                exact: true,
                level: 1,
            }),
        ).toBeVisible();

        await page.waitForTimeout(1000);
        expect(page.url()).not.toContain("/log-in");
        expect(page.url()).not.toContain("/sign-up");
    });
});

test.describe("Unauthenticated access", () => {
    test("should redirect to login when accessing projects without auth", async ({
        page,
    }) => {
        await page.context().clearCookies();
        await page.goto("/projects");

        await page.waitForURL("**/log-in");
        expect(page.url()).toContain("/log-in");
        expect(page.url()).not.toContain("/projects");
    });

    test("should show error message with invalid credentials", async ({
        page,
    }) => {
        await page.context().clearCookies();
        await page.context().clearPermissions();

        await page.goto("/log-in");
        await page.waitForLoadState("networkidle");

        await page.waitForSelector('input[name="email"]', { timeout: 10000 });
        await page.fill('input[name="email"]', "invalid@test.com");
        await page.fill('input[name="password"]', "wrongpassword");
        await page.click('button[type="submit"]');

        await page.waitForTimeout(2000);
        expect(page.url()).toContain("/log-in");

        await expect(page.getByText("Manage Projects")).not.toBeVisible();
    });
});
