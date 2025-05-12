import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Toaster } from "sonner";

import {
    fakeEmptyProjectDetails,
    fakeProjectsData,
} from "@/app/(main)/projects/[id]/_components/fake-data";
import { ProjectWorkItemsTable } from "@/app/(main)/projects/[id]/_components/table/table";
import type { Projects } from "@/lib/types/project";

vi.mock("@/server/services/project.service", () => ({
    ProjectService: {
        updateProjectWorkItemsTestCount: fn().mockImplementation(async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            return {
                id: "test-id",
                createdAt: new Date(),
                projectWorkItemId: "edwq",
                testId: "asd",
                onFile: 12,
            };
        }),
        updateProjectMaterialTestCount: fn().mockImplementation(async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            return {
                id: "test-id",
                createdAt: new Date(),
                projectMaterialId: "edwq",
                testId: "asd",
                onFile: 12,
            };
        }),
    },
}));

const meta = {
    title: "Main/Components/ProjectDetails/ProjectWorkItemsTable",
    component: ProjectWorkItemsTable,
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-gray-50 p-4">
                <Toaster
                    richColors
                    position="top-right"
                />
                <Story />
            </div>
        ),
    ],
    tags: ["autodocs"],
} satisfies Meta<typeof ProjectWorkItemsTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultWithData: Story = {
    name: "Default View (With Data)",
    args: {
        data: fakeProjectsData,
        isReadOnly: false,
    },
};

export const ReadOnlyWithData: Story = {
    name: "Read-Only View (With Data)",
    args: {
        data: fakeProjectsData,
        isReadOnly: true,
    },
};

export const EmptyStateNoWorkItems: Story = {
    name: "Empty State (No Work Items)",
    args: {
        data: fakeEmptyProjectDetails,
        isReadOnly: false,
    },
};

export const ReadOnlyEmptyState: Story = {
    name: "Read-Only View (Empty State)",
    args: {
        data: fakeEmptyProjectDetails as Projects,
        isReadOnly: true,
    },
};
