import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { LoginForm } from "./login-form";

const mockActionSuccess = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
};

const mockActionEmailError = async (): Promise<{
    error?: string | null;
    field?: string;
}> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { error: "No account found with this email.", field: "email" };
};

const meta = {
    title: "Auth/Forms/LoginForm",
    component: LoginForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const basePlayFunction = async ({
    canvasElement,
}: {
    canvasElement: HTMLElement;
    args: Story["args"];
}) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText(/email/i);
    const passwordInput = canvas.getByLabelText(/password/i);
    const submitButton = canvas.getByRole("button", { name: /log in/i });
    const forgotPasswordLink = canvas.getByRole("link", {
        name: /forgot password\?/i,
    });
    await expect(emailInput).toBeInTheDocument();
    await expect(passwordInput).toBeInTheDocument();
    await expect(submitButton).toBeInTheDocument();
    await expect(forgotPasswordLink).toBeInTheDocument();
    await expect(forgotPasswordLink).toHaveAttribute(
        "href",
        "/forgot-password",
    );
    await expect(submitButton).toBeEnabled();
    await userEvent.type(emailInput, "ashton@gmail.com", { delay: 50 });
    await delay(200);
    await userEvent.type(passwordInput, "password123", { delay: 50 });
    await delay(200);
    await expect(emailInput).toHaveValue("ashton@gmail.com");
    await expect(passwordInput).toHaveValue("password123");
    await userEvent.click(submitButton);
    await delay(100);
    await waitFor(() => expect(submitButton).toBeEnabled(), { timeout: 2000 });
};

export const Default: Story = {
    args: {
        action: mockActionSuccess,
    },
    play: async ({ canvasElement, args }) => {
        await basePlayFunction({ canvasElement, args });
        const canvas = within(canvasElement);
        await expect(canvas.queryByRole("alert")).not.toBeInTheDocument();
    },
};

export const WithEmailError: Story = {
    args: {
        action: mockActionEmailError,
    },
    play: async ({ canvasElement, args }) => {
        await basePlayFunction({ canvasElement, args });
        const canvas = within(canvasElement);
        await expect(
            canvas.getByText("No account found with this email."),
        ).toBeInTheDocument();
    },
};
