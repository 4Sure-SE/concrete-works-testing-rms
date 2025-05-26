import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";
import { ForgotPasswordForm } from "./forgot-password-form";

const ForgotPasswordWithError = () => {
    const [state, setState] = useState<{ error?: string }>({});

    const handleAction = async (_formData: FormData) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setState({ error: "Invalid email address provided." });
    };

    return (
        <ForgotPasswordForm
            action={handleAction}
            state={state}
        />
    );
};

const mockAction = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
};

const meta = {
    title: "Auth/Components/Forms/ForgotPasswordForm",
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
        state: {},
    },
    render: () => <ForgotPasswordWithError />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const emailInput = canvas.getByLabelText(/email/i);
        const submitButton = canvas.getByRole("button", {
            name: /send reset link/i,
        });

        await expect(
            canvas.queryByText("Invalid email address provided."),
        ).not.toBeInTheDocument();

        await expect(submitButton).toBeDisabled();
        await userEvent.type(emailInput, "robbaban12@gmail.com", { delay: 50 });
        await delay(200);
        await expect(submitButton).toBeEnabled();

        await userEvent.click(submitButton);

        await waitFor(
            () =>
                expect(
                    canvas.getByText("Invalid email address provided."),
                ).toBeInTheDocument(),
            { timeout: 2000 },
        );
    },
};
