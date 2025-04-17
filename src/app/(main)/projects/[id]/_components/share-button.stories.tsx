import type { Meta, StoryObj } from "@storybook/react";
import { expect, screen, userEvent, within } from "@storybook/test";
import ShareButton from "./share-button";

const meta = {
    title: "Main/Components/ProjectDetails/Share Button",
    component: ShareButton,
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
} satisfies Meta<typeof ShareButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const CopiedState: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(1000);

        const trigger = await canvas.findByRole("button", { name: /share/i });
        await userEvent.click(trigger);
        await sleep(1000);

        const copyBtn = await screen.findByTestId("copy-button");
        await userEvent.click(copyBtn);
        await sleep(1000);

        await expect(
            screen.findByTestId("check-icon"),
        ).resolves.toBeInTheDocument();

        await sleep(1000);
    },
};

export const HoverColor: Story = {
    render: () => <ShareButton />,
    decorators: [
        (StoryEl) => (
            <div className="w-fit">
                <StoryEl />
                <style>
                    {`
                        button{
                            background-color: #e5e7eb !important; 
                            
                            color: black !important;
                        }
                    `}
                </style>
            </div>
        ),
    ],
};
