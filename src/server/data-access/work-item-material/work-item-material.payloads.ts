import { Prisma } from "@prisma/client";

export const workItemMaterialInclude =
    Prisma.validator<Prisma.WorkItemMaterialInclude>()({
        workItem: {
            include: {
                unit: true,
            },
        },
        workItemMaterialTest: true,
        material: {
            include: {
                unit: true,
            },
        },
    });

export type WorkItemMaterialDefinitionPayload =
    Prisma.WorkItemMaterialGetPayload<{
        include: typeof workItemMaterialInclude;
    }>;
