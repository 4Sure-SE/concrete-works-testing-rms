import { Prisma } from "@prisma/client";
import { workItemMaterialInclude } from "../work-item-material/work-item-material.payloads";

export const workItemInclude = Prisma.validator<Prisma.WorkItemInclude>()({
    unit: { select: { abbreviation: true, isWholeNumber: true } },
});

export type WorkItemPayload = Prisma.WorkItemGetPayload<{
    include: typeof workItemInclude;
}>;

export const workItemWithAllDefinitionsInclude =
    Prisma.validator<Prisma.WorkItemInclude>()({
        // unit: { select: { abbreviation: true } },
        unit: true,
        workItemMaterial: {
            include: workItemMaterialInclude,
        },
        workItemTest: {
            include: { test: true },
        },
    });

export type WorkItemWithAllDefinitionsPayload = Prisma.WorkItemGetPayload<{
    include: typeof workItemWithAllDefinitionsInclude;
}>;
