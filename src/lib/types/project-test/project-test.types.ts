import { type ActionState } from "../actions.types";

export type TestUpdateType = "material" | "workItem";

export type ProjectWorkItemTest = {
    id: string;
    testId: string;
    projectWorkItemId: string;
    onFile: number;
    createdAt: Date;
};

export type ProjectMaterialTest = {
    id: string;
    testId: string;
    projectMaterialId: string;
    onFile: number;
    createdAt: Date;
};

export type ProjectTestActionState = ActionState<
    ProjectWorkItemTest | ProjectMaterialTest | null,
    string
>;
