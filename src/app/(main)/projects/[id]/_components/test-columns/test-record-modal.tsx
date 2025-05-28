"use client";

import { Loader2, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useOptimistic, useTransition } from "react";
import { toast } from "sonner";

import {
    Dropzone,
    DropzoneContent,
    DropzoneEmptyState,
} from "@/components/custom/dropzone";
import { DialogContent } from "@/components/custom/hidden-close-button-dialog";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useSupabaseUpload } from "@/hooks/use-supabase-upload";
import type { TestType } from "@/lib/types/project-test/project-test.types";
import type {
    MaterialTestRecordDTO,
    WorkItemTestRecordDTO,
} from "@/lib/types/test-record/test-record.types";
import { withCallbacks } from "@/lib/utils";
import { deleteTestRecord } from "@/server/actions/test-records";
import { createManyTestRecords } from "@/server/actions/test-records/create-many-test-records";
import { TestRecordList } from "./test-record-list";

const BUCKET_NAME = "test-records";
const MAX_FILE_SIZE = 1000 * 1000 * 10; // 10MB
const MAX_FILES_LIMIT = 5;
const ACCEPTED_FILE_TYPES = ["application/pdf"];

export type TestRecordDTO = WorkItemTestRecordDTO | MaterialTestRecordDTO;

interface ModalContentProps {
    testRecords: TestRecordDTO[];
    testId: string;
    testType: TestType;
    projectId: string;
    isReadOnly?: boolean;
}
type OptimisticAction = { type: "DELETE_PENDING"; payload: { id: string } };

