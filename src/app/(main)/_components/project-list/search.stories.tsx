import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { SearchBar } from "./search";

const meta = {
    title: "Main/Components/SearchBar",
    component: SearchBar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base props shared by all stories
const baseProps = {
    placeholder: "Search projects...",
    // Using a non-empty function to satisfy the ESLint rule
    onChange: (value: string) => {
        console.log(value);
    },
};

export const Default: Story = {
    args: {
        ...baseProps,
        placeholder: "Search projects...",
        value: "",
        onChange: (value: string) => {
            console.log(value);
        },
    },
};

export const Empty: Story = {
    args: {
        ...baseProps,
        placeholder: "Search projects...",
        value: "",
        onChange: (value: string) => {
            console.log(value);
        },
    },
};

export const WithSearch: Story = {
    args: {
        ...baseProps,
        placeholder: "Search projects...",
        value: "Highway Bridge Renovation",
        onChange: (value: string) => {
            console.log(value);
        },
    },
};

export const WithSearchID: Story = {
    args: {
        ...baseProps,
        placeholder: "Search projects...",
        value: "CT-2024-001",
        onChange: (value: string) => {
            console.log(value);
        },
    },
};

// Adding a play function to test search interaction
export const SearchInteraction: Story = {
    args: {
        placeholder: "Search projects...",
        value: "",
        onChange: (value: string) => {
            console.log(value);
        },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Simply find the search input and type text
        const searchInput = canvas.getByPlaceholderText("Search projects...");
        await userEvent.type(searchInput, "Highway");
    },
};
