"use server";

import { createClient } from "@/lib/supabase/server";
import { db } from "@/server/db";
import { handleError } from "./test-record-utils";

export async function deleteTestRecord(
    recordId: string,
    fileName: string,
    testId: string,
) {
    if (!recordId || !fileName || !testId) {
        return { success: false, error: "Missing required parameters" };
    }

    try {
        const supabase = await createClient();

        const filePath = `${testId}/${fileName}`;
        const { error: storageError } = await supabase.storage
            .from("test-records")
            .remove([filePath]);

        if (storageError) {
            console.error("Error deleting file from storage:", storageError);
            return { success: false, error: storageError.message };
        }

        try {
            await db.workItemTestRecord.delete({
                where: { id: recordId },
            });
        } catch (dbError) {
            console.error("Error deleting from database:", dbError);
        }

        return { success: true };
    } catch (error) {
        console.error("Error deleting test record:", error);
        return handleError(error, "Failed to delete test record");
    }
}
