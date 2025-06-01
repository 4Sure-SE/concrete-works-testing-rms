import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { fn } from "@storybook/test";
import { DateRangeFilter } from "./date-filter";

const meta: Meta<typeof DateRangeFilter> = {
    title: "Main/Components/DateRangeFilter",
    component: DateRangeFilter,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        startDateValue: {
            control: { type: "text" },
            description: "Start date value (YYYY-MM-DD format)",
        },
        endDateValue: {
            control: { type: "text" },
            description: "End date value (YYYY-MM-DD format)",
        },
        isPending: {
            control: { type: "boolean" },
            description: "Loading state",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        startDateValue: "",
        endDateValue: "",
        isPending: false,
        onDateChange: fn(),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Check if labels are present
        await expect(canvas.getByText("STARTED FROM")).toBeInTheDocument();
        await expect(canvas.getByText("TO")).toBeInTheDocument();

        // Check if date inputs are present
        const startDateInput = canvas.getAllByDisplayValue("")[0];
        const endDateInput = canvas.getAllByDisplayValue("")[1];

        await expect(startDateInput).toBeInTheDocument();
        await expect(endDateInput).toBeInTheDocument();
    },
};

export const WithDates: Story = {
    args: {
        startDateValue: "2024-01-01",
        endDateValue: "2024-12-31",
        isPending: false,
        onDateChange: fn(),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Check if date values are displayed
        await expect(
            canvas.getByDisplayValue("2024-01-01"),
        ).toBeInTheDocument();
        await expect(
            canvas.getByDisplayValue("2024-12-31"),
        ).toBeInTheDocument();
    },
};

export const Loading: Story = {
    args: {
        startDateValue: "2024-01-01",
        endDateValue: "2024-12-31",
        isPending: true,
        onDateChange: fn(),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Check if inputs are disabled when loading
        const startDateInput = canvas.getByDisplayValue("2024-01-01");
        const endDateInput = canvas.getByDisplayValue("2024-12-31");

        await expect(startDateInput).toBeDisabled();
        await expect(endDateInput).toBeDisabled();
    },
};
