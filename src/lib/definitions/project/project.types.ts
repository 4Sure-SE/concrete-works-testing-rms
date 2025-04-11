import { type z } from "zod";

import { type Result } from "../actions.types";
import { type FormField } from "../form.types";
import { type projectFormSchema } from "./project-schema";

export type ProjectFormData = z.infer<typeof projectFormSchema>;

export type ProjectActionErrors = Partial<
    Record<FormField<ProjectFormData> | "general", string[]>
>;

export type ProjectActionState = Result<ProjectFormData, ProjectActionErrors>;
