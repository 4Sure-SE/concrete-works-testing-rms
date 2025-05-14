import type { WorkItemTestRecord } from "@prisma/client";

import { createClient } from "@/lib/server";
import type { WorkItemTestRecordDTO } from "@/lib/types/test-record/test-record.types";

export const workItemTestRecordToDTO = async (
    workItemTestRecord: WorkItemTestRecord,
): Promise<WorkItemTestRecordDTO> => {
    const supabase = await createClient();
    const { data } = supabase.storage
        .from("test-records")
        .getPublicUrl(workItemTestRecord.storagePath);

    return {
        id: workItemTestRecord.id,
        projectWorkItemTestId: workItemTestRecord.projectWorkItemTestId,
        storagePath: workItemTestRecord.storagePath,
        fileUrl: data.publicUrl,
        fileName: workItemTestRecord.fileName,
        fileSize: workItemTestRecord.fileSize,
        fileType: workItemTestRecord.fileType,
        createdAt: workItemTestRecord.createdAt,
    };
};
