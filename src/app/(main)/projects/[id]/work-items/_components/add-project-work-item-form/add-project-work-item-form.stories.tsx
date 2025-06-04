import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import { RefreshProvider } from "@/app/(main)/_contexts/refresh-context";
import { Toaster } from "@/components/ui/sonner";
import {
    fakeProjectWorkItem,
    fakeWorkItemDefinitions,
} from "@/lib/stubs/work-item.stub";
import type { ProjectWorkItemActionState } from "@/lib/types/work-item";
import { AddProjectWorkItemForm } from "./add-project-work-item-form";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockCreateProjectWorkItemActionFn =
    async (): Promise<ProjectWorkItemActionState> => {
        await delay(500);
        return {
            success: true,
            data: fakeProjectWorkItem,
        };
    };

const mockCreateProjectWorkItemAction = fn(mockCreateProjectWorkItemActionFn);

const meta = {
    title: "Main/Components/AddProjectWorkItemForm",
    component: AddProjectWorkItemForm,
    parameters: {
        layout: "centered",
        nextjs: {
            appDirectory: true,
        },
    },
    args: {
        action: mockCreateProjectWorkItemAction,
        projectId: "test-project-id",
        workItemDefinitions: fakeWorkItemDefinitions,
    },
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <RefreshProvider>
                <Story />
                <Toaster richColors />
            </RefreshProvider>
        ),
    ],
} satisfies Meta<typeof AddProjectWorkItemForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: meta.args,
};

export const ValidInput: Story = {
    args: meta.args,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const workItemSelect = canvas.getByRole("combobox");
        await userEvent.click(workItemSelect, {
            delay: 250,
        });

        // hacky stuff here bcs radix ui stuff
        await delay(100);
        const select = canvas.getAllByText(
            /Item 311 - Portland Cement Concrete Pavement/,
        );
        await userEvent.click(select[1]!, { delay: 250 });

        const quantityInput = canvas.getByPlaceholderText(/Enter quantity/i);
        await userEvent.clear(quantityInput);
        await userEvent.type(quantityInput, "150.5", { delay: 100 });

        await userEvent.click(canvas.getByRole("button", { name: /Add/i }));

        await delay(1000);
    },
};

export const WithError: Story = {
    args: meta.args,
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        await userEvent.click(canvas.getByRole("button", { name: /Add/i }));

        await expect(args.action).not.toHaveBeenCalled();

        await expect(
            canvas.getByText(/Invalid Work Item ID/i),
        ).toBeInTheDocument();
    },
};
