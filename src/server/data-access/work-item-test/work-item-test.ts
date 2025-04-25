import "server-only";

import { db } from "@/server/db";
import type { Prisma } from "@prisma/client";
import { type WorkItemTestDefinitionPayload } from "./work-item-test.payloads";

export async function getWorkItemTestDefinitions(
    workItemId: string,
    tx?: Prisma.TransactionClient,
): Promise<WorkItemTestDefinitionPayload[]> {
    const client = tx ?? db;

    const workItemTests = await client.workItemTest.findMany({
        where: { workItemId },
        select: { testId: true, testQuantity: true },
    });

    return workItemTests;
}
