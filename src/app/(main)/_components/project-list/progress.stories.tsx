import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./progress";

const meta = {
    title: "Main/Components/ProgressBar",
    component: ProgressBar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {
        percentage: 0,
    },
};

export const Low: Story = {
    args: {
        percentage: 25,
    },
};

export const Medium: Story = {
    args: {
        percentage: 50,
    },
};

export const High: Story = {
    args: {
        percentage: 75,
    },
};

export const Complete: Story = {
    args: {
        percentage: 100,
    },
};
