import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { ProgressBar } from "./progress-bar";

const meta: Meta<typeof ProgressBar> = {
    title: "Components/ProgressBar",
    component: ProgressBar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        percentage: {
            control: { type: "range", min: 0, max: 100, step: 1 },
            description: "Completion percentage (0-100)",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        percentage: 50,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const wrapper = canvas.getByTestId("progress-bar-wrapper");
        await expect(wrapper).toBeInTheDocument();
    },
    decorators: [
        (Story) => (
            <div data-testid="progress-bar-wrapper">
                <Story />
            </div>
        ),
    ],
};

export const Complete: Story = {
    args: {
        percentage: 100,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const wrapper = canvas.getByTestId("progress-bar-wrapper");
        await expect(wrapper).toBeInTheDocument();
    },
    decorators: [
        (Story) => (
            <div data-testid="progress-bar-wrapper">
                <Story />
            </div>
        ),
    ],
};

export const Overflow: Story = {
    args: {
        percentage: 120,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const wrapper = canvas.getByTestId("progress-bar-wrapper");
        await expect(wrapper).toBeInTheDocument();
    },
    decorators: [
        (Story) => (
            <div data-testid="progress-bar-wrapper">
                <Story />
            </div>
        ),
    ],
};
