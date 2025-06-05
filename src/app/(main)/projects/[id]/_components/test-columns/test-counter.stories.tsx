import type { TestType } from "@/lib/types/project-test/project-test.types";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { TestCounter } from "./test-counter";

const mockUpdateTestAction = fn().mockImplementation(
    async (id: string, amount: number, type: TestType) => {
        console.log("onUpdate:", { id, amount, type });

        await sleep(1000);
    },
);

const neverResolvingUpdateAction = async (
    id: string,
    amount: number,
    type: TestType,
): Promise<void> => {
    console.log(id, amount, type);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return new Promise(() => {});
};

const meta = {
    title: "Main/Components/ProjectDetails/Test-Counter",
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

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const IncrementTest: Story = {
    args: {
        id: "test-id",
        value: 0,
        type: "material",
        updateTestAction: mockUpdateTestAction,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const plusButton = await canvas.findByRole("button", {
            name: /increase/i,
        });
        await userEvent.click(plusButton);
        await sleep(1000);

        await expect(mockUpdateTestAction).toHaveBeenCalledTimes(1);
        await expect(mockUpdateTestAction).toHaveBeenCalledWith(
            "test-id",
            1,
            "material",
        );
    },
};

export const DecrementTest: Story = {
    args: {
        id: "test-id",
        value: 1,
        type: "material",
        updateTestAction: mockUpdateTestAction,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const minusButton = await canvas.findByRole("button", {
            name: /decrease/i,
        });
        await userEvent.click(minusButton);
        await sleep(1000);

        await expect(mockUpdateTestAction).toHaveBeenCalledTimes(1);
        await expect(mockUpdateTestAction).toHaveBeenCalledWith(
            "test-id",
            -1,
            "material",
        );
    },
};

export const LoadingWhileIncrementing: Story = {
    args: {
        id: "test-id",
        value: 0,
        type: "material",
        updateTestAction: neverResolvingUpdateAction,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const plusButton = await canvas.findByRole("button", {
            name: /increase/i,
        });

        await userEvent.click(plusButton);
    },
};

export const LoadingWhileDecrementing: Story = {
    args: {
        id: "test-id",
        value: 1,
        type: "material",
        updateTestAction: neverResolvingUpdateAction,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const plusButton = await canvas.findByRole("button", {
            name: /decrease/i,
        });

        await userEvent.click(plusButton);
    },
};
