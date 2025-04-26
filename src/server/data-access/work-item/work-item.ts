import "server-only";

import { db } from "@/server/db";
import { type Prisma } from "@prisma/client";
import {
    workItemWithAllDefinitionsInclude,
    type WorkItemPayload,
    type WorkItemWithAllDefinitionsPayload,
} from "./work-item.payloads";

export async function getWorkItemList(): Promise<WorkItemPayload[]> {
    const workItems = await db.workItem.findMany({
        orderBy: { createdAt: "desc" },
        include: { unit: { select: { abbreviation: true } } },
    });
    return workItems;
}

export async function getWorkItemWithAllDefinitions(
    id: string,
    tx?: Prisma.TransactionClient, // Optional tx client
): Promise<WorkItemWithAllDefinitionsPayload | null> {
    const client = tx ?? db;
    return client.workItem.findUnique({
        where: { id },
        include: workItemWithAllDefinitionsInclude,
    });
}
