import { expect, test as setup } from "@playwright/test";

setup("authenticate", async ({ page }) => {
    expect(1).toBe(1);
    // TODO: authenticate user once and save the state
    // save signed-in state
    // await page.context().storageState({ path: ".auth/user.json" });
});
