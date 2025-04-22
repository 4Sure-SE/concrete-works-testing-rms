import { db } from "@/server/db";
import type { Prisma } from "@prisma/client";

export async function createProjectMaterialTests(
    data: Prisma.ProjectMaterialTestCreateManyInput[],
    tx?: Prisma.TransactionClient,
) {
    const client = tx ?? db;

    const projectMaterialTest =
        await client.projectMaterialTest.createManyAndReturn({
            data,
            skipDuplicates: true,
        });
    return projectMaterialTest;
}

export async function getProjectMaterialTestById(id: string) {
    return await db.projectMaterialTest.findUnique({ where: { id } });
}

export async function updateMaterialTestCount(id: string, newValue: number) {
    return await db.projectMaterialTest.update({
        where: { id },
        data: { onFile: newValue },
    });
}
