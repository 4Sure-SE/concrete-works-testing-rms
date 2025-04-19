import { db } from "@/server/db";
import type { Prisma } from "@prisma/client";
import { WorkItemMaterialTestDefinitionPayload } from "./work-item-material-test.payloads";

export async function getWorkItemMaterialTestDefinitions(
    workItemMaterialId: string,
    tx?: Prisma.TransactionClient,
): Promise<WorkItemMaterialTestDefinitionPayload[]> {
    const client = tx ?? db;
    const workItemMaterialTests = await client.workItemMaterialTest.findMany({
        where: {
            workItemMaterialId,
        },
        select: { testId: true, unitsPerTest: true },
    });

    return workItemMaterialTests;
}
