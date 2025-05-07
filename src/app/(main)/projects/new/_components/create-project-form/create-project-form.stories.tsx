import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import type { ProjectActionState } from "@/lib/types/project";
import { CreateProjectForm } from "./create-project-form";
import { getDefaultValues } from "./create-project-form.config";

const mockCreateProjectActionFn = async (): Promise<ProjectActionState> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
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
    title: "Main/Components/Create Project Form",
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

    tags: ["autodocs"],
} satisfies Meta<typeof CreateProjectForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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

        await userEvent.type(canvas.getByLabelText(/Contract ID/i), "TEST-123");
        await userEvent.type(
            canvas.getByLabelText(/Contract Name/i),
            "Test Project",
        );
        await userEvent.type(
            canvas.getByLabelText(/Contractor/i),
            "Test Contractor Inc.",
        );
        await userEvent.type(
            canvas.getByLabelText(/Materials Engineer/i),
            "Eng. Test",
        );
        await userEvent.type(
            canvas.getByLabelText(/Contract Cost/i),
            "1000000",
        );

        await userEvent.click(canvas.getByRole("button", { name: /Add/i }));

        await delay(1000);

        await expect(args.action).toHaveBeenCalledTimes(1);
    },
};

export const SubmitValidationError: Story = {
    args: { ...meta.args, defaultValues: getDefaultValues() },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        await userEvent.type(
            canvas.getByLabelText(/Contract Name/i),
            "Test Project",
        );
        await userEvent.type(
            canvas.getByLabelText(/Contractor/i),
            "Test Contractor Inc.",
        );
        await userEvent.type(
            canvas.getByLabelText(/Materials Engineer/i),
            "Eng. Test",
        );

        await userEvent.click(canvas.getByRole("button", { name: /Add/i }));

        await expect(args.action).not.toHaveBeenCalled();

        await expect(
            canvas.getByText(/Contract ID is required/i),
        ).toBeInTheDocument();
    },
};
