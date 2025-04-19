import type { createProjectWorkItemSchema } from "@/app/(main)/projects/[id]/work-items/_components";
import type { z } from "zod";
import type { ActionErrors, ActionState } from "../actions.types";
import type { WorkItemDefinitionDTO } from "../work-item";

// project work items type used in the app
export type ProjectWorkItemDTO = WorkItemDefinitionDTO & {
    quantity: number;
};

export type ProjectWorkItemActionErrors =
    ActionErrors<CreateProjectWorkItemDTO>;

export type ProjectWorkItemActionState = ActionState<
    ProjectWorkItemDTO | null,
    ProjectWorkItemActionErrors
>;
export type CreateProjectWorkItemDTO = z.infer<
    typeof createProjectWorkItemSchema
>;

export type UpdateProjectWorkItemDTO = Pick<
    CreateProjectWorkItemDTO,
    "quantity"
>;
