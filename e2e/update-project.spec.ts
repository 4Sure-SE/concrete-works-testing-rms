import { db } from "@/server/db";
import { expect, test } from "@playwright/test";

test.describe("Update project flow", () => {
    let projectId: string;

    test.beforeEach(async () => {
        await db.project.deleteMany();

        // create a test project
        const project = await db.project.create({
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
        projectId = project.id;
    });

    test("should display project details in modal", async ({ page }) => {
        await page.goto(`/projects/${projectId}`);

        await page.getByRole("button", { name: "Project Details" }).click();

        await expect(page.getByLabel("Project Details")).toBeVisible();
        await expect(
            page
                .getByLabel("Project Details")
                .getByText("Original Project Name"),
        ).toBeVisible();
        await expect(
            page.getByLabel("Project Details").getByText("CTR-2024-001"),
        ).toBeVisible();
        await expect(
            page.getByLabel("Project Details").getByText("Original Contractor"),
        ).toBeVisible();
        await expect(
            page.getByLabel("Project Details").getByText("Original Engineer"),
        ).toBeVisible();
        await expect(
            page.getByLabel("Project Details").getByText("₱1,000,000"),
        ).toBeVisible();
        await expect(
            page.getByLabel("Project Details").getByText("Original limits"),
        ).toBeVisible();
    });

    test("should close project details modal", async ({ page }) => {
        await page.goto(`/projects/${projectId}`);

        await page.getByRole("button", { name: "Project Details" }).click();
        await expect(page.getByLabel("Project Details")).toBeVisible();

        // Close modal using Close button
        await page.getByRole("button", { name: "Close" }).click();
        await expect(page.getByLabel("Project Details")).not.toBeVisible();

        const project = await db.project.findUnique({
            where: { id: projectId },
        });
        await expect(
            page.getByText(`${project?.contractName}`, { exact: true }),
        ).toBeVisible();
    });

    test("should edit project information", async ({ page }) => {
        await page.goto(`/projects/${projectId}`);

        await page.getByRole("link", { name: "Edit" }).click();

        await expect(page.getByText("Edit Project")).toBeVisible();

        await page
            .getByRole("textbox", { name: "Contract ID" })
            .fill("CTR-2024-001-UPDATED");
        await page
            .getByRole("textbox", { name: "Contractor" })
            .fill("Updated Contractor Inc");
        await page
            .getByRole("textbox", { name: "Contract Name" })
            .fill("Updated Project Name");
        await page
            .getByRole("textbox", { name: "Materials Engineer" })
            .fill("Jane Doe, PE");
        await page
            .getByRole("textbox", { name: "Limits (Optional)" })
            .fill("Updated project limits");

        await page.getByRole("button", { name: "Update" }).click();

        await expect(page.getByText("Updated Project Name")).toBeVisible();

        const updatedProject = await db.project.findUnique({
            where: { id: projectId },
        });
        expect(updatedProject?.contractId).toBe("CTR-2024-001-UPDATED");
        expect(updatedProject?.contractor).toBe("Updated Contractor Inc");
        expect(updatedProject?.contractName).toBe("Updated Project Name");
        expect(updatedProject?.materialsEngineer).toBe("Jane Doe, PE");
        expect(updatedProject?.limits).toBe("Updated project limits");
    });

    test("should validate required fields when editing", async ({ page }) => {
        await page.goto(`/projects/${projectId}`);

        await page.getByRole("link", { name: "Edit" }).click();

        // Clear required
        await page.getByRole("textbox", { name: "Contract Name" }).fill("");
        await page.getByRole("textbox", { name: "Contractor" }).fill("");

        await page.getByRole("button", { name: "Update" }).click();

        // should still be in edit mode with validation errors
        await expect(page.getByText("Edit Project")).toBeVisible();

        // Verify no changes were saved
        const project = await db.project.findUnique({
            where: { id: projectId },
        });
        expect(project?.contractName).toBe("Original Project Name");
        expect(project?.contractor).toBe("Original Contractor");
    });
});
