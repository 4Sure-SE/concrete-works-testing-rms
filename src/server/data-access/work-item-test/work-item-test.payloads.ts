import { Prisma } from "@prisma/client";

export const workItemTestDefinitionSelect =
    Prisma.validator<Prisma.WorkItemTestSelect>()({
        testId: true,
        testQuantity: true,
    });

export type WorkItemTestDefinitionPayload = Prisma.WorkItemTestGetPayload<{
    select: typeof workItemTestDefinitionSelect;
}>;
