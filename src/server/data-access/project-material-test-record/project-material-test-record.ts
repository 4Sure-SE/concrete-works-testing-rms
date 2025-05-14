import { db } from "@/server/db";
import type { MaterialTestRecord, Prisma } from "@prisma/client";

export const getProjectMaterialTestRecords = async (
    id: string,
): Promise<MaterialTestRecord[]> => {
    const records = await db.materialTestRecord.findMany({
        where: { projectMaterialTestId: id },
        orderBy: { createdAt: "desc" },
    });

    return records;
};

export const createManyProjectMaterialTestRecords = async (
    data: Prisma.MaterialTestRecordCreateManyInput[],
): Promise<MaterialTestRecord[]> => {
    const record = await db.materialTestRecord.createManyAndReturn({
        data,
    });

    return record;
};

export const deleteProjectMaterialTestRecord = async (
    id: string,
): Promise<MaterialTestRecord> => {
    const record = await db.materialTestRecord.delete({
        where: { id },
    });

    return record;
};
