import "server-only";

import { db } from "@/server/db";
import type { Prisma } from "@prisma/client";

export async function addProjectWorkItemTests(
    data: Prisma.ProjectWorkItemTestCreateManyInput[],
    tx?: Prisma.TransactionClient,
) {
    const client = tx ?? db;
    const projectWorkItemTests = await client.projectWorkItemTest.createMany({
        data,
        skipDuplicates: true,
    });

    return projectWorkItemTests;
}

export async function getProjectWorkItemTestById(id: string) {
    return await db.projectWorkItemTest.findUnique({ where: { id } });
}

export async function updateWorkItemsTestCount(id: string, newValue: number) {
    const updatedWorkItemTest = await db.projectWorkItemTest.update({
        where: { id },
        data: { onFile: newValue },
        include: { projectWorkItem: { select: { projectId: true } } },
    });

    await db.project.update({
        where: { id: updatedWorkItemTest.projectWorkItem.projectId },
        data: {
            updatedAt: new Date(),
        },
    });

    const { projectWorkItem, ...result } = updatedWorkItemTest;

    return result;
}
