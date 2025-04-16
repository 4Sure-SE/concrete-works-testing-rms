import { Prisma } from "@prisma/client";

export const projectSummaryInclude = Prisma.validator<Prisma.ProjectInclude>()({
    projectWorkItem: {
        select: {
            quantity: true,
            // include the base work item definitions needed for calculation
            workItem: {
                select: {
                    // for material tests
                    workItemMaterial: {
                        select: {
                            materialId: true,
                            workItemMaterialTest: {
                                select: {
                                    testId: true,
                                    unitsPerTest: true,
                                },
                            },
                        },
                    },
                    // for work item tests
                    workItemTest: {
                        select: { testId: true, testQuantity: true },
                    },
                },
            },
            projectMaterial: {
                select: {
                    quantity: true,
                    materialId: true,
                    projectMaterialTest: {
                        select: { onFile: true, testId: true },
                    },
                },
            },
            projectWorkItemTest: {
                select: { onFile: true, testId: true },
            },
        },
    },
});

export type ProjectSummaryPayload = Prisma.ProjectGetPayload<{
    include: typeof projectSummaryInclude;
}>;

// add other complex include/payload definitions here if needed
