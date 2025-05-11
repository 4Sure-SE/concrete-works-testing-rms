"use server";

import { createClient } from "@/lib/supabase/server";
import { db } from "@/server/db";
import { v4 as uuidv4 } from "uuid";
import {
    createStoragePath,
    formatTestRecord,
    handleError,
} from "./test-record-utils";

export async function uploadTestRecord(formData: FormData) {
    const files = formData.getAll("files") as File[];
    const testId = formData.get("testId") as string;

    if (!testId || files.length === 0) {
        return { success: false, error: "Missing testId or files" };
    }

    try {
        const supabase = await createClient();
        const recordIds: string[] = [];

        for (const file of files) {
            const recordIdentifier = `${testId}-${Date.now()}-${file.name}`;

            const { path: storagePath, storedFileName } =
                await createStoragePath(testId, file.name);

            const uploadResult = await supabase.storage
                .from("test-records")
                .upload(storagePath, file, { contentType: file.type });

            if (uploadResult.error) {
                return { success: false, error: uploadResult.error.message };
            }

            const dbRecord = await db.workItemTestRecord.create({
                data: {
                    id: uuidv4(),
                    projectWorkItemTestId: testId,
                    recordIdentifier,
                    fileName: storedFileName,
                    fileSize: file.size,
                    fileType: file.type || null,
                },
            });

            recordIds.push(dbRecord.id);
        }

        const dbRecords = await db.workItemTestRecord.findMany({
            where: { id: { in: recordIds } },
            orderBy: { createdAt: "desc" },
        });

        const formattedRecords = await Promise.all(
            dbRecords.map((record) => formatTestRecord(record, testId)),
        );

        return { success: true, data: formattedRecords };
    } catch (error) {
        return await handleError(error, "Failed to upload test record");
    }
}

export async function getTestRecords(testId: string) {
    if (!testId) {
        return { success: false, error: "Missing testId" };
    }

    try {
        const dbRecords = await db.workItemTestRecord.findMany({
            where: { projectWorkItemTestId: testId },
            orderBy: { createdAt: "desc" },
        });

        if (dbRecords.length > 0) {
            const formattedRecords = await Promise.all(
                dbRecords.map((record) => formatTestRecord(record, testId)),
            );

            return { success: true, data: formattedRecords };
        }
        return { success: true, data: [] };
    } catch (error) {
        return await handleError(error, "Failed to fetch test records");
    }
}
