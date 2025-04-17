import type { Meta, StoryObj } from "@storybook/react";
import ProjectInfoButton from "../projects/[id]/_components/project-info-button";
import fakeProjectsData, {
    fakeEmptyContractDetails,
    fakeLongContractDetails,
} from "./fake-data";
const meta = {
    title: "Main/Components/ProjectDetails/ProjectInfo",
    component: ProjectInfoButton,
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (StoryEl) => (
            <div className="flex h-screen items-center justify-center">
                <StoryEl />
            </div>
        ),
    ],
    tags: ["autodocs"],
} satisfies Meta<typeof ProjectInfoButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithProjectDetails: Story = {
    args: {
        project: fakeProjectsData,
    },
};

export const WithLongProjectDetails: Story = {
    args: {
        project: fakeLongContractDetails,
    },
};

export const WithEmptyProjectDetails: Story = {
    args: {
        project: fakeEmptyContractDetails,
    },
};
