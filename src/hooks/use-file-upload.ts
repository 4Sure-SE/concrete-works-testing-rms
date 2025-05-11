import type { WorkItemTestRecord } from "@/lib/types/work-item-test-record/work-item-test-record.types";
import { uploadTestRecord } from "@/server/actions/test-records/upload-test-record";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export interface FileUploadFile {
    name: string;
    size: number;
    file: File;
}

export function useFileUpload(
    testId: string,
    testType: "work-item",
    onSuccess: (records: WorkItemTestRecord[]) => void,
) {
    const [files, setFiles] = useState<FileUploadFile[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileDrop = useCallback((acceptedFiles: File[]) => {
        const newFiles = acceptedFiles.map((file) => ({
            name: file.name,
            size: file.size,
            file,
        }));
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        setError(null);
    }, []);

    const uploadFiles = useCallback(async () => {
        if (files.length === 0) return;

        setIsSubmitting(true);
        setError(null);

        try {
            const formData = new FormData();
            files.forEach((file) => formData.append("files", file.file));
            formData.append("testId", testId);
            formData.append("testType", testType);

            const result = await uploadTestRecord(formData);

            if (result.success) {
                const fileText = files.length !== 1 ? "files" : "file";
                toast.success(
                    `Successfully uploaded ${files.length} test record ${fileText}`,
                );
                setFiles([]);
                if ("data" in result && result.data) {
                    onSuccess(result.data);
                }
            } else {
                const errorMessage =
                    "error" in result
                        ? result.error
                        : "Failed to upload test records.";
                setError(errorMessage ?? "Failed to upload test records.");
                toast.error(errorMessage ?? "Failed to upload test records.");
            }
        } catch (error) {
            console.error("Error uploading files:", error);
            const errorMessage =
                "Failed to upload test records. Please try again.";
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    }, [files, testId, testType, onSuccess]);

    const resetFiles = useCallback(() => {
        setFiles([]);
        setError(null);
    }, []);

    const removeFile = useCallback((fileName: string) => {
        setFiles((prevFiles) =>
            prevFiles.filter((file) => file.name !== fileName),
        );
        setError(null);
    }, []);

    return {
        files,
        isSubmitting,
        error,
        onDrop: handleFileDrop,
        uploadFiles,
        resetFiles,
        removeFile,
        setError,
    };
}
