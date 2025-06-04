import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { SearchBar } from "./search-bar";

const meta: Meta<typeof SearchBar> = {
    title: "Main/Components/SearchBar",
    component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
    args: {
        placeholder: "Search projects...",
        value: "",
        onSearchChange: (query: string | undefined) => {
            // handle search change, e.g., log or update state
            console.log(query);
        },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = await canvas.findByPlaceholderText("Search projects...");
        await userEvent.type(input, "test");
        await expect(input).toHaveValue("test");
    },
};

export const WithValue: Story = {
    args: {
        placeholder: "Search projects...",
        value: "construction",
        onSearchChange: (query: string | undefined) => {
            // handle search change, e.g., log or update state
            console.log(query);
        },
    },
    play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
        const canvas = within(canvasElement);
        const input = await canvas.findByDisplayValue("construction");
        await expect(input).toBeInTheDocument();
    },
};
