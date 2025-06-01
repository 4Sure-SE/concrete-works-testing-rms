import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { ClearFiltersButton } from "./clear-filter";

const meta: Meta<typeof ClearFiltersButton> = {
    title: "Main/Components/ClearFiltersButton",
    component: ClearFiltersButton,
    parameters: {
        nextjs: {
            navigation: {
                pathname: "/projects",
                query: { query: "test", from: "2024-01-01", to: "2024-12-31" },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ClearFiltersButton>;

export const Default: Story = {
    args: {
        onClear: () => console.log("Clear filters clicked"),
        isPending: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = await canvas.findByRole("button", {
            name: /clear filters/i,
        });
        await expect(button).toBeInTheDocument();
        await userEvent.click(button);
    },
};

export const Pending: Story = {
    args: {
        onClear: () => console.log("Clear filters clicked"),
        isPending: true,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = await canvas.findByRole("button", {
            name: /clear filters/i,
        });
        await expect(button).toBeDisabled();
    },
};
