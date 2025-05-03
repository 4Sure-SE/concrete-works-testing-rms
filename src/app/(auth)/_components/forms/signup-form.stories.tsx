import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";
import { SignupForm } from "./signup-form";

type ActionResult = void | { error?: string | null; field?: string };

const mockActionSuccessFn = async (
    _formData: FormData,
): Promise<ActionResult> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
};

const mockActionEmailErrorFn = async (
    _formData: FormData,
): Promise<ActionResult> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { error: "Email already in use.", field: "email" };
};

const mockActionSuccess = fn(mockActionSuccessFn);
const mockActionEmailError = fn(mockActionEmailErrorFn);

const meta = {
    title: "Auth/Components/Forms/SignupForm",
    component: SignupForm,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    decorators: [
        (Story) => {
            mockActionSuccess.mockClear();
            mockActionEmailError.mockClear();
            return <Story />;
        },
    ],
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        action: mockActionSuccess,
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const submitButton = canvas.getByRole("button", { name: /sign up/i });

        const nameInput = canvas.getByLabelText(/full name/i);
        const emailInput = canvas.getByLabelText(/email/i);
        const passwordInput = canvas.getByLabelText(/^password$/i);
        const confirmInput = canvas.getByLabelText(/confirm password/i);

        await userEvent.type(nameInput, "Test User", { delay: 10 });
        await userEvent.type(emailInput, "test@example.com", { delay: 10 });
        await userEvent.type(passwordInput, "Password123!", { delay: 10 });

        await userEvent.type(confirmInput, "Password123!", { delay: 10 });

        await userEvent.click(submitButton);

        await expect(submitButton).toBeDisabled();

        await waitFor(() => expect(args.action).toHaveBeenCalledTimes(1));

        await expect(
            canvas.queryByText("Email already in use."),
        ).not.toBeInTheDocument();
    },
};

export const WithEmailError: Story = {
    args: {
        action: mockActionEmailError,
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const submitButton = canvas.getByRole("button", { name: /sign up/i });

        const nameInput = canvas.getByLabelText(/full name/i);
        const emailInput = canvas.getByLabelText(/email/i);
        const passwordInput = canvas.getByLabelText(/^password$/i);
        const confirmInput = canvas.getByLabelText(/confirm password/i);

        await userEvent.type(nameInput, "Test User", { delay: 10 });
        await userEvent.type(emailInput, "test@example.com", { delay: 10 });
        await userEvent.type(passwordInput, "Password123!", { delay: 10 });

        await userEvent.type(confirmInput, "Password123!", { delay: 10 });

        await waitFor(() => expect(submitButton).toBeEnabled());

        await userEvent.click(submitButton);

        await expect(submitButton).toBeDisabled();

        await waitFor(() => expect(args.action).toHaveBeenCalledTimes(1));

        await expect(
            await canvas.findByText("Email already in use."),
        ).toBeInTheDocument();
    },
};

export const PasswordMismatch: Story = {
    args: {
        action: mockActionSuccess,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const passwordInput = canvas.getByLabelText(/^password$/i);
        const confirmInput = canvas.getByLabelText(/confirm password/i);
        const submitButton = canvas.getByRole("button", { name: /sign up/i });

        await userEvent.type(passwordInput, "Password123!", { delay: 10 });
        await userEvent.type(confirmInput, "PasswordDifferent", { delay: 10 });

        await expect(
            await canvas.findByText("Passwords do not match"),
        ).toBeInTheDocument();
        await expect(submitButton).toBeDisabled();
    },
};
