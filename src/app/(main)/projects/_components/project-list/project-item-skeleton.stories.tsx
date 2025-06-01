import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { ProjectItemSkeleton } from "./project-item-skeleton";

const meta: Meta<typeof ProjectItemSkeleton> = {
    title: "Components/ProjectItemSkeleton",
    component: ProjectItemSkeleton,
};

export default meta;
type Story = StoryObj<typeof ProjectItemSkeleton>;

export const Default: Story = {
    args: {
        isLoading: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const skeleton = canvas.queryByTestId("skeleton");
        await expect(skeleton).not.toBeInTheDocument();
    },
};
