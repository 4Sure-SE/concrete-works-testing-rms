import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { ShareButton } from "./share-button";

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

        const writeTextMock = fn().mockResolvedValue(undefined);
        Object.defineProperty(navigator, "clipboard", {
            value: {
                writeText: writeTextMock,
            },
            configurable: true,
            writable: true,
        });

        const trigger = await canvas.findByRole("button", { name: /share/i });
        await userEvent.click(trigger);

        const copyBtn = await within(document.body).findByTestId("copy-button");
        await userEvent.click(copyBtn);

        await expect(writeTextMock).toHaveBeenCalledTimes(1);

        const checkIcon = await within(document.body).findByTestId(
            "check-icon",
        );
        await expect(checkIcon).toBeInTheDocument();

        Object.defineProperty(navigator, "clipboard", {
            value: undefined,
            configurable: true,
            writable: true,
        });
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
