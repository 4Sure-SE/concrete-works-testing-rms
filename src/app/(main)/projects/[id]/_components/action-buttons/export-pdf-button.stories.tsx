import type { Meta, StoryObj } from "@storybook/react";

import { expect, fn, userEvent, within } from "@storybook/test";
import { fakeProjectsData } from "../fake-data";
import { ExportPdfButton } from "./export-pdf-button";

const mockDownloadQCP = fn();
const mockDownloadSOT = fn();

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
    args: {
        project: fakeProjectsData,
        downloadQCP: mockDownloadQCP,
        downloadSOT: mockDownloadSOT,
    },
} satisfies Meta<typeof ExportPdfButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DownloadQCP: Story = {
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        const exportButton = await canvas.findByRole("button", {
            name: /export report/i,
        });
        await userEvent.click(exportButton);

        const qcpItem = await within(document.body).findByText(
            /quality control program/i,
        );
        await userEvent.click(qcpItem);

        await expect(mockDownloadQCP).toHaveBeenCalledTimes(1);
        await expect(mockDownloadQCP).toHaveBeenCalledWith(args.project);
    },
};

export const DownloadSOT: Story = {
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        const exportButton = await canvas.findByRole("button", {
            name: /export report/i,
        });
        await userEvent.click(exportButton);

        const sotItem = await within(document.body).findByText(
            /status of test/i,
        );
        await userEvent.click(sotItem);

        await expect(mockDownloadSOT).toHaveBeenCalledTimes(1);
        await expect(mockDownloadSOT).toHaveBeenCalledWith(args.project);
    },
};
