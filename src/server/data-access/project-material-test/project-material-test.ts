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
    const updatedMaterialTest = await db.projectMaterialTest.update({
        where: { id },
        data: { onFile: newValue },
        include: {
            projectMaterial: {
                select: { projectWorkItem: { select: { projectId: true } } },
            },
        },
    });

    await db.project.update({
        where: {
            id: updatedMaterialTest.projectMaterial.projectWorkItem.projectId,
        },
        data: {
            updatedAt: new Date(),
        },
    });

    const { projectMaterial, ...result } = updatedMaterialTest;

    return result;
}
