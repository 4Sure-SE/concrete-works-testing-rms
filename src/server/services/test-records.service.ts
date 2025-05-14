import "server-only";

import { materialTestRecordToDTO } from "@/lib/adapters/test-record/material-test-record-to-dto";
import { workItemTestRecordToDTO } from "@/lib/adapters/test-record/work-item-test-record-to-dto";
import type {
    CreateMaterialTestRecordDTO,
    CreateWorkItemTestRecordDTO,
    MaterialTestRecordDTO,
    WorkItemTestRecordDTO,
} from "@/lib/types/test-record/test-record.types";
import {
    createManyProjectMaterialTestRecords,
    deleteProjectMaterialTestRecord,
    getProjectMaterialTestRecords,
} from "../data-access/project-material-test-record/project-material-test-record";
import {
    createManyProjectWorkItemTestRecords,
    deleteProjectWorkItemTestRecord,
    getProjectWorkItemTestRecords,
} from "../data-access/project-work-item-test-record/project-work-item-test-records";

export const TestRecordService = {
    async getWorkItemTestRecords(
        testd: string,
    ): Promise<WorkItemTestRecordDTO[]> {
        console.log(
            `[Service] Getting work item test records for testId: ${testd}`,
        );

        const rawTestRecords = await getProjectWorkItemTestRecords(testd);

        const dtoPromise = rawTestRecords
            .map(workItemTestRecordToDTO)
            .filter((record) => record !== null);

        const dto = await Promise.all(dtoPromise);

        return dto;
    },

    async getMaterialTestRecords(
        testd: string,
    ): Promise<MaterialTestRecordDTO[]> {
        console.log(
            `[Service] Getting material test records for testId: ${testd}`,
        );

        const rawTestRecords = await getProjectMaterialTestRecords(testd);

        const dtoPromise = rawTestRecords
            .map(materialTestRecordToDTO)
            .filter((record) => record !== null);

        const dto = await Promise.all(dtoPromise);

        return dto;
    },

    // create many work item test records
    async createManyWorkItemTestRecords(
        projectWorkItemTestId: string,
        data: Omit<CreateWorkItemTestRecordDTO, "projectWorkItemTestId">[],
    ): Promise<WorkItemTestRecordDTO[]> {
        console.log(
            `[Service] Creating work item test records for testId: ${projectWorkItemTestId}`,
        );

        const rawTestRecords = await createManyProjectWorkItemTestRecords(
            data.map((record) => ({
                ...record,
                projectWorkItemTestId,
            })),
        );

        const dtoPromise = rawTestRecords
            .map(workItemTestRecordToDTO)
            .filter((record) => record !== null);

        const dto = await Promise.all(dtoPromise);

        return dto;
    },

    // create many material test records
    async createManyMaterialTestRecords(
        projectMaterialTestId: string,
        data: Omit<CreateMaterialTestRecordDTO, "projectMaterialTestId">[],
    ): Promise<MaterialTestRecordDTO[]> {
        console.log(
            `[Service] Creating material test records for testId: ${projectMaterialTestId}`,
        );

        const rawTestRecords = await createManyProjectMaterialTestRecords(
            data.map((record) => ({
                ...record,
                projectMaterialTestId,
            })),
        );

        const dtoPromise = rawTestRecords
            .map(materialTestRecordToDTO)
            .filter((record) => record !== null);

        const dto = await Promise.all(dtoPromise);

        return dto;
    },

    // delete work item test record
    async deleteWorkItemTestRecord(
        id: string,
    ): Promise<WorkItemTestRecordDTO | null> {
        console.log(`[Service] Deleting work item test record for id: ${id}`);

        const rawTestRecord = await deleteProjectWorkItemTestRecord(id);

        if (!rawTestRecord) {
            throw new Error(
                `Failed to delete work item test record with id: ${id}`,
            );
        }

        const dto = await workItemTestRecordToDTO(rawTestRecord);

        return dto;
    },

    // delete material test record
    async deleteMaterialTestRecord(
        id: string,
    ): Promise<MaterialTestRecordDTO | null> {
        console.log(`[Service] Deleting material test record for id: ${id}`);

        const rawTestRecord = await deleteProjectMaterialTestRecord(id);

        if (!rawTestRecord) {
            throw new Error(
                `Failed to delete material test record with id: ${id}`,
            );
        }

        const dto = await materialTestRecordToDTO(rawTestRecord);

        return dto;
    },
};
