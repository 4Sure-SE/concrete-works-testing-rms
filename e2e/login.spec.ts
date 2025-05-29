import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/auth/login");
});
