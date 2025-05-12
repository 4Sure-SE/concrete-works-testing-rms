import type { updateProjectSchema } from "@/app/(main)/projects/[id]/edit/_components/update-project-form/update-project-form.schema";
import type { createProjectSchema } from "@/app/(main)/projects/new/_components/create-project-form";
import type { Project } from "@prisma/client";
import type { z } from "zod";
import type { ActionErrors, ActionState } from "../actions.types";

export type ProjectActionErrors = ActionErrors<CreateProjectDTO>;

export type ProjectActionState = ActionState<
    ProjectDTO | null,
    ProjectActionErrors
>;

// project type used in the app
export type ProjectDTO = Omit<
    Project,
    "updatedAt" | "contractCost" | "limits" | "location"
> & {
    contractCost: number;
    limits: string | null;
    location: string | null;
    token: string | null;
};

export type ProjectSummaryStats = {
    totalRequiredTests: number;
    totalOnFileTests: number;
    totalBalanceTests: number;
};

// project summary type used in the app
export type ProjectSummaryDTO = {
    id: string;
    contractId: string;
    contractName: string;
    dateStarted: Date;
    stats: ProjectSummaryStats;
};

export type ProjectListFilters = {
    query?: string;
    dateFrom?: string;
    dateTo?: string;
    currentPage: number;
    itemsPerPage: number;
};

// client to server dto for creating project
export type CreateProjectDTO = z.infer<typeof createProjectSchema>;
export type UpdateProjectDTO = z.infer<typeof updateProjectSchema>;
