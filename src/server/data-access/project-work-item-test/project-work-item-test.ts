import "server-only";

import { db } from "@/server/db";
import type { Prisma } from "@prisma/client";

export async function addProjectWorkItemTests(
    data: Prisma.ProjectWorkItemTestCreateManyInput[],
    tx?: Prisma.TransactionClient,
) {
    const client = tx ?? db;
    const projectWorkItemTests = await client.projectWorkItemTest.createMany({
        data,
        skipDuplicates: true,
    });

    return projectWorkItemTests;
}
