import type { ProjectSummaryDTO } from "@/lib/types/project";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { ProjectItem } from "./project-item";

const mockProject: ProjectSummaryDTO = {
    id: "1",
    contractId: "CON-2023-001",
    contractName: "Project Alpha",
    dateStarted: new Date("2023-01-15"),
    stats: {
        totalRequiredTests: 100,
        totalBalanceTests: 30,
        totalOnFileTests: 70,
    },
};

const meta: Meta<typeof ProjectItem> = {
    title: "Main/Components/ProjectItem",
    component: ProjectItem,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: mockProject,
        onDeleteAction: () => console.log("Delete clicked"),
        disabled: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByText("Project Alpha")).toBeInTheDocument();
        await expect(canvas.getByText("CON-2023-001")).toBeInTheDocument();
        await expect(
            canvas.getByRole("button", { name: /delete/i }),
        ).toBeInTheDocument();
    },
};

export const Disabled: Story = {
    args: {
        data: mockProject,
        onDeleteAction: () => console.log("Delete clicked"),
        disabled: true,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByText("Project Alpha")).toBeInTheDocument();
        await expect(canvas.getByText("CON-2023-001")).toBeInTheDocument();
        // The delete button should not be present when disabled
        await expect(
            canvas.queryByRole("button", { name: /delete/i }),
        ).not.toBeInTheDocument();
    },
};
