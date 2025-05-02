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
        setLoading: (loading) => {
            console.log("setLoading:", loading);
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
        setLoading: (loading) => {
            console.log("setLoading:", loading);
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

export const LoadingWhileIncrementing: Story = {
    args: {
        id: "test-id",
        value: 0,
        type: "material",
        onUpdate: (id, amount, type) => {
            console.log("onUpdate:", { id, amount, type });
        },
        onServerUpdate: async () => {
            return new Promise(() => {
                //stays loading
            });
        },
        setLoading: (loading) => {
            console.log("setLoading:", loading);
        },
    },
    play: async ({ canvasElement }) => {
        const button = canvasElement.querySelector(
            'button[aria-label="increase"]',
        );
        if (button) {
            (button as HTMLButtonElement).click();
        }
    },
};

export const LoadingWhileDecrementing: Story = {
    args: {
        id: "test-id",
        value: 1,
        type: "material",
        onUpdate: (id, amount, type) => {
            console.log("onUpdate:", { id, amount, type });
        },
        onServerUpdate: async () => {
            return new Promise(() => {
                //stays loading
            });
        },
        setLoading: (loading) => {
            console.log("setLoading:", loading);
        },
    },
    play: async ({ canvasElement }) => {
        const button = canvasElement.querySelector(
            'button[aria-label="decrease"]',
        );
        if (button) {
            (button as HTMLButtonElement).click();
        }
    },
};
