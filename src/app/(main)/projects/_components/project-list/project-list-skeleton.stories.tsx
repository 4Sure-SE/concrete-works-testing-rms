import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { ProjectListSkeleton } from "./project-list-skeleton";

const meta: Meta<typeof ProjectListSkeleton> = {
    title: "Components/ProjectListSkeleton",
    component: ProjectListSkeleton,
};

export default meta;

type Story = StoryObj<typeof ProjectListSkeleton>;

export const Default: Story = {};

export const CustomItems: Story = {
    args: {
        itemsPerPage: 6,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const skeleton = canvas.queryByTestId("skeleton");
        await expect(skeleton).not.toBeInTheDocument();
    },
};
