import { Prisma } from "@prisma/client";

export const workItemMaterialTestDefinitionSelect =
    Prisma.validator<Prisma.WorkItemMaterialTestSelect>()({
        testId: true,
        unitsPerTest: true,
    });

export type WorkItemMaterialTestDefinitionPayload =
    Prisma.WorkItemMaterialTestGetPayload<{
        select: typeof workItemMaterialTestDefinitionSelect;
    }>;
