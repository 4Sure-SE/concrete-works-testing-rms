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
        include: {
            projectWorkItemTest: {
                include: {
                    projectWorkItem: {
                        include: { project: { select: { id: true } } },
                    },
                },
            },
        },
    });

    await db.project.update({
        where: {
            id: record[0]!.projectWorkItemTest.projectWorkItem.project.id,
        },
        data: { updatedAt: new Date() },
    });

    return record;
};

export const deleteProjectWorkItemTestRecord = async (
    id: string,
): Promise<WorkItemTestRecord> => {
    const record = await db.workItemTestRecord.delete({
        where: { id },
        include: {
            projectWorkItemTest: {
                include: {
                    projectWorkItem: {
                        include: { project: { select: { id: true } } },
                    },
                },
            },
        },
    });

    await db.project.update({
        where: { id: record.projectWorkItemTest.projectWorkItem.project.id },
        data: { updatedAt: new Date() },
    });

    return record;
};
