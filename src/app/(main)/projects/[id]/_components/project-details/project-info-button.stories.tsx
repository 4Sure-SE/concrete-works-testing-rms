import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import {
    fakeEmptyContractDetails,
    fakeLongContractDetails,
    fakeProjectsData,
} from "../fake-data";
import { ProjectInfoButton } from "./project-info-button";
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

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const WithProjectDetails: Story = {
    args: {
        project: fakeProjectsData,
    },

    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const projectDetailsButton = await canvas.findByRole("button", {
            name: /Project Details/i,
        });
        await sleep(500);
        await userEvent.click(projectDetailsButton);
        await sleep(500);

        const projectDetailsInfoDisplay =
            await canvas.findByText("Project Details");
        await expect(projectDetailsInfoDisplay).toBeInTheDocument();
    },
};

export const WithLongProjectDetails: Story = {
    args: {
        project: fakeLongContractDetails,
    },

    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const projectDetailsButton = await canvas.findByRole("button", {
            name: /Project Details/i,
        });
        await sleep(500);
        await userEvent.click(projectDetailsButton);
        await sleep(500);

        const projectDetailsInfoDisplay =
            await canvas.findByText("Project Details");
        await expect(projectDetailsInfoDisplay).toBeInTheDocument();
    },
};

export const WithEmptyProjectDetails: Story = {
    args: {
        project: fakeEmptyContractDetails,
    },

    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const projectDetailsButton = await canvas.findByRole("button", {
            name: /Project Details/i,
        });
        await sleep(500);
        await userEvent.click(projectDetailsButton);
        await sleep(500);

        const projectDetailsInfoDisplay =
            await canvas.findByText("Project Details");
        await expect(projectDetailsInfoDisplay).toBeInTheDocument();
    },
};
