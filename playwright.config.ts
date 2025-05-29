import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// use test env
import dotenv from "dotenv";
dotenv.config({ path: `.env.test` });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: "./e2e",
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: "html",

    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: "setup",
            testMatch: /.*\.setup\.ts/,
            use: {
                baseURL:
                    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
            },
        },
        {
            name: "chromium",
            use: {
                ...devices["Desktop Chrome"],
                storageState: "e2e/.auth/user.json",
            },
            dependencies: ["setup"],
        },

        {
            name: "firefox",
            use: {
                ...devices["Desktop Firefox"],
                storageState: "e2e/.auth/user.json",
            },
            dependencies: ["setup"],
        },

        {
            name: "webkit",
            use: {
                ...devices["Desktop Safari"],
                storageState: "e2e/.auth/user.json",
            },
            dependencies: ["setup"],
        },
    ],

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://localhost:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
