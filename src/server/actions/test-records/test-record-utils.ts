"use server";

import { createClient } from "@/lib/supabase/server";
import type { WorkItemTestRecord } from "@/lib/types/work-item-test-record/work-item-test-record.types";

export async function handleError(error: unknown, defaultMessage: string) {
    console.error(defaultMessage, error);
    return {
        success: false,
        error: error instanceof Error ? error.message : defaultMessage,
    };
}

export async function getFileUrl(
    testId: string,
    fileName: string,
): Promise<string> {
    const supabase = await createClient();
    return supabase.storage
        .from("test-records")
        .getPublicUrl(`${testId}/${fileName}`).data.publicUrl;
}

export async function createStoragePath(
    testId: string,
    fileName: string,
): Promise<{ path: string; storedFileName: string }> {
    const timestamp = Date.now();
    const storedFileName = `${fileName}-${timestamp}`;
    return {
        path: `${testId}/${storedFileName}`,
        storedFileName,
    };
}

export async function extractOriginalFileName(
    storedFileName: string,
): Promise<string> {
    const lastDashIndex = storedFileName.lastIndexOf("-");

    if (
        lastDashIndex > 0 &&
        !isNaN(Number(storedFileName.substring(lastDashIndex + 1)))
    ) {
        return storedFileName.substring(0, lastDashIndex);
    }

    return storedFileName;
}

export async function formatTestRecord(
    record: {
        id: string;
        projectWorkItemTestId: string;
        recordIdentifier: string;
        fileName: string;
        fileSize: number | null;
        fileType: string | null;
        createdAt: Date;
    },
    testId: string,
): Promise<WorkItemTestRecord> {
    return {
        id: record.id,
        projectWorkItemTestId: record.projectWorkItemTestId,
        recordIdentifier: record.recordIdentifier,
        fileName: await extractOriginalFileName(record.fileName),
        fileSize: record.fileSize ?? 0,
        fileType: record.fileType,
        fileUrl: await getFileUrl(testId, record.fileName),
        uploadedAt: record.createdAt.toISOString(),
    };
}
