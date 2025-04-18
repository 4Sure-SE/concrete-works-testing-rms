import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { TestCounter } from "./test-counter";

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
        onUpdate: (id, amount, type) => {
            console.log("onUpdate:", { id, amount, type });
        },
        onServerUpdate: async (_id, amount, _type) => {
            await sleep(1000);
            return amount;
        },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const plusButton = await canvas.findByRole("button", {
            name: /increase/i,
        });
        await userEvent.click(plusButton);
        await sleep(1000);

        const counterDisplay = await canvas.findByText("1");
        await expect(counterDisplay).toBeInTheDocument();
    },
};

export const DecrementTest: Story = {
    args: {
        id: "test-id",
        value: 1,
        type: "material",
        onUpdate: (id, amount, type) => {
            console.log("onUpdate:", { id, amount, type });
        },
        onServerUpdate: async (_id, amount, _type) => {
            await sleep(1000);
            const current = 1;
            const updated = Math.max(0, current + amount);
            return updated;
        },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const plusButton = await canvas.findByRole("button", {
            name: /decrease/i,
        });
        await userEvent.click(plusButton);
        await sleep(1000);

        const counterDisplay = await canvas.findByText("0");
        await expect(counterDisplay).toBeInTheDocument();
    },
};
