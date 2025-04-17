import type { Meta, StoryObj } from "@storybook/react";
import fakeProjectsData, { fakeEmptyProjectDetails } from "./fake-data";
import ProjectDetailsTable from "./table";

const meta = {
    title: "Main/Components/ProjectDetails/Table",
    component: ProjectDetailsTable,
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
} satisfies Meta<typeof ProjectDetailsTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithItemsOfWork: Story = {
    args: {
        project: fakeProjectsData,
    },
};

export const WithoutItemsOfWork: Story = {
    args: {
        project: fakeEmptyProjectDetails,
    },
};
