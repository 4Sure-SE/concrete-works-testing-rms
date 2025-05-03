import { Prisma } from "@prisma/client";

export const workItemMaterialSelect =
    Prisma.validator<Prisma.WorkItemMaterialSelect>()({
        id: true,
        materialId: true,
        quantityPerUnit: true,
        staticQuantity: true,
        workItem: { select: { unit: { select: { isWholeNumber: true } } } },
    });

export type WorkItemMaterialDefinitionPayload =
    Prisma.WorkItemMaterialGetPayload<{
        select: typeof workItemMaterialSelect;
    }>;
