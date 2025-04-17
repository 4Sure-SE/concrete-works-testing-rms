import type { Meta, StoryObj } from "@storybook/react";
import { TestStatus } from "../projects/[id]/_components/test-status";

const meta = {
    title: "Main/Components/ProjectDetails/Test-Status",
    component: TestStatus,
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
} satisfies Meta<typeof TestStatus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CompleteStatus: Story = {
    args: {
        testsOnFile: 3,
        balance: 0,
    },
};

export const OngoingStatus: Story = {
    args: {
        testsOnFile: 1,
        balance: 2,
    },
};

export const NotStartedStatus: Story = {
    args: {
        testsOnFile: 0,
        balance: 1,
    },
};
