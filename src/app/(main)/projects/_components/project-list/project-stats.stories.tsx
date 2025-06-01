import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { ProjectStats } from "./project-stats";

const meta: Meta<typeof ProjectStats> = {
    title: "Main/Components/ProjectStats",
    component: ProjectStats,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        total: {
            control: { type: "number", min: 0 },
            description: "Total number of tests",
        },
        balance: {
            control: { type: "number", min: 0 },
            description: "Number of balance tests",
        },
        onFile: {
            control: { type: "number", min: 0 },
            description: "Number of tests on file",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        total: 50,
        balance: 15,
        onFile: 35,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Check if all stats are displayed
        await expect(canvas.getByText("50")).toBeInTheDocument();
        await expect(canvas.getByText("15")).toBeInTheDocument();
        await expect(canvas.getByText("35")).toBeInTheDocument();

        // Check labels
        await expect(canvas.getByText("Total")).toBeInTheDocument();
        await expect(canvas.getByText("Balance")).toBeInTheDocument();
        await expect(canvas.getByText("On File")).toBeInTheDocument();
    },
};

export const ZeroStats: Story = {
    args: {
        total: 0,
        balance: 0,
        onFile: 0,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const totalElements = canvas.getAllByText("0");
        await expect(totalElements).toHaveLength(3);
    },
};
