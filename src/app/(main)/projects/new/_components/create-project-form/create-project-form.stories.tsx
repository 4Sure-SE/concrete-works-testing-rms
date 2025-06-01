import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import { Toaster } from "@/components/ui/sonner";
import type { ProjectActionState } from "@/lib/types/project";
import { CreateProjectForm } from "./create-project-form";
import { getDefaultValues } from "./create-project-form.config";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockCreateProjectActionFn = async (): Promise<ProjectActionState> => {
    await delay(500);
    return {
        success: true,
        data: {
            id: "new-project-id",
            contractId: "TEST-123",
            contractName: "Test Project",
            contractor: "Test Contractor Inc.",
            location: "Iloilo",
            dateStarted: new Date(),
            materialsEngineer: "Eng. Test",
            limits: "Test limits",
            contractCost: 1000000,
            token: null,
        },
    };
};

const mockCreateProjectAction = fn(mockCreateProjectActionFn);

const meta = {
    title: "Main/Components/CreateProjectForm",
    component: CreateProjectForm,
    parameters: {
        layout: "centered",
        nextjs: {
            appDirectory: true,
        },
    },
    args: {
        action: mockCreateProjectAction,
    },
    decorators: [
        (Story) => (
            <div>
                <Story />
                <Toaster richColors />
            </div>
        ),
    ],

    tags: ["autodocs"],
} satisfies Meta<typeof CreateProjectForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...meta.args,
        defaultValues: getDefaultValues(),
    },
};

export const ValidInput: Story = {
    args: { ...meta.args, defaultValues: getDefaultValues() },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        await userEvent.clear(canvas.getByLabelText(/Contract ID/i));
        await userEvent.type(canvas.getByLabelText(/Contract ID/i), "TEST-123");

        await userEvent.clear(canvas.getByLabelText(/Contract Name/i));
        await userEvent.type(
            canvas.getByLabelText(/Contract Name/i),
            "Test Project",
        );

        await userEvent.clear(canvas.getByLabelText(/Contractor/i));
        await userEvent.type(
            canvas.getByLabelText(/Contractor/i),
            "Test Contractor Inc.",
        );

        await userEvent.clear(canvas.getByLabelText(/Materials Engineer/i));
        await userEvent.type(
            canvas.getByLabelText(/Materials Engineer/i),
            "Eng. Test",
        );

        await userEvent.clear(canvas.getByLabelText(/Contract Cost/i));
        await userEvent.type(
            canvas.getByLabelText(/Contract Cost/i),
            "1000000",
        );

        await userEvent.click(canvas.getByRole("button", { name: /Add/i }));

        await delay(1000);

        await expect(args.action).toHaveBeenCalledTimes(1);
    },
};

export const WithError: Story = {
    args: {
        ...meta.args,
        defaultValues: getDefaultValues(),
        action: fn(async (): Promise<ProjectActionState> => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            return {
                success: false,
                error: {
                    general: ["Something went wrong on the server"],
                    contractId: ["Contract ID already exists"],
                },
            };
        }),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.type(
            canvas.getByLabelText(/Contract ID/i),
            "DUPLICATE-123",
        );
        await userEvent.type(
            canvas.getByLabelText(/Contract Name/i),
            "Test Project",
        );
        await userEvent.type(
            canvas.getByLabelText(/Contractor/i),
            "Test Contractor",
        );
        await userEvent.type(
            canvas.getByLabelText(/Materials Engineer/i),
            "Test Engineer",
        );

        await userEvent.click(canvas.getByRole("button", { name: /Add/i }));

        await canvas.findByText("Contract Cost must be a positive number");
    },
};
