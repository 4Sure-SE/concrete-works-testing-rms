import { db } from "@/server/db";
import { expect, test } from "@playwright/test";

test.describe("QA User flow", () => {
    test.beforeEach(async () => {
        await db.project.deleteMany();
    });
    test("project flow", async ({ page }) => {
        await page.goto("/projects");
        expect(page.url()).toContain("/projects");

        await page.getByRole("button", { name: "New Project" }).click();
        await expect(
            page.getByText("Project Information", { exact: true }),
        ).toBeVisible();

        await page
            .getByRole("textbox", { name: "Contract ID *" })
            .fill("Fake Contract ID");

        await page
            .getByRole("textbox", { name: "Contractor *" })
            .fill("Fake Contractor");

        await page
            .getByRole("textbox", { name: "Limits (Optional)" })
            .fill("Fake Limits");

        await page
            .getByRole("textbox", { name: "Contract Name *" })
            .fill("Fake Contract Name");

        await page
            .getByRole("textbox", { name: "Materials Engineer *" })
            .fill("Fake Materials Engineer");

        await page
            .getByRole("spinbutton", { name: "Contract Cost *" })
            .fill("10000000");

        await page.getByRole("button", { name: "Add" }).click();
        await expect(
            page.getByText("Manage Work Items", { exact: true }),
        ).toBeVisible();

        await page.getByRole("combobox").click();

        await page
            .getByRole("option", { name: "Item 311 - Portland Cement" })
            .click();

        await page.getByPlaceholder("Enter quantity").fill("500");

        await page.getByRole("button", { name: "Add" }).click();

        await page.locator("button").filter({ hasText: "Done" }).click();
        const project = await db.project.findFirst();

        expect(page.url()).toContain(`/projects/${project?.id}`);
        await expect(
            page.getByText(`${project?.contractName}`, { exact: true }),
        ).toBeVisible();

        await page.getByRole("button", { name: "Project Details" }).click();

        await expect(
            page.getByLabel("Project Details").getByText("Fake Contract Name"),
        ).toBeVisible();

        await page.getByRole("button", { name: "Close" }).click();
        await expect(
            page.getByText(`${project?.contractName}`, { exact: true }),
        ).toBeVisible();

        await page
            .getByRole("row", { name: "Item 311 Portland Cement" })
            .getByLabel("increase")
            .click();

        await expect(
            page
                .getByRole("row", { name: "Item 311 Portland Cement" })
                .locator("div")
                .nth(1),
        ).toHaveText("1");

        await expect(
            page.getByRole("button", { name: "Export Report" }),
        ).toBeEnabled();

        await expect(
            page.getByRole("button", { name: "decrease" }),
        ).toBeVisible();

        await page.getByRole("button", { name: "decrease" }).click();

        await expect(
            page
                .getByRole("row", { name: "Item 311 Portland Cement" })
                .locator("div")
                .nth(2),
        ).toHaveText("0");

        await page.getByRole("button", { name: "Share" }).click();

        await expect(
            page.getByRole("button", { name: "Copy Link" }),
        ).toBeVisible();

        await page.getByRole("button", { name: "Copy Link" }).click();
    });
});
