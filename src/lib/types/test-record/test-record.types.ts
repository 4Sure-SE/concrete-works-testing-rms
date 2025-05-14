import type { MaterialTestRecord, WorkItemTestRecord } from "@prisma/client";
import type { ActionState } from "../actions.types";

export type WorkItemTestRecordDTO = WorkItemTestRecord & {
    fileUrl: string;
};

export type MaterialTestRecordDTO = MaterialTestRecord & {
    fileUrl: string;
};

export type CreateWorkItemTestRecordDTO = Omit<
    WorkItemTestRecord,
    "id" | "createdAt"
>;

export type CreateMaterialTestRecordDTO = Omit<
    MaterialTestRecord,
    "id" | "createdAt"
>;

export type TestRecordActionState = ActionState<
    MaterialTestRecordDTO | WorkItemTestRecordDTO | null,
    string
>;
