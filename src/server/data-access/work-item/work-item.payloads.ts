import { Prisma } from "@prisma/client";

export const workItemInclude = Prisma.validator<Prisma.WorkItemInclude>()({
    unit: { select: { abbreviation: true } },
});

export type WorkItemPayload = Prisma.WorkItemGetPayload<{
    include: typeof workItemInclude;
}>;
