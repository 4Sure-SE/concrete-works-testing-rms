import { Prisma } from "@prisma/client";

export const projectWorkItemInclude =
    Prisma.validator<Prisma.ProjectWorkItemInclude>()({
        workItem: {
            include: {
                unit: { select: { abbreviation: true } },
            },
        },
    });

export const projectWorkItemWithDetailsInclude =
    Prisma.validator<Prisma.ProjectWorkItemInclude>()({
        workItem: {
            include: {
                unit: { select: { abbreviation: true } },
                workItemMaterial: {
                    include: {
                        material: true,
                        workItemMaterialTest: true,
                    },
                },
                workItemTest: {
                    include: { test: true },
                },
            },
        },
        projectMaterial: {
            include: {
                material: true,
                projectMaterialTest: true,
            },
        },
        projectWorkItemTest: {
            include: { test: true },
        },
    });

export type ProjectWorkItemPayload = Prisma.ProjectWorkItemGetPayload<{
    include: typeof projectWorkItemInclude;
}>;

export type ProjectWorkItemWithDetailsPayload =
    Prisma.ProjectWorkItemGetPayload<{
        include: typeof projectWorkItemWithDetailsInclude;
    }>;
