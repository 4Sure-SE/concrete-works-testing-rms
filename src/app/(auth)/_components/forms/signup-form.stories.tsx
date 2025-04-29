import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { SignupForm } from "./signup-form";

const mockActionSuccess = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
};

const mockActionEmailError = async (): Promise<{
    error?: string | null;
    field?: string;
}> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { error: "Email already in use.", field: "email" };
};

const meta = {
    title: "Auth/Components/Forms/SignupForm",
    component: SignupForm,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const basePlay = async ({
    canvasElement,
}: {
    canvasElement: HTMLElement;
    args: Story["args"];
}) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByLabelText(/full name/i);
    const emailInput = canvas.getByLabelText(/email/i);
    const passwordInput = canvas.getByLabelText(/^password$/i);
    const confirmInput = canvas.getByLabelText(/confirm password/i);
    const submit = canvas.getByRole("button", { name: /sign up/i });
    await expect(nameInput).toBeInTheDocument();
    await expect(emailInput).toBeInTheDocument();
    await expect(passwordInput).toBeInTheDocument();
    await expect(confirmInput).toBeInTheDocument();
    await expect(submit).toBeInTheDocument();
    await userEvent.type(nameInput, "Rob Sadavi", { delay: 50 });
    await delay(200);
    await userEvent.type(emailInput, "robsadavi@gmail.com", { delay: 50 });
    await delay(200);
    await userEvent.type(passwordInput, "Password123!", { delay: 50 });
    await delay(200);
    await userEvent.type(confirmInput, "Password123!", { delay: 50 });
    await delay(300);
    await waitFor(() => expect(submit).toBeEnabled(), { timeout: 2000 });
    await userEvent.click(submit);
    await delay(100);
    await waitFor(() => expect(submit).toBeEnabled(), { timeout: 2000 });
};

export const Default: Story = {
    args: { action: mockActionSuccess },
    play: basePlay,
};

export const WithEmailError: Story = {
    args: {
        action: mockActionEmailError,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const nameInput = canvas.getByLabelText(/full name/i);
        const emailInput = canvas.getByLabelText(/email/i);
        const passwordInput = canvas.getByLabelText(/^password$/i);
        const confirmInput = canvas.getByLabelText(/confirm password/i);
        const submit = canvas.getByRole("button", { name: /sign up/i });
        await userEvent.type(nameInput, "Franz Jose", { delay: 50 });
        await delay(200);
        await userEvent.type(emailInput, "joseahron@gmail.com", { delay: 50 });
        await delay(200);
        await userEvent.type(passwordInput, "Password123!", { delay: 50 });
        await delay(200);
        await userEvent.type(confirmInput, "Password123!", { delay: 50 });
        await delay(300);
        await waitFor(() => expect(submit).toBeEnabled(), { timeout: 2000 });
        await userEvent.click(submit);
        await delay(100);
        await waitFor(
            () =>
                expect(
                    canvas.getByText("Email already in use."),
                ).toBeInTheDocument(),
            { timeout: 2000 },
        );
    },
};
