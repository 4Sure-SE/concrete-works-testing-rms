import { db } from "@/server/db";
import type { Prisma, WorkItemTestRecord } from "@prisma/client";

export const getProjectWorkItemTestRecords = async (
    id: string,
): Promise<WorkItemTestRecord[]> => {
    const records = await db.workItemTestRecord.findMany({
        where: { projectWorkItemTestId: id },
        orderBy: { createdAt: "desc" },
    });

    return records;
};

export const createManyProjectWorkItemTestRecords = async (
    data: Prisma.WorkItemTestRecordCreateManyInput[],
): Promise<WorkItemTestRecord[]> => {
    const record = await db.workItemTestRecord.createManyAndReturn({
        data,
    });

    return record;
};

export const deleteProjectWorkItemTestRecord = async (
    id: string,
): Promise<WorkItemTestRecord> => {
    const record = await db.workItemTestRecord.delete({
        where: { id },
    });

    return record;
};
