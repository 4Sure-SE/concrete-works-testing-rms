import { generateProjectShareLink } from "@/server/actions/projects/generate-project-share-link";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { ShareButton } from "./share-button";

vi.mock("@/server/services/project.service", () => ({
    ProjectService: {
        generateShareLink: vi.fn().mockResolvedValue("mocked-share-token-123"),
    },
}));

vi.mock("@/server/actions/projects/generate-project-share-link", () => ({
    generateProjectShareLink: vi.fn().mockResolvedValue({
        success: true,
        data: "https://example.com/mock-share-link",
    }),
}));

const meta = {
    title: "Main/Components/ProjectDetails/Share Button",
    component: ShareButton,
    parameters: {
        layout: "centered",
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
        projectId: "test-project-id-for-share",
    },
} satisfies Meta<typeof ShareButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CopiedState: Story = {
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        const writeTextMock = fn().mockResolvedValue(undefined);
        Object.defineProperty(navigator, "clipboard", {
            value: { writeText: writeTextMock },
            configurable: true,
            writable: true,
        });

        const trigger = await canvas.findByRole("button", { name: /share/i });
        await userEvent.click(trigger);

        await expect(generateProjectShareLink).toHaveBeenCalledTimes(1);

        Object.defineProperty(navigator, "clipboard", {
            value: undefined,
            configurable: true,
            writable: true,
        });

        (generateProjectShareLink as ReturnType<typeof fn>).mockClear();
        writeTextMock.mockClear();
    },
};

export const Default: Story = {
    args: {
        projectId: "default-project-id",
    },
};
