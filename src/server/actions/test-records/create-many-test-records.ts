"use server";

import type {
    CreateMaterialTestRecordDTO,
    MaterialTestRecordDTO,
    WorkItemTestRecordDTO,
} from "@/lib/types/test-record/test-record.types";
import { tryCatch } from "@/lib/utils";
import { TestRecordService } from "@/server/services/test-records.service";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const newRecordSchema = z.object({
    fileName: z.string().min(1),
    storagePath: z.string().min(1),
    fileSize: z.number().positive(),
    fileType: z.string(),
});

const createTestRecordsActionSchema = z.object({
    testId: z.string().uuid("Invalid Test ID"),
    testType: z.enum(["material", "work-item"], {
        errorMap: () => ({ message: "Invalid Test Type" }),
    }),
    projectId: z.string().uuid("Invalid Project ID"),
    newRecords: z
        .array(newRecordSchema)
        .min(1, "At least one record is required."),
});

export type CreateTestRecordsActionInput = z.infer<
    typeof createTestRecordsActionSchema
>;

interface CreateTestRecordsActionResult {
    success: boolean;
    data?: (WorkItemTestRecordDTO | MaterialTestRecordDTO)[]; // return DTOs
    error?: string;
}

export async function createManyTestRecords(
    input: CreateTestRecordsActionInput,
): Promise<CreateTestRecordsActionResult> {
    const validationResult = createTestRecordsActionSchema.safeParse(input);
    if (!validationResult.success) {
        return {
            success: false,
            error:
                validationResult.error.flatten().fieldErrors.newRecords?.[0] ??
                "Invalid input data.",
        };
    }

    const { testId, testType, projectId, newRecords } = validationResult.data;

    let createdRecords;

    if (testType === "material") {
        const { data, error } = await tryCatch(
            (async () => {
                const materialRecords = newRecords.map<
                    Omit<CreateMaterialTestRecordDTO, "projectMaterialTestId">
                >((record) => ({
                    fileName: record.fileName,
                    storagePath: record.storagePath,
                    fileSize: record.fileSize,
                    fileType: record.fileType,
                }));

                createdRecords =
                    await TestRecordService.createManyMaterialTestRecords(
                        testId,
                        materialRecords,
                    );

                return createdRecords;
            })(),
        );

        if (error) {
            return {
                success: false,
                error: "Failed to create material test records.",
            };
        }
        createdRecords = data;
    } else {
        // workItem

        const { data, error } = await tryCatch(
            (async () => {
                createdRecords =
                    await TestRecordService.createManyWorkItemTestRecords(
                        testId,
                        newRecords.map((record) => ({
                            fileName: record.fileName,
                            storagePath: record.storagePath,
                            fileSize: record.fileSize,
                            fileType: record.fileType,
                        })),
                    );

                return createdRecords;
            })(),
        );

        if (error) {
            return {
                success: false,
                error: "Failed to create material test records.",
            };
        }

        createdRecords = data;
    }

    revalidatePath(`/projects/${projectId}/test-records/${testId}/${testType}`);

    return { success: true, data: createdRecords };
}
