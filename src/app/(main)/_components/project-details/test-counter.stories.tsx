import type { Meta, StoryObj } from "@storybook/react";
import { TestCounter } from "./test-counter";
const meta = {
    title: "Main/Components/ProjectDetails/TestCounter",
    component: TestCounter,
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
} satisfies Meta<typeof TestCounter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithTestOnFile: Story = {
    args: {
        value: 1,
    },
};

export const WithoutTestOnFile: Story = {
    args: {
        value: 0,
    },
};
