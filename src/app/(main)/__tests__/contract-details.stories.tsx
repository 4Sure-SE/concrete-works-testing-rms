import type { Meta, StoryObj } from "@storybook/react";
import ProjectContractDetails from "../projects/[id]/_components/contract-details";
import fakeProjectsData, {
    fakeEmptyContractDetails,
    fakeLongContractDetails,
} from "./fake-data";
const meta = {
    title: "Main/Components/ProjectDetails/Contract Details",
    component: ProjectContractDetails,
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
} satisfies Meta<typeof ProjectContractDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithContractDetails: Story = {
    args: {
        id: fakeProjectsData.contractId,
        project: fakeProjectsData,
    },
};

export const WithLongContractDetails: Story = {
    args: {
        id: fakeLongContractDetails.contractId,
        project: fakeLongContractDetails,
    },
};

export const WithoutContractDetails: Story = {
    args: {
        id: fakeEmptyContractDetails.contractId,
        project: fakeEmptyContractDetails,
    },
};
