import { db } from "@/server/db";
import { expect, test } from "@playwright/test";

test.describe("Create project flow", () => {
    test.beforeEach(async () => {
        await db.project.deleteMany();
    });

    test("should create a new project through the complete form flow", async ({
        page,
    }) => {
        // Navigate to projects page
        await page.goto("/projects");
        expect(page.url()).toContain("/projects");

        // Click New Project button
        await page.getByRole("button", { name: "New Project" }).click();

        // Verify Project Information form is displayed
        await expect(
            page.getByText("Project Information", { exact: true }),
        ).toBeVisible();

        // Fill out project form fields
        await page
            .getByRole("textbox", { name: "Contract ID *" })
            .fill("CTR-2024-001");
        await page
            .getByRole("textbox", { name: "Contractor *" })
            .fill("ABC Construction Corp");
        await page
            .getByRole("textbox", { name: "Limits (Optional)" })
            .fill("Standard DOT limits");
        await page
            .getByRole("textbox", { name: "Contract Name *" })
            .fill("Highway 101 Reconstruction");
        await page
            .getByRole("textbox", { name: "Materials Engineer *" })
            .fill("John Smith, PE");
        await page
            .getByRole("spinbutton", { name: "Contract Cost *" })
            .fill("15000000");

        // Submit the form
        await page.getByRole("button", { name: "Add" }).click();

        // Verify redirect to work items management
        await expect(
            page.getByText("Manage Work Items", { exact: true }),
        ).toBeVisible();

        const project = await db.project.findFirst();
        expect(project).toBeTruthy();
        expect(project?.contractId).toBe("CTR-2024-001");
        expect(project?.contractor).toBe("ABC Construction Corp");
        expect(project?.contractName).toBe("Highway 101 Reconstruction");
    });

    test("should show validation errors for incomplete form", async ({
        page,
    }) => {
        await page.goto("/projects");
        await page.getByRole("button", { name: "New Project" }).click();

        await page.getByRole("button", { name: "Add" }).click();

        await expect(
            page.getByText("Project Information", { exact: true }),
        ).toBeVisible();
    });
});
