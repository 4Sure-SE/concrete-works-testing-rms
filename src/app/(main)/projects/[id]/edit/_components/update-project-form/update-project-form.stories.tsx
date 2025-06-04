import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import { Toaster } from "@/components/ui/sonner";
import { updateProjectTestData } from "@/lib/stubs/form-data.stub";
import { fakeProjectDTO } from "@/lib/stubs/project.stub";
import type { ProjectActionState } from "@/lib/types/project";
import { UpdateProjectForm } from "./update-project-form";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockUpdateProjectActionFn = async (): Promise<ProjectActionState> => {
    await delay(500);
    return {
        success: true,
        data: fakeProjectDTO,
    };
};

const mockUpdateProjectAction = fn(mockUpdateProjectActionFn);

const meta = {
    title: "Main/Components/UpdateProjectForm",
    component: UpdateProjectForm,
    parameters: {
        layout: "centered",
        nextjs: {
            appDirectory: true,
        },
    },
    args: {
        projectId: fakeProjectDTO.id,
        action: mockUpdateProjectAction,
    },
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div>
                <Story />
                <Toaster richColors />
            </div>
        ),
    ],
} satisfies Meta<typeof UpdateProjectForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...meta.args,
        defaultValues: updateProjectTestData.complete,
    },
};

export const ValidInput: Story = {
    args: {
        ...meta.args,
        defaultValues: updateProjectTestData.complete,
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        const contractNameInput = canvas.getByLabelText(/Contract Name/i);
        await userEvent.clear(contractNameInput);
        await userEvent.type(contractNameInput, "Updated Contract Name");
        const contractorInput = canvas.getByLabelText(/Contractor/i);
        await userEvent.clear(contractorInput);
        await userEvent.type(contractorInput, "Updated Contractor Inc.");

        await userEvent.click(canvas.getByRole("button", { name: /Update/i }));

        await delay(1000);

        await expect(args.action).toHaveBeenCalledTimes(1);
    },
};

export const WithError: Story = {
    args: {
        ...meta.args,
        defaultValues: updateProjectTestData.complete,
        action: fn(async (): Promise<ProjectActionState> => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            return {
                success: false,
                error: {
                    contractId: ["Contract ID must be unique"],
                },
            };
        }),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const contractIdInput = canvas.getByLabelText(/Contract ID/i);
        await userEvent.clear(contractIdInput);
        await userEvent.type(contractIdInput, "DUPLICATE-ID");

        await userEvent.click(canvas.getByRole("button", { name: /Update/i }));

        await delay(1000);
    },
};
