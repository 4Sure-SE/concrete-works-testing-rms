import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import { RefreshProvider } from "@/app/(main)/_contexts/refresh-context";
import { Toaster } from "@/components/ui/sonner";
import {
    fakeProjectWorkItem,
    fakeProjectWorkItems,
} from "@/lib/stubs/work-item.stub";
import type { ProjectWorkItemActionState } from "@/lib/types/project-work-item/project-work-item.types";
import { ProjectWorkItemsTable } from "./project-work-items-table";

const mockDeleteProjectWorkItemActionFn =
    async (): Promise<ProjectWorkItemActionState> => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return {
            success: true,
            data: fakeProjectWorkItem,
        };
    };

const mockEditProjectWorkItemActionFn =
    async (): Promise<ProjectWorkItemActionState> => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return {
            success: true,
            data: fakeProjectWorkItem,
        };
    };

const mockDeleteProjectWorkItemAction = fn(mockDeleteProjectWorkItemActionFn);
const mockEditProjectWorkItemAction = fn(mockEditProjectWorkItemActionFn);

const meta = {
    title: "Main/Components/Project Work Items Table",
    component: ProjectWorkItemsTable,
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
    args: {
        projectId: "test-project-id",
        data: fakeProjectWorkItems,
        onDeleteAction: mockDeleteProjectWorkItemAction,
        onEditAction: mockEditProjectWorkItemAction,
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
} satisfies Meta<typeof ProjectWorkItemsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Default: Story = {
    args: meta.args,
};

export const EmptyTable: Story = {
    args: {
        ...meta.args,
        data: [],
    },
};

export const OnClickEdit: Story = {
    args: meta.args,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const editButtons = canvas.getAllByLabelText(/Edit quantity/i);
        await userEvent.click(editButtons[0]!);

        const quantityInput = canvas.getByDisplayValue(/150.5/);
        await expect(quantityInput).toBeInTheDocument();

        await userEvent.clear(quantityInput);
        await userEvent.type(quantityInput, "200.75");

        await expect(
            canvas.getByLabelText(/Save quantity/i),
        ).toBeInTheDocument();
        await expect(canvas.getByLabelText(/Cancel edit/i)).toBeInTheDocument();
    },
};

export const OnSaveEdit: Story = {
    args: meta.args,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const editButtons = canvas.getAllByLabelText(/Edit quantity/i);
        await userEvent.click(editButtons[0]!);

        const quantityInput = canvas.getByDisplayValue(/150.5/);
        await userEvent.clear(quantityInput);
        await userEvent.type(quantityInput, "175.25");

        const saveButton = canvas.getByLabelText(/Save quantity/i);
        await userEvent.click(saveButton);

        await expect(canvas.getByLabelText(/Save quantity/i)).toBeDisabled();
    },
};

export const WithError: Story = {
    args: meta.args,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const editButtons = canvas.getAllByLabelText(/Edit quantity/i);
        await userEvent.click(editButtons[0]!);

        const quantityInput = canvas.getByDisplayValue(/150.5/);
        await userEvent.clear(quantityInput);
        await userEvent.type(quantityInput, "-50");

        const saveButton = canvas.getByLabelText(/Save quantity/i);
        await userEvent.click(saveButton);

        // should show validation error
        await expect(
            canvas.getByText(/Quantity must be a positive number/i),
        ).toBeInTheDocument();
    },
};
