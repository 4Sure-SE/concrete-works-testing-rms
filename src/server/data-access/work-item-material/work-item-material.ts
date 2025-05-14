import "server-only";

import { db } from "@/server/db";
import type { Prisma } from "@prisma/client";
import {
    workItemMaterialInclude,
    type WorkItemMaterialDefinitionPayload,
} from "./work-item-material.payloads";

export async function getWorkItemMaterialDefinition(
    workItemId: string,
    materialId: string,
    tx?: Prisma.TransactionClient,
): Promise<WorkItemMaterialDefinitionPayload | null> {
    const client = tx ?? db;
    const material = await client.workItemMaterial.findFirst({
        where: { workItemId, materialId },
        include: workItemMaterialInclude,
    });

    return material;
}

export async function getWorkItemMaterialDefinitionList(
    workItemId: string,
    tx?: Prisma.TransactionClient,
): Promise<WorkItemMaterialDefinitionPayload[]> {
    const client = tx ?? db;
    const materials = await client.workItemMaterial.findMany({
        where: { workItemId },
        include: workItemMaterialInclude,
    });

    return materials;
}
