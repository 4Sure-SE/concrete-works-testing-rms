import { db } from "@/server/db";
import type { Prisma } from "@prisma/client";

export async function getWorkItemMaterialTestDefinitions(
    workItemMaterialId: string,
    tx?: Prisma.TransactionClient,
) {
    const client = tx ?? db;
    const workItemMaterialTests = await client.workItemMaterialTest.findMany({
        where: {
            workItemMaterialId,
        },
        select: { testId: true, unitsPerTest: true },
    });

    console.log("workItemMaterialTests", workItemMaterialTests);

    return workItemMaterialTests;
}
