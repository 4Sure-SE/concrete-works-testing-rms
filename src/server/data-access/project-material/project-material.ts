import "server-only";

import { db } from "@/server/db";
import type { Prisma } from "@prisma/client";

export async function getProjectMaterialListByProjectWorkItem(
    projectWorkItemId: string,
    tx?: Prisma.TransactionClient,
) {
    const client = tx ?? db;

    const projectMaterials = await client.projectMaterial.findMany({
        where: {
            projectWorkItemId,
        },
        select: { id: true, materialId: true, quantity: true },
    });

    return projectMaterials;
}

export async function createProjectMaterials(
    data: Prisma.ProjectMaterialCreateManyInput[],
    tx?: Prisma.TransactionClient,
) {
    const client = tx ?? db;

    const projectMaterials = await client.projectMaterial.createManyAndReturn({
        data,
        skipDuplicates: true,
    });

    return projectMaterials;
}

export async function updateProjectMaterial(
    id: string,
    data: Prisma.ProjectMaterialUpdateInput,
    tx?: Prisma.TransactionClient,
) {
    const client = tx ?? db;

    const projectMaterial = await client.projectMaterial.update({
        where: { id },
        data,
    });

    return projectMaterial;
}
