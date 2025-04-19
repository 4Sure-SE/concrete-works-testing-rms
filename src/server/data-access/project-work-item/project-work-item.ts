import "server-only";

import type { CreateProjectWorkItemDTO } from "@/lib/types/work-item";
import { db } from "@/server/db";
import type { Prisma, ProjectWorkItem } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import {
    projectWorkItemInclude,
    type ProjectWorkItemPayload,
    projectWorkItemWithDetailsInclude,
    type ProjectWorkItemWithDetailsPayload,
} from "./project-work-item.payloads";

// get project work item dwith details by id
export async function getProjectWorkItemDetailsById(
    id: string,
): Promise<ProjectWorkItemWithDetailsPayload | null> {
    const projectWorkItem = await db.projectWorkItem.findUnique({
        where: { id },
        include: projectWorkItemWithDetailsInclude,
    });

    return projectWorkItem;
}

// get project work item by id
// used for the project work item list in the project work items page
export async function getProjectWorkItemById(
    id: string,
    tx?: Prisma.TransactionClient,
): Promise<ProjectWorkItemPayload | null> {
    const client = tx ?? db;
    const projectWorkItem = await client.projectWorkItem.findUnique({
        where: { id },
        include: projectWorkItemInclude,
    });

    return projectWorkItem;
}

// get project work item by project id and work item id
export async function getProjectWorkItemByProjectIdAndWorkItemId(
    projectId: string,
    workItemId: string,
    tx?: Prisma.TransactionClient,
): Promise<ProjectWorkItemPayload | null> {
    const client = tx ?? db;
    const projectWorkItem = await client.projectWorkItem.findFirst({
        where: { projectId, workItemId },
        include: projectWorkItemInclude,
    });

    return projectWorkItem;
}

// create new project work item
export async function createProjectWorkItem(
    projectId: string,
    data: CreateProjectWorkItemDTO,
    tx?: Prisma.TransactionClient,
): Promise<ProjectWorkItem> {
    // use transaction client if provided, otherwise use db client
    const client = tx ?? db;

    const projectWorkItem = await client.projectWorkItem.create({
        data: {
            projectId,
            workItemId: data.workItemId,
            quantity: new Decimal(data.quantity),
        },
    });

    return projectWorkItem;
}

export async function updateProjectWorkItem(
    id: string,
    data: Prisma.ProjectWorkItemUpdateInput,
    tx?: Prisma.TransactionClient,
): Promise<ProjectWorkItem> {
    const client = tx ?? db;

    const updatedProjectWorkItem = await client.projectWorkItem.update({
        where: { id },
        data,
    });

    return updatedProjectWorkItem;
}
