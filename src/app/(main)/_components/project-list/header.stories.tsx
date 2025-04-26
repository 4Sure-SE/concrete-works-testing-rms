import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { PageHeader } from "./header";

const meta = {
    title: "Main/Components/PageHeader",
    component: PageHeader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Projects",
        searchTerm: "",
        onSearchChange: (value) => {
            console.log("Search changed:", value);
        },
        startDate: "",
        endDate: "",
        onStartDateChange: (date) => {
            console.log("Start date changed:", date);
        },
        onEndDateChange: (date) => {
            console.log("End date changed:", date);
        },
    },
};

export const WithSearch: Story = {
    args: {
        title: "Projects",
        searchTerm: "id",
        onSearchChange: (value) => {
            console.log("Search changed:", value);
        },
        startDate: "",
        endDate: "",
        onStartDateChange: (date) => {
            console.log("Start date changed:", date);
        },
        onEndDateChange: (date) => {
            console.log("End date changed:", date);
        },
    },
    play: async ({ canvasElement, _args }) => {
        const canvas = within(canvasElement);

        // Get the search input
        const searchInput = canvas.getByDisplayValue("id");

        // Clear the search
        await userEvent.clear(searchInput);

        // Type a new search term
        await userEvent.type(searchInput, "new search", { delay: 100 });
    },
};

export const WithDateRange: Story = {
    args: {
        title: "Projects",
        searchTerm: "",
        onSearchChange: (value) => {
            console.log("Search changed:", value);
        },
        startDate: "01-11-2024",
        endDate: "04-16-2024",
        onStartDateChange: (date) => {
            console.log("Start date changed:", date);
        },
        onEndDateChange: (date) => {
            console.log("End date changed:", date);
        },
    },
};
