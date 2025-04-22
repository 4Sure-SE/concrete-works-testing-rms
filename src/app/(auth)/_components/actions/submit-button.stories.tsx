import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import type { AuthFormMode } from "../types";
import { SubmitButton } from "./submit-button";

const meta = {
    title: "Auth/Actions/SubmitButton",
    component: SubmitButton,
    decorators: [
        (Story) => (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <Story />
            </form>
        ),
    ],
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        mode: {
            control: "select",
            options: ["login", "signup", "reset-request", "reset-password"],
        },
        isDisabled: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const basePlayFunction = async ({
    canvasElement,
    args,
}: {
    canvasElement: HTMLElement;
    args: Story["args"];
}) => {
    const canvas = within(canvasElement);
    const buttonTextMap: Record<AuthFormMode, string> = {
        login: "Log In",
        signup: "Sign Up",
        "reset-request": "Send Reset Link",
        "reset-password": "Reset Password",
    };
    const expectedText = buttonTextMap[args?.mode ?? "login"];
    const submitButton = canvas.getByRole("button", { name: expectedText });

    await expect(submitButton).toBeInTheDocument();
    if (args?.isDisabled) {
        await expect(submitButton).toBeDisabled();
    } else {
        await expect(submitButton).toBeEnabled();
        await userEvent.click(submitButton);
    }
};

export const LogIn: Story = {
    args: {
        mode: "login",
        isDisabled: false,
    },
    play: basePlayFunction,
};

export const SignUp: Story = {
    args: {
        mode: "signup",
        isDisabled: false,
    },
    play: basePlayFunction,
};

export const ResetRequest: Story = {
    args: {
        mode: "reset-request",
        isDisabled: false,
    },
    play: basePlayFunction,
};

export const ResetPassword: Story = {
    args: {
        mode: "reset-password",
        isDisabled: false,
    },
    play: basePlayFunction,
};

export const Disabled: Story = {
    args: {
        mode: "login",
        isDisabled: true,
    },
    play: basePlayFunction,
};
