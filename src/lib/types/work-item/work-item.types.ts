import type { WorkItem } from "@prisma/client";

export type WorkItemDefinitionDTO = Omit<WorkItem, "createdAt" | "unitId"> & {
    unitAbbreviation: string;
};
