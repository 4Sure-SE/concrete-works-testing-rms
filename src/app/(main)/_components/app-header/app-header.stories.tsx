import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { Meta, StoryObj } from "@storybook/react";
import AppHeader from "./app-header";

const meta = {
    title: "Main/Components/AppHeader",
    component: AppHeader,
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (StoryEl) => (
            <div className="h-16 w-full">
                <StoryEl />
            </div>
        ),
    ],
    tags: ["autodocs"],
} satisfies Meta<typeof AppHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSidebarClosed: Story = {
    args: {},
    decorators: [
        (Story) => (
            <SidebarProvider open={false}>
                <SidebarInset>
                    <Story />
                </SidebarInset>
            </SidebarProvider>
        ),
    ],
};

export const WithSidebarOpen: Story = {
    args: {},
    decorators: [
        (Story) => (
            <SidebarProvider open={true}>
                <SidebarInset>
                    <Story />
                </SidebarInset>
            </SidebarProvider>
        ),
    ],
};
