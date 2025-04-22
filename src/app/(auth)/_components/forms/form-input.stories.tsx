import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Lock, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { FormInput } from "./form-input";

const meta = {
    title: "Auth/Forms/FormInput",
    component: FormInput,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        label: { control: "text" },
        type: { control: "select", options: ["text", "email", "password"] },
        placeholder: { control: "text" },
        value: { control: "text" },
        required: { control: "boolean" },
        Icon: { control: false },
        error: { control: "boolean" },
        errorMessage: { control: "text" },
        onChange: { action: "changed" },
    },
    decorators: [
        (Story, context) => {
            const [value, setValue] = useState(context.args.value ?? "");
            const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                setValue(e.target.value);
                context.args.onChange?.(e);
            };
            useEffect(() => {
                setValue(context.args.value ?? "");
            }, [context.args.value]);
            return (
                <Story
                    args={{ ...context.args, value, onChange: handleChange }}
                />
            );
        },
    ],
} satisfies Meta<typeof FormInput>;

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
    const inputElement = canvas.getByLabelText(args?.label ?? "");
    await expect(inputElement).toBeInTheDocument();
    await userEvent.type(inputElement, "test input");
    await expect(inputElement).toHaveValue("test input");
    if (args?.error) {
        await expect(inputElement).toHaveAttribute("aria-invalid", "true");
        if (args.errorMessage) {
            await expect(
                canvas.getByText(args.errorMessage),
            ).toBeInTheDocument();
            await expect(canvas.getByRole("alert")).toBeInTheDocument();
        }
    } else {
        await expect(inputElement).not.toHaveAttribute("aria-invalid");
        await expect(canvas.queryByRole("alert")).not.toBeInTheDocument();
    }
};

export const Email: Story = {
    args: {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "enter your email",
        Icon: Mail,
        required: true,
        error: false,
    },
    play: basePlayFunction,
};

export const Password: Story = {
    args: {
        id: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        Icon: Lock,
        required: true,
        error: false,
    },
    play: basePlayFunction,
};

export const WithError: Story = {
    args: {
        id: "email-error",
        label: "Email Address",
        type: "email",
        placeholder: "your.email@example.com",
        Icon: Mail,
        required: true,
        error: true,
        errorMessage: "Invalid email address.",
    },
    play: basePlayFunction,
};
