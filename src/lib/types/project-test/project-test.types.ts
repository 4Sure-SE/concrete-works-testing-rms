import { type ActionState } from "../actions.types";

export type TestUpdateType = "material" | "workItem";

export type ProjectTestActionState = ActionState<
    | {
          id: string;
          testId: string;
          projectWorkItemId: string;
          onFile: number;
          createdAt: Date;
      }
    | {
          id: string;
          testId: string;
          projectMaterialId: string;
          onFile: number;
          createdAt: Date;
      }
    | null,
    string
>;
