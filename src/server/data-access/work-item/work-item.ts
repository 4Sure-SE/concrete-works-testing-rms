import "server-only";

import { db } from "@/server/db";
import type { WorkItemPayload } from "./work-item.payloads";

export async function getWorkItemList(): Promise<WorkItemPayload[]> {
    const workItems = await db.workItem.findMany({
        orderBy: { createdAt: "desc" },
        include: { unit: { select: { abbreviation: true } } },
    });
    return workItems;
}
