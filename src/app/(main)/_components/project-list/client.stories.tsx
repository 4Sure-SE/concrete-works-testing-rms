import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { userEvent, within, waitFor } from "@storybook/testing-library";
import { ProjectClient } from "./client";

const meta = {
    title: "Main/Components/ProjectsClient",
    component: ProjectClient,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ProjectClient>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProjects = [
    {
        contractId: "CC-001",
        id: "CT-2024-001",
        title: "Highway Bridge Renovation",
        dateStarted: "02-24-2024",
        stats: {
            total: 20,
            ongoing: 5,
            completed: 15,
        },
    },
    {
        contractId: "AA-002",
        id: "CT-2024-002",
        title: "Commercial Complex Foundation",
        dateStarted: "03-14-2024",
        stats: {
            total: 60,
            ongoing: 25,
            completed: 35,
        },
    },
    {
        contractId: "AC-003",
        id: "CT-2024-003",
        title: "Residential Tower Construction",
        dateStarted: "03-18-2024",
        stats: {
            total: 45,
            ongoing: 25,
            completed: 20,
        },
    },
    {
        contractId: "EW-004",
        id: "CT-2024-004",
        title: "Municipal Infrastructure Project",
        dateStarted: "04-02-2024",
        stats: {
            total: 15,
            ongoing: 5,
            completed: 10,
        },
    },
];

export const Default: Story = {
    args: {
        projects: [
            {
                contractId: "",
                id: "",
                title: "",
                dateStarted: "",
                stats: {
                    total: 20,
                    ongoing: 5,
                    completed: 15,
                },
            },
        ],
    },
};

export const WithProjects: Story = {
    args: {
        projects: sampleProjects,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Verify projects are displayed
        await expect(
            canvas.getByText("Highway Bridge Renovation"),
        ).toBeInTheDocument();

        // Test search functionality
        const searchInput = canvas.getByPlaceholderText("Search projects...");
        await userEvent.type(searchInput, "Highway", { delay: 100 });

        // Verify search filtering works
        await waitFor(async () => {
            await expect(
                canvas.getByText("Highway Bridge Renovation"),
            ).toBeInTheDocument();
            await expect(
                canvas.queryByText("Commercial Complex Foundation"),
            ).not.toBeInTheDocument();
        });

        // Clear search
        await userEvent.clear(searchInput);
    },
};

export const EmptyState: Story = {
    args: {
        projects: [],
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(
            canvas.getByText("No projects found."),
        ).toBeInTheDocument();
    },
};
