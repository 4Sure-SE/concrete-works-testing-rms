import type { Meta, StoryObj } from "@storybook/react";
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
