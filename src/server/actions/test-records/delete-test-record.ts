"use server";

import { createClient } from "@/lib/server";
import type { TestRecordActionState } from "@/lib/types/test-record/test-record.types";
import { tryCatch } from "@/lib/utils";
import { TestRecordService } from "@/server/services/test-records.service";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const deleteRecordSchema = z.object({
    id: z.string().uuid("Invalid Record ID"),
    fileName: z.string().min(1),
    testType: z.enum(["material", "work-item"], {
        errorMap: () => ({ message: "Invalid Test Type" }),
    }),
    storagePath: z.string().min(1),
    projectId: z.string().uuid("Invalid Project ID"),
    testId: z.string().uuid("Invalid Test ID"),
});

type DeleteRecordInput = z.infer<typeof deleteRecordSchema>;

export async function deleteTestRecord(
    input: DeleteRecordInput,
): Promise<TestRecordActionState> {
    const validationResult = deleteRecordSchema.safeParse(input);
    if (!validationResult.success) {
        console.error(
            "CreateTestRecordsAction Validation Error:",
            validationResult.error.flatten(),
        );
        return {
            success: false,
            error: "Invalid input data.",
        };
    }

    const { id, storagePath, testType, projectId, testId } =
        validationResult.data;

    const supabase = await createClient();
    const { error: deleteError } = await supabase.storage
        .from("test-records")
        .remove([storagePath]);

    if (deleteError) {
        return {
            success: false,
            error: "Error deleting file from storage.",
        };
    }

    if (testType === "material") {
        const { data, error } = await tryCatch(
            TestRecordService.deleteMaterialTestRecord(id),
        );

        if (error) {
            return {
                success: false,
                error: error.message || "Error deleting material test record",
            };
        }

        revalidatePath(
            `/projects/${projectId}/test-records/${testId}/${testType}`,
        );

        return { success: true, data };
    }
    if (testType === "work-item") {
        const { data, error } = await tryCatch(
            TestRecordService.deleteWorkItemTestRecord(id),
        );

        if (error) {
            return {
                success: false,
                error: error.message || "Error deleting work item test record",
            };
        }

        revalidatePath(
            `/projects/${projectId}/test-records/${testId}/${testType}`,
        );

        return { success: true, data };
    }

    return { success: false, error: "Invalid test type" };
}
