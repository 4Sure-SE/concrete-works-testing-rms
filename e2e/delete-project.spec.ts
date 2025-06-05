import { db } from "@/server/db";
import { expect, test } from "@playwright/test";

test.describe("Delete project flow", () => {
    test.beforeEach(async () => {
        await db.project.deleteMany();

        await db.project.create({
            data: {
                contractId: "CTR-2024-001",
                contractor: "Original Contractor",
                contractName: "Original Project Name",
                materialsEngineer: "Original Engineer",
                contractCost: 1000000,
                limits: "Original limits",
                dateStarted: new Date("2025-01-01"),
            },
        });
    });

    test("should delete a project", async ({ page }) => {
        // Navigate to projects page
        await page.goto("/projects");
        expect(page.url()).toContain("/projects");

        await page
            .getByRole("link", { name: "CTR-2024-001 Original Project" })
            .hover();

        await page
            .getByRole("button", { name: "Delete project CTR-2024-" })
            .click();

        await page.getByRole("button", { name: "Delete" }).click();

        // Verify project is deleted
        await expect(
            page.getByText("Project deleted successfully"),
        ).toBeVisible();
        await expect(
            page.getByRole("link", { name: "CTR-2024-001 Original Project" }),
        ).not.toBeVisible();
    });

    test("should cancel when confirmation is cancelled", async ({ page }) => {
        // Navigate to projects page
        await page.goto("/projects");
        expect(page.url()).toContain("/projects");

        await page
            .getByRole("link", { name: "CTR-2024-001 Original Project" })
            .hover();

        await page
            .getByRole("button", { name: "Delete project CTR-2024-" })
            .click();

        await page.getByRole("button", { name: "Cancel" }).click();

        // Verify project is still there
        await expect(
            page.getByRole("link", { name: "CTR-2024-001 Original Project" }),
        ).toBeVisible();
    });
});
