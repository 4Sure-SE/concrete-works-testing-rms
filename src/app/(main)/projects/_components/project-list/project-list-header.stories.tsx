import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { ProjectListHeader } from "./project-list-header";

const meta: Meta<typeof ProjectListHeader> = {
    title: "Components/ProjectListHeader",
    component: ProjectListHeader,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: { type: "text" },
            description: "Header title text",
        },
        isFiltering: {
            control: { type: "boolean" },
            description: "Whether filters are being applied",
        },
        onFilterChange: {
            action: "filterChanged",
            description: "Callback when filters change",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Projects",
        isFiltering: false,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onFilterChange: () => {},
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Verify title and buttons exist
        await expect(canvas.getByText("Projects")).toBeInTheDocument();
        await expect(
            canvas.getByPlaceholderText("Search projects..."),
        ).toBeInTheDocument();
        await expect(canvas.getByText("New Project")).toBeInTheDocument();
    },
};

export const Filtering: Story = {
    args: {
        ...Default.args,
        isFiltering: true,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Verify loading state
        const searchInput = canvas.getByPlaceholderText("Search projects...");
        await expect(searchInput).toBeDisabled();
    },
};
