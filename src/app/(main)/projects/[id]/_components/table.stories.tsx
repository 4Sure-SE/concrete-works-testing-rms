import type { Meta, StoryObj } from "@storybook/react";
import fakeProjectsData, { fakeEmptyProjectDetails } from "./fake-data";
import ProjectWorkItemsTable from "./table";

const meta = {
    title: "Main/Components/ProjectDetails/Table",
    component: ProjectWorkItemsTable,
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (StoryEl) => (
            <div className="h-16 w-full">
                <StoryEl />
            </div>
        ),
    ],
    tags: ["autodocs"],
} satisfies Meta<typeof ProjectWorkItemsTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithItemsOfWork: Story = {
    args: {
        project: fakeProjectsData,
        onServerUpdate: async () => 0,
    },
};

export const WithoutItemsOfWork: Story = {
    args: {
        project: fakeEmptyProjectDetails,
        onServerUpdate: async () => 0,
    },
};
