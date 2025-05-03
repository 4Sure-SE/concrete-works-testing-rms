import type { Meta, StoryObj } from "@storybook/react";
import { expect, screen, userEvent, within } from "@storybook/test";
import { fakeProjectsData } from "../fake-data";
import { ExportPdfButton } from "./export-pdf-button";
const meta = {
    title: "Main/Components/ProjectDetails/Export Pdf Button",
    component: ExportPdfButton,
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (StoryEl) => (
            <div className="flex h-screen items-center justify-center">
                <StoryEl />
            </div>
        ),
    ],
    tags: ["autodocs"],
} satisfies Meta<typeof ExportPdfButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const DownloadQCP: Story = {
    args: {
        project: fakeProjectsData,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(1000);

        const exportButton = await canvas.findByRole("button", {
            name: /export report/i,
        });
        await userEvent.click(exportButton);
        await sleep(1000);

        const qcpItem = await screen.findByText(/quality control program/i);
        await userEvent.click(qcpItem);
        await sleep(1000);

        await expect(
            screen.findByText(/quality control program/i),
        ).resolves.toBeInTheDocument();

        await sleep(1000);
    },
};

export const DownloadSOT: Story = {
    args: {
        project: fakeProjectsData,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(1000);

        const exportButton = await canvas.findByRole("button", {
            name: /export report/i,
        });
        await userEvent.click(exportButton);
        await sleep(1000);

        const sotItem = await screen.findByText(/status of test/i);
        await userEvent.click(sotItem);
        await sleep(1000);

        await expect(
            screen.findByText(/status of test/i),
        ).resolves.toBeInTheDocument();

        await sleep(1000);
    },
};
