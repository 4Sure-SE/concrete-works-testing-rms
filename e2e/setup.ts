import { expect, test as setup } from "@playwright/test";

setup("authenticate", async ({ page }) => {
    await page.context().clearCookies();
    await page.context().clearPermissions();

    await page.goto("/log-in");

    await page.waitForLoadState("networkidle");

    const signOutButton = page.getByRole("button", { name: "Sign Out" });
    if (await signOutButton.isVisible()) {
        await signOutButton.click();
        await page.waitForURL("**/log-in");
    }

    await page.waitForSelector('input[name="email"]', { timeout: 10000 });

    await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL!);
    await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD!);

    await page.click('button[type="submit"]');

    await page.waitForURL("/projects");

    expect(page.url()).toContain("/projects");

    await page.context().storageState({ path: "e2e/.auth/user.json" });
});
