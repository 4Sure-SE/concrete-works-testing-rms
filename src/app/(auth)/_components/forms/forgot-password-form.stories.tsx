import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { ForgotPasswordForm } from "./forgot-password-form";

const mockAction = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
};

const meta = {
    title: "Auth/Forms/ForgotPasswordForm",
    component: ForgotPasswordForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        state: { control: "object" },
    },
} satisfies Meta<typeof ForgotPasswordForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const basePlayFunction = async ({
    canvasElement,
    args,
}: {
    canvasElement: HTMLElement;
    args: Story["args"];
}) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText(/email/i);
    const submitButton = canvas.getByRole("button", {
        name: /send reset link/i,
    });
    await expect(submitButton).toBeDisabled();
    await userEvent.type(emailInput, "robbaban12@gmail.com", { delay: 50 });
    await delay(200);
    await expect(submitButton).toBeEnabled();
    await userEvent.click(submitButton);
    await delay(100);
    await waitFor(() => expect(submitButton).toBeEnabled(), { timeout: 2000 });
    if (args?.state?.error) {
        await expect(canvas.getByText(args.state.error)).toBeInTheDocument();
    } else {
        await expect(canvas.queryByRole("alert")).not.toBeInTheDocument();
    }
};

export const Default: Story = {
    args: {
        action: mockAction,
        state: {},
    },
    play: basePlayFunction,
};

export const WithError: Story = {
    args: {
        action: mockAction,
        state: { error: "Invalid email address provided." },
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        await basePlayFunction({ canvasElement, args });
        await expect(
            canvas.getByText("Invalid email address provided."),
        ).toBeInTheDocument();
    },
};
