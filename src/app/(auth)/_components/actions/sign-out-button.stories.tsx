import {
    Sidebar,
    SidebarContent,
    SidebarProvider,
} from "@/components/ui/sidebar";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import AuthProvider from "../../_contexts/auth-provider";
import SignOut from "./sign-out-button";

const meta = {
    title: "Auth/Components/Actions/SignOutButton",
    component: SignOut,
    decorators: [
        (Story) => (
            <AuthProvider>
                <SidebarProvider>
                    <Sidebar>
                        <SidebarContent>
                            <Story />{" "}
                        </SidebarContent>
                    </Sidebar>
                </SidebarProvider>
            </AuthProvider>
        ),
    ],
    parameters: {
        layout: "centered",
        nextjs: {
            appDirectory: true,
            navigation: {
                refresh: action("router.refresh"),
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof SignOut>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const signOutButton = canvas.getByRole("button", { name: /sign out/i });
        await expect(signOutButton).toBeInTheDocument();
        await userEvent.click(signOutButton);
    },
};
