import type { createProjectSchema } from "@/app/(main)/projects/new/_components/project-form/project-form.schema";
import type { Project } from "@prisma/client";
import type { z } from "zod";
import type { Result } from "../actions.types";
import type { FormField } from "../form.types";

export type ProjectActionErrors = Partial<
    Record<FormField<CreateProjectDTO> | "general", string[]>
>;

export type CreateProjectInitialState = Result<
    CreateProjectDTO,
    ProjectActionErrors
>;

export type CreateProjectReturnState = Result<ProjectDTO, ProjectActionErrors>;

// project type used in the app
export type ProjectDTO = Omit<
    Project,
    "createdAt" | "contractCost" | "limits" | "location"
> & {
    contractCost: number;
    limits: string | null;
    location: string | null;
};

// project summary type used in the app
export type ProjectSummaryDTO = {
    id: string;
    contractId: string;
    contractName: string;
    totalRequiredTests: number;
    totalOnFileTests: number;
    totalBalanceTests: number;
    dateStarted: Date;
};

// client to server dto for creating project
export type CreateProjectDTO = z.infer<typeof createProjectSchema>;
