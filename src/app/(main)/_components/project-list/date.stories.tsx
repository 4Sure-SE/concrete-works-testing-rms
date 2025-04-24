import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { DateRangeFilter } from "./date";

const meta = {
    title: "Main/Components/DateRangeFilter",
    component: DateRangeFilter,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof DateRangeFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {
        startDate: "",
        endDate: "",
        onStartDateChange: () => {
            /*empty for story */
        },
        onEndDateChange: () => {
            /*empty for story */
        },
    },
};

export const DateSelection: Story = {
    args: {
        startDate: "",
        endDate: "",
        onStartDateChange: (date) => console.log("Start date changed:", date),
        onEndDateChange: (date) => console.log("End date changed:", date),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Find the first input by its label text "FROM"
        const fromLabel = canvas.getByText("FROM");
        const startDateInput = fromLabel.nextElementSibling;

        if (startDateInput instanceof HTMLInputElement) {
            await userEvent.type(startDateInput, "2025-03-15");
        }
    },
};

export const ResetDates: Story = {
    args: {
        startDate: "2025-02-25",
        endDate: "2025-04-02",
        onStartDateChange: (date) => console.log("Start date changed:", date),
        onEndDateChange: (date) => console.log("End date changed:", date),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Find inputs by their labels
        const fromLabel = canvas.getByText("FROM");
        const toLabel = canvas.getByText("TO");

        const startDateInput = fromLabel.nextElementSibling;
        const endDateInput = toLabel.nextElementSibling;

        if (
            startDateInput instanceof HTMLInputElement &&
            endDateInput instanceof HTMLInputElement
        ) {
            await userEvent.clear(startDateInput);
            await userEvent.clear(endDateInput);
        }
    },
};
