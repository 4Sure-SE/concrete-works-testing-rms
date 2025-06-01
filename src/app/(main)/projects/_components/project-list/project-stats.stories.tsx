import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { ProjectStats } from "./project-stats";

const meta: Meta<typeof ProjectStats> = {
    title: "Components/ProjectStats",
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

export const HighProgress: Story = {
    args: {
        total: 100,
        balance: 10,
        onFile: 90,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await expect(canvas.getByText("100")).toBeInTheDocument();
        await expect(canvas.getByText("10")).toBeInTheDocument();
        await expect(canvas.getByText("90")).toBeInTheDocument();
    },
};

export const LowProgress: Story = {
    args: {
        total: 30,
        balance: 25,
        onFile: 5,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await expect(canvas.getByText("30")).toBeInTheDocument();
        await expect(canvas.getByText("25")).toBeInTheDocument();
        await expect(canvas.getByText("5")).toBeInTheDocument();
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
