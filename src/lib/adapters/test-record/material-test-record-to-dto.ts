import type { MaterialTestRecord } from "@prisma/client";

import { createClient } from "@/lib/server";
import type { MaterialTestRecordDTO } from "@/lib/types/test-record/test-record.types";

export const materialTestRecordToDTO = async (
    materialTestRecord: MaterialTestRecord,
): Promise<MaterialTestRecordDTO> => {
    const supabase = await createClient();
    const { data } = supabase.storage
        .from("test-records")
        .getPublicUrl(materialTestRecord.storagePath);

    return {
        id: materialTestRecord.id,
        projectMaterialTestId: materialTestRecord.projectMaterialTestId,
        storagePath: materialTestRecord.storagePath,
        fileUrl: data.publicUrl,
        fileName: materialTestRecord.fileName,
        fileSize: materialTestRecord.fileSize,
        fileType: materialTestRecord.fileType,
        createdAt: materialTestRecord.createdAt,
    };
};
