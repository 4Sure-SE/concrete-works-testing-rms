import type { TestType } from "@/lib/types/project-test/project-test.types";
import type { Meta, StoryObj } from "@storybook/react";
import type { TestRecordDTO } from "./test-record-modal";
import { TestRecordModal } from "./test-record-modal";

const meta = {
    title: "Main/Components/ProjectDetails/Test-Record-Modal",
    component: TestRecordModal,
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
} satisfies Meta<typeof TestRecordModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockTestRecords: TestRecordDTO[] = [
    {
        id: "1",
        fileName: "test1.pdf",
        fileUrl: "https://example.com/test1.pdf",
        storagePath: "material/1/test1.pdf",
        fileSize: 102400,
        fileType: "application/pdf",
        createdAt: new Date(),
        projectMaterialTestId: "mat-test-1",
    },
    {
        id: "2",
        fileName: "test2.pdf",
        fileUrl: "https://example.com/test2.pdf",
        storagePath: "material/1/test2.pdf",
        fileSize: 204800,
        fileType: "application/pdf",
        createdAt: new Date(),
        projectMaterialTestId: "mat-test-1",
    },
];

export const Default: Story = {
    args: {
        testRecords: [],
        testId: "test-1",
        testType: "material" as TestType,
        projectId: "project-1",
        isReadOnly: false,
    },
};

export const WithTestRecords: Story = {
    args: {
        testRecords: mockTestRecords,
        testId: "test-1",
        testType: "material" as TestType,
        projectId: "project-1",
        isReadOnly: false,
    },
};
export const ReadOnly: Story = {
    args: {
        testRecords: mockTestRecords,
        testId: "test-1",
        testType: "material" as TestType,
        projectId: "project-1",
        isReadOnly: true,
    },
};

export const WithNoRecords: Story = {
    args: {
        testRecords: [],
        testId: "test-1",
        testType: "material" as TestType,
        projectId: "project-1",
        isReadOnly: false,
    },
};
export const WithNoRecordsReadOnly: Story = {
    args: {
        testRecords: [],
        testId: "test-1",
        testType: "material" as TestType,
        projectId: "project-1",
        isReadOnly: true,
    },
};
