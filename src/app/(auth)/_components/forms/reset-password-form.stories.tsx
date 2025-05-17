import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";
import type { AuthState } from "../types";
import { ResetPasswordForm } from "./reset-password-form";

const mockSubmitSuccess = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
};

const meta = {
    title: "Auth/Components/Forms/ResetPasswordForm",
    component: ResetPasswordForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        isTokenValid: { control: "boolean" },
        state: { control: "object" },
    },
} satisfies Meta<typeof ResetPasswordForm>;

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
    if (args?.isTokenValid === false) {
        await expect(
            canvas.getByText("Invalid Reset Link"),
        ).toBeInTheDocument();
        await expect(
            canvas.getByText(/invalid or has expired/i),
        ).toBeInTheDocument();
        await expect(
            canvas.getByRole("link", { name: /request password reset/i }),
        ).toHaveAttribute("href", "/forgot-password");
        await expect(
            canvas.queryByLabelText(/new password/i),
        ).not.toBeInTheDocument();
        return;
    }
    const newPasswordInput = canvas.getByLabelText(/new password/i);
    const confirmPasswordInput = canvas.getByLabelText(/confirm password/i);
    const submitButton = canvas.getByRole("button", {
        name: /reset password/i,
    });
    await expect(newPasswordInput).toBeInTheDocument();
    await expect(confirmPasswordInput).toBeInTheDocument();
    await expect(submitButton).toBeInTheDocument();
    await userEvent.type(newPasswordInput, "Password123", { delay: 50 });
    await delay(200);
    await userEvent.clear(confirmPasswordInput);
    await delay(200);
    await userEvent.type(confirmPasswordInput, "Password123", { delay: 50 });
    await delay(300);
    await expect(
        canvas.queryByText(/passwords do not match/i),
    ).not.toBeInTheDocument();
    await waitFor(
        () => {
            void expect(
                canvas.getByText("\u2022 At least 8 characters"),
            ).toHaveClass("text-green-600");
            void expect(
                canvas.getByText("\u2022 At least one uppercase letter"),
            ).toHaveClass("text-green-600");
        },
        { timeout: 1000 },
    );
    await waitFor(() => expect(submitButton).toBeEnabled(), { timeout: 2000 });
    await userEvent.click(submitButton);
    await delay(100);

    await waitFor(() => expect(submitButton).toBeEnabled(), { timeout: 2000 });
};

export const ValidToken: Story = {
    args: {
        isTokenValid: true,
        state: {},
        onSubmit: mockSubmitSuccess,
    },
    play: basePlayFunction,
};

export const ValidTokenWithError: Story = {
    args: {
        isTokenValid: true,
        state: {},
        onSubmit: mockSubmitSuccess,
    },
    render: () => <ResetPasswordWithError />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const newPasswordInput = canvas.getByLabelText(/new password/i);
        const confirmPasswordInput = canvas.getByLabelText(/confirm password/i);
        const submitButton = canvas.getByRole("button", {
            name: /reset password/i,
        });

        await expect(canvas.queryByRole("alert")).not.toBeInTheDocument();

        await userEvent.type(newPasswordInput, "Password123", { delay: 50 });
        await delay(200);
        await userEvent.type(confirmPasswordInput, "Password123", {
            delay: 50,
        });
        await delay(300);

        await expect(
            canvas.queryByText(/passwords do not match/i),
        ).not.toBeInTheDocument();
        await waitFor(
            () => {
                void expect(
                    canvas.getByText("\u2022 At least 8 characters"),
                ).toHaveClass("text-green-600");
                void expect(
                    canvas.getByText("\u2022 At least one uppercase letter"),
                ).toHaveClass("text-green-600");
            },
            { timeout: 1000 },
        );

        await waitFor(() => expect(submitButton).toBeEnabled(), {
            timeout: 2000,
        });
        await userEvent.click(submitButton);

        await waitFor(
            () =>
                expect(
                    canvas.getByText(
                        "An unexpected error occurred. Please try again.",
                    ),
                ).toBeInTheDocument(),
            { timeout: 2000 },
        );
        await expect(canvas.getByRole("alert")).toBeInTheDocument();
    },
};

export const InvalidToken: Story = {
    args: {
        isTokenValid: false,
        state: { error: "Invalid or expired token provided." },
        onSubmit: mockSubmitSuccess,
    },
    play: async ({ canvasElement, args }) => {
        await basePlayFunction({ canvasElement, args });
        const canvas = within(canvasElement);
        await expect(canvas.getByRole("alert")).toBeInTheDocument();
        await expect(
            canvas.getByText("Invalid or expired token provided."),
        ).toBeInTheDocument();
    },
};

export const SameAsOldPasswordError: Story = {
    args: {
        isTokenValid: true,
        state: {},
        onSubmit: mockSubmitSuccess,
    },
    render: () => <ResetPasswordWithSamePasswordError />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const newPasswordInput = canvas.getByLabelText(/new password/i);
        const confirmPasswordInput = canvas.getByLabelText(/confirm password/i);
        const submitButton = canvas.getByRole("button", {
            name: /reset password/i,
        });

        await expect(canvas.queryByRole("alert")).not.toBeInTheDocument();

        await userEvent.type(newPasswordInput, "OldPassword123", { delay: 50 });
        await delay(200);
        await userEvent.type(confirmPasswordInput, "OldPassword123", {
            delay: 50,
        });
        await delay(300);

        await waitFor(
            () => {
                void expect(
                    canvas.getByText("\u2022 At least 8 characters"),
                ).toHaveClass("text-green-600");
                void expect(
                    canvas.getByText("\u2022 At least one uppercase letter"),
                ).toHaveClass("text-green-600");
            },
            { timeout: 1000 },
        );

        await waitFor(() => expect(submitButton).toBeEnabled(), {
            timeout: 2000,
        });
        await userEvent.click(submitButton);

        await waitFor(
            () =>
                expect(
                    canvas.getByText(
                        "New password cannot be the same as your old password.",
                    ),
                ).toBeInTheDocument(),
            { timeout: 2000 },
        );
        await expect(canvas.getByRole("alert")).toBeInTheDocument();
    },
};

const ResetPasswordWithError = () => {
    const [state, setState] = useState<AuthState>({});

    const handleSubmit = async (_formData: FormData) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setState({ error: "An unexpected error occurred. Please try again." });
    };

    return (
        <ResetPasswordForm
            isTokenValid={true}
            state={state}
            onSubmit={handleSubmit}
        />
    );
};

const ResetPasswordWithSamePasswordError = () => {
    const [state, setState] = useState<AuthState>({});

    const handleSubmit = async (_formData: FormData) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setState({
            error: "New password cannot be the same as your old password.",
        });
    };

    return (
        <ResetPasswordForm
            isTokenValid={true}
            state={state}
            onSubmit={handleSubmit}
        />
    );
};
