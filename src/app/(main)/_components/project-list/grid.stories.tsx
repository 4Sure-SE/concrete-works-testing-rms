import type { Meta, StoryObj } from "@storybook/react";
import { ProjectGrid } from "./grid";

const meta = {
    title: "Main/Components/ProjectGrid",
    component: ProjectGrid,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ProjectGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        projects: [
            {
                contractId: "CC-A240",
                id: "CT-2024-001",
                title: "Highway Bridge Renovation",
                stats: {
                    total: 20,
                    ongoing: 5,
                    completed: 15,
                },
            },
            {
                contractId: "YW-A280",
                id: "CT-2024-002",
                title: "Commercial Complex Foundation",
                stats: {
                    total: 60,
                    ongoing: 25,
                    completed: 35,
                },
            },
            {
                contractId: "OC-B291",
                id: "CT-2024-003",
                title: "Residential Tower Construction",
                stats: {
                    total: 45,
                    ongoing: 25,
                    completed: 20,
                },
            },
            {
                contractId: "PC-C479",
                id: "CT-2024-004",
                title: "Municipal Infrastructure Project",
                stats: {
                    total: 15,
                    ongoing: 5,
                    completed: 10,
                },
            },
        ],
    },
};

export const EmptyGrid: Story = {
    args: {
        projects: [],
    },
};

export const SpecificProject: Story = {
    args: {
        projects: [
            {
                contractId: "SS-A098",
                id: "CT-2024-001",
                title: "Highway Bridge Renovation",
                stats: {
                    total: 20,
                    ongoing: 5,
                    completed: 15,
                },
            },
        ],
    },
};

export const FilteredProjects: Story = {
    args: {
        projects: [
            {
                contractId: "BW-A222",
                id: "CT-2024-002",
                title: "Commercial Complex Foundation",
                stats: {
                    total: 60,
                    ongoing: 25,
                    completed: 35,
                },
            },
            {
                contractId: "VS-S430",
                id: "CT-2024-003",
                title: "Residential Tower Construction",
                stats: {
                    total: 45,
                    ongoing: 25,
                    completed: 20,
                },
            },
        ],
    },
};
