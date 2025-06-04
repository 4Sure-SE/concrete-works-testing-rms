import type {
    ProjectWorkItemDTO,
    UpdateProjectWorkItemDTO,
} from "@/lib/types/project-work-item/project-work-item.types";
import type {
    CreateProjectWorkItemDTO,
    WorkItemDefinitionDTO,
} from "@/lib/types/work-item";
import { v4 as uuidv4 } from "uuid";

export const fakeWorkItemDefinitions: WorkItemDefinitionDTO[] = [
    {
        id: "aa5f1e7a-b0c7-4d0d-8fad-8d0ca6180b19",
        itemNo: "Item 311",
        description: "Portland Cement Concrete Pavement",
        unitAbbreviation: "cu.m",
    },
    {
        id: "c703b5c9-8988-4913-a2f7-16b9b612ba34",
        itemNo: "Item 405",
        description: "Structural Concrete",
        unitAbbreviation: "cu.m",
    },
    {
        id: "8c77efe6-9312-43d1-a7f6-1d065fda0acb",
        itemNo: "Item 900",
        description: "Reinforced Concrete",
        unitAbbreviation: "cu.m",
    },
];

export const fakeProjectWorkItems: ProjectWorkItemDTO[] = [
    {
        id: uuidv4(),
        itemNo: "Item 311",
        description: "Portland Cement Concrete Pavement",
        quantity: 150.5,
        unitAbbreviation: "cu.m",
    },
    {
        id: uuidv4(),
        itemNo: "Item 405",
        description: "Structural Concrete",
        quantity: 85.25,
        unitAbbreviation: "cu.m",
    },
    {
        id: uuidv4(),
        itemNo: "Item 900",
        description: "Reinforced Concrete",
        quantity: 200.0,
        unitAbbreviation: "cu.m",
    },
];

export const fakeCreateProjectWorkItemData: CreateProjectWorkItemDTO = {
    workItemId: "aa5f1e7a-b0c7-4d0d-8fad-8d0ca6180b19",
    quantity: 100,
};

export const fakeUpdateProjectWorkItemData: UpdateProjectWorkItemDTO = {
    quantity: 125.5,
};

export const fakeProjectWorkItem: ProjectWorkItemDTO = fakeProjectWorkItems[0]!;
