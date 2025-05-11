import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useFileUpload } from "@/hooks/use-file-upload";
import { useTestRecords } from "@/hooks/use-test-records";
import { Loader2 } from "lucide-react";
import { useCallback } from "react";
import { FileUploadArea } from "./test-record/file-upload-area";
import { FilesList } from "./test-record/files-list";

interface TestRecordModalProps {
    isOpen: boolean;
    onClose: () => void;
    testId: string;
    testType: "work-item";
    isReadOnly?: boolean;
}

export function TestRecordModal({
    isOpen,
    onClose,
    testId,
    testType,
    isReadOnly = false,
}: TestRecordModalProps) {
    const {
        testRecords,
        isLoading,
        error: recordsError,
        addRecords,
        deleteRecord,
        isDeletingRecord,
    } = useTestRecords(testId, isOpen);

    const {
        files,
        isSubmitting,
        error: fileError,
        onDrop,
        uploadFiles,
        resetFiles,
        removeFile,
        setError,
    } = useFileUpload(testId, testType, addRecords);

    const handleClose = useCallback(() => {
        if (!isSubmitting) {
            resetFiles();
            onClose();
        }
    }, [isSubmitting, resetFiles, onClose]);

    const handleSaveChanges = useCallback(async () => {
        if (files.length === 0) return;
        await uploadFiles();
        if (!fileError) {
            onClose();
        }
    }, [files.length, uploadFiles, fileError, onClose]);

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) {
                    handleClose();
                }
            }}
        >
            <DialogContent
                className="sm:max-w-md"
                hideCloseButton
            >
                <DialogHeader>
                    <DialogTitle>
                        {isReadOnly ? "View Test Records" : "Add Test Records"}
                    </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    {recordsError && (
                        <div
                            className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700"
                            role="alert"
                        >
                            {recordsError}
                        </div>
                    )}
                    <FileUploadArea
                        onDrop={onDrop}
                        error={fileError}
                        disabled={isReadOnly}
                        setError={setError}
                    />
                    <FilesList
                        pendingFiles={files}
                        uploadedFiles={testRecords}
                        isLoading={isLoading}
                        isReadOnly={isReadOnly}
                        onRemoveFile={removeFile}
                        onDeleteFile={deleteRecord}
                        isDeletingRecord={isDeletingRecord}
                    />
                </div>
                <DialogFooter
                    className={isReadOnly ? "" : "sm:justify-between"}
                >
                    {isReadOnly ? (
                        <Button
                            type="button"
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    ) : (
                        <>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleClose}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="button"
                                onClick={handleSaveChanges}
                                disabled={files.length === 0 || isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    "Save Changes"
                                )}
                            </Button>
                        </>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
