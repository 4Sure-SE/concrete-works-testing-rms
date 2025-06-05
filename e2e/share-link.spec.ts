import { db } from "@/server/db";
import { expect, test } from "@playwright/test";

test.describe("Share link flow", () => {
    let projectId: string;

    test.beforeEach(async () => {
        await db.project.deleteMany();

        const project = await db.project.create({
            data: {
                contractId: "CTR-2024-001",
                contractor: "Test Contractor",
                contractName: "Shared Project",
                materialsEngineer: "John Smith, PE",
                contractCost: 1500000,
                dateStarted: new Date("2024-01-01"),
                token: "test-token",
            },
        });
        projectId = project.id;
    });

    test("should open share modal when Share button is clicked", async ({
        page,
    }) => {
        await page.goto(`/projects/${projectId}`);

        await page.getByRole("button", { name: "Share" }).click();

        await expect(page.getByText("Share Link")).toBeVisible();
        await expect(
            page.getByRole("button", { name: "Copy Link" }),
        ).toBeVisible();
    });

    test("should copy project link to clipboard", async ({ page, context }) => {
        await page.goto(`/projects/${projectId}`);

        // Open share modal
        await page.getByRole("button", { name: "Share" }).click();

        // Click Copy Link button
        await context.grantPermissions(["clipboard-read", "clipboard-write"]);
        await page.getByRole("button", { name: "Copy Link" }).click();

        // Verify success message appears
        await expect(page.getByText("Copied!")).toBeVisible();

        // Verify the correct URL was copied
        const clipboardText = await page.evaluate(() =>
            navigator.clipboard.readText(),
        );
        expect(clipboardText).toContain(
            `https://${page.url().split("/")[2]}/share/projects/test-token`,
        );
    });

    test("should close share modal", async ({ page }) => {
        await page.goto(`/projects/${projectId}`);

        // Open share modal
        await page.getByRole("button", { name: "Share" }).click();
        await expect(page.getByText("Share Link")).toBeVisible();

        // click anywhere outside
        await page
            .locator("div")
            .filter({ hasText: "CTR-2024-001Contract Name:" })
            .nth(2)
            .click();

        // Verify modal is closed
        await expect(page.getByText("Share Link")).not.toBeVisible();

        // Verify we're back on the project page
        const project = await db.project.findUnique({
            where: { id: projectId },
        });
        await expect(
            page.getByText(`${project?.contractName}`, { exact: true }),
        ).toBeVisible();
    });

    test("should allow accessing shared project via link", async ({
        page,
        context,
    }) => {
        await page.goto(`/projects/${projectId}`);

        // Get the project link
        await page.getByRole("button", { name: "Share" }).click();
        const projectUrl = `https://${page.url().split("/")[2]}/share/projects/test-token`;

        // Open a new tab/context to simulate another user
        const newPage = await context.newPage();

        // Navigate to the shared link
        await newPage.goto(projectUrl);

        // Verify the project loads correctly
        const project = await db.project.findUnique({
            where: { id: projectId },
        });
        await expect(
            newPage.getByText(`${project?.contractName}`, { exact: true }),
        ).toBeVisible();

        // Verify project details are accessible
        await newPage.getByRole("button", { name: "Project Details" }).click();
        await expect(
            newPage.getByLabel("Project Details").getByText("Shared Project"),
        ).toBeVisible();
    });
});
