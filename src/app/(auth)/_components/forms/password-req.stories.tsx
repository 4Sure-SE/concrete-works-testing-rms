import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import PasswordRequirements from "./password-req";

const meta = {
    title: "Auth/Components/Forms/PasswordRequirements",
    component: PasswordRequirements,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        password: {
            control: "text",
            description: "The password to validate",
        },
    },
} satisfies Meta<typeof PasswordRequirements>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {
        validation: (value: boolean) => {
            return value;
        },
        password: "",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const lengthReq = canvas.getByText(/at least 8 characters/i);
        const uppercaseReq = canvas.getByText(/at least one uppercase letter/i);

        await expect(lengthReq).toHaveClass("text-gray-500");
        await expect(uppercaseReq).toHaveClass("text-gray-500");
    },
};

export const MeetsLengthOnly: Story = {
    args: {
        validation: (value: boolean) => {
            return value;
        },
        password: "password123",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const lengthReq = canvas.getByText(/at least 8 characters/i);
        const uppercaseReq = canvas.getByText(/at least one uppercase letter/i);

        await expect(lengthReq).toHaveClass("text-green-600");
        await expect(uppercaseReq).toHaveClass("text-gray-500");
    },
};

export const MeetsUppercaseOnly: Story = {
    args: {
        validation: (value: boolean) => {
            return value;
        },
        password: "Pass",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const lengthReq = canvas.getByText(/at least 8 characters/i);
        const uppercaseReq = canvas.getByText(/at least one uppercase letter/i);

        await expect(lengthReq).toHaveClass("text-gray-500");
        await expect(uppercaseReq).toHaveClass("text-green-600");
    },
};

export const AllRequirementsMet: Story = {
    args: {
        validation: (value: boolean) => {
            return value;
        },
        password: "Password123",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const lengthReq = canvas.getByText(/at least 8 characters/i);
        const uppercaseReq = canvas.getByText(/at least one uppercase letter/i);

        await expect(lengthReq).toHaveClass("text-green-600");
        await expect(uppercaseReq).toHaveClass("text-green-600");
    },
};
