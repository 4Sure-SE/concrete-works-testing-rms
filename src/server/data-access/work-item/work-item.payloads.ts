import { Prisma } from "@prisma/client";

export const workItemInclude = Prisma.validator<Prisma.WorkItemInclude>()({
    unit: { select: { abbreviation: true, isWholeNumber: true } },
});

export type WorkItemPayload = Prisma.WorkItemGetPayload<{
    include: typeof workItemInclude;
}>;

export const workItemWithAllDefinitionsInclude =
    Prisma.validator<Prisma.WorkItemInclude>()({
        // unit: { select: { abbreviation: true } },
        workItemMaterial: {
            select: {
                id: true,
                materialId: true,
                quantityPerUnit: true,
                staticQuantity: true,
                workItem: {
                    select: { unit: { select: { isWholeNumber: true } } },
                },
                workItemMaterialTest: {
                    select: {
                        testId: true,
                        unitsPerTest: true,
                    },
                },
            },
        },
        workItemTest: {
            select: {
                testId: true,
                testQuantity: true,
            },
        },
    });

export type WorkItemWithAllDefinitionsPayload = Prisma.WorkItemGetPayload<{
    include: typeof workItemWithAllDefinitionsInclude;
}>;
