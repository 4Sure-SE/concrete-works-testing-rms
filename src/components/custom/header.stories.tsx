import type { Meta, StoryFn } from "@storybook/react";
import { SidebarProvider } from "../ui/sidebar";
import Header, { type HeaderProps } from "./header";

const meta: Meta<typeof Header> = {
    title: "Components/Custom/Header",
    component: Header,
};

export default meta;

const Template: StoryFn<HeaderProps> = ({ title, withSidebarTrigger }) => {
    return (
        <div className="w-full">
            <SidebarProvider>
                <Header
                    title={title}
                    withSidebarTrigger={withSidebarTrigger}
                />
            </SidebarProvider>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = { title: "Header Title", withSidebarTrigger: true };

export const EmptyTitle = Template.bind({});
EmptyTitle.args = { title: "", withSidebarTrigger: true };

export const NoSideBarTrigger = Template.bind({});
NoSideBarTrigger.args = { title: "Header", withSidebarTrigger: false };