export function TestRecordModal({
    testRecords,
    testId,
    testType,
    projectId,
    isReadOnly = false,
}: ModalContentProps) {
    const router = useRouter();

    const [isSavingToDb, startSavingToDbTransition] = useTransition();
    const [isDeleting, startDeletingTransition] = useTransition();

    const [optimisticTestRecords, setOptimisticTestRecords] = useOptimistic<
        TestRecordDTO[],
        OptimisticAction
    >(testRecords, (currentState, action) => {
        switch (action.type) {
            case "DELETE_PENDING":
                return currentState.filter(
                    (record) => record.id !== action.payload.id,
                );
            default:
                return currentState;
        }
    });

    const dropzoneProps = useSupabaseUpload({
        bucketName: BUCKET_NAME,
        path: `${testType}/${testId}`, // e.g., "material/material-test-id"
        allowedMimeTypes: ACCEPTED_FILE_TYPES,
        maxFiles: MAX_FILES_LIMIT,
        maxFileSize: MAX_FILE_SIZE,
    });

    const handleCloseModal = () => {
        // go back to project details page
        router.back();
    };

    const handleUploadAndSaveToDb = async () => {
        if (isReadOnly) return;

        const validFilesToUpload = dropzoneProps.files.filter(
            (f) => f.errors.length === 0,
        );
        if (validFilesToUpload.length === 0) {
            toast.info("No new valid files selected to upload.");
            return;
        }

        const supabaseUploadResults = await dropzoneProps.onUpload();

        const successfullyUploadedToStorage = supabaseUploadResults.filter(
            (result) =>
                !dropzoneProps.errors.some((e) => e.name === result.name),
        );

        if (successfullyUploadedToStorage.length === 0) {
            if (dropzoneProps.errors.length > 0) {
                toast.error(
                    "Files failed to upload to storage. Please check errors in the dropzone.",
                );
            } else {
                toast.info("No files were successfully uploaded to storage.");
            }
            return;
        }

        toast.info(
            `${successfullyUploadedToStorage.length} file(s) sent to storage. Saving records to database...`,
        );

        const recordsForDb: Parameters<
            typeof createManyTestRecords
        >[0]["newRecords"] = successfullyUploadedToStorage.map(
            (uploadedFile) => {
                return {
                    fileName: uploadedFile.name,
                    storagePath: uploadedFile.path,
                    fileSize: uploadedFile.originalFile.size,
                    fileType: uploadedFile.originalFile.type,
                };
            },
        );

        startSavingToDbTransition(async () => {
            const dbResult = await createManyTestRecords({
                testId,
                testType,
                projectId, // for revalidation
                newRecords: recordsForDb,
            });

            if (dbResult.success && dbResult.data) {
                toast.success(
                    `${dbResult.data.length} test record(s) saved successfully!`,
                );
                dropzoneProps.setFiles([]);
                dropzoneProps.setErrors([]);
            } else {
                toast.error(
                    dbResult.error ??
                        "Failed to save test records to database.",
                );
            }
        });
    };

    const handleDeleteRecord = async (
        recordId: string,
        storagePath: string,
        fileName: string,
    ) => {
        if (isReadOnly) return;

        if (!recordId || !storagePath) {
            toast.error("Cannot delete record: missing ID or storage path.");
            return;
        }

        startDeletingTransition(async () => {
            setOptimisticTestRecords({
                type: "DELETE_PENDING",
                payload: { id: recordId },
            });
        });

        const action = withCallbacks(
            deleteTestRecord.bind(null, {
                id: recordId,
                storagePath,
                fileName,
                projectId,
                testId,
                testType,
            }),
            {
                onSuccess: () => {
                    startDeletingTransition(() => {
                        toast.success(
                            `Record "${fileName}" deleted successfully.`,
                        );
                    });
                },
                onError: (error) => {
                    startDeletingTransition(() => {
                        toast.error(
                            error || `Failed to delete record "${fileName}".`,
                        );
                    });
                },
            },
        );

        await action();
    };

    const isLoadingOverall =
        dropzoneProps.loading || isSavingToDb || isDeleting;

    return (
        <Dialog
            defaultOpen
            onOpenChange={(isOpen) => {
                if (!isOpen) handleCloseModal();
            }}
        >
            <DialogContent
                hideCloseButton
                className="flex max-h-[90vh] w-full max-w-lg flex-col p-0 shadow-xl sm:max-w-xl md:max-w-2xl"
            >
                <DialogHeader className="flex flex-shrink-0 flex-row items-center justify-between border-b px-6 pt-5 pb-4">
                    <DialogTitle className="text-lg font-semibold sm:text-xl">
                        {isReadOnly
                            ? "View Test Records"
                            : "Manage Test Records"}
                    </DialogTitle>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCloseModal}
                        disabled={isLoadingOverall}
                        className="-mr-2 h-8 w-8"
                    >
                        <XIcon className="h-5 w-5" />
                    </Button>
                </DialogHeader>

                <div className="flex-grow space-y-6 overflow-y-auto px-6 py-4">
                    {!isReadOnly && (
                        <div className="mb-2">
                            <Dropzone {...dropzoneProps}>
                                <DropzoneEmptyState />

                                <DropzoneContent className="max-h-[180px] md:max-h-[200px]" />
                            </Dropzone>
                        </div>
                    )}

                    <div>
                        <TestRecordList
                            records={optimisticTestRecords}
                            isReadOnly={isReadOnly}
                            onDelete={handleDeleteRecord}
                            isLoading={isLoadingOverall}
                        />
                    </div>
                </div>

                <DialogFooter className="mt-auto flex flex-shrink-0 justify-end gap-2 border-t px-6 pt-4 pb-5">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleCloseModal}
                        disabled={isLoadingOverall}
                    >
                        {isReadOnly ? "Close" : "Cancel"}
                    </Button>
                    {!isReadOnly && (
                        <Button
                            type="button"
                            className="cursor-pointer"
                            onClick={handleUploadAndSaveToDb}
                            disabled={
                                dropzoneProps.loading ||
                                isSavingToDb ||
                                dropzoneProps.files.filter(
                                    (f) =>
                                        f.errors.length === 0 &&
                                        !dropzoneProps.successes.includes(
                                            f.name,
                                        ),
                                ).length === 0
                            }
                        >
                            {(dropzoneProps.loading || isSavingToDb) && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            {dropzoneProps.loading
                                ? "Uploading..."
                                : isSavingToDb
                                  ? "Saving..."
                                  : "Upload & Save Selected"}
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
