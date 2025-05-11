import type { FileUploadFile } from "@/hooks/use-file-upload";
import type { WorkItemTestRecord } from "@/lib/types/work-item-test-record/work-item-test-record.types";
import { FileText, Loader2, Trash2, X } from "lucide-react";
import { z } from "zod";

interface FilesListProps {
    uploadedFiles?: WorkItemTestRecord[];
    pendingFiles?: FileUploadFile[];
    isLoading?: boolean;
    isReadOnly?: boolean;
    onRemoveFile?: (fileName: string) => void;
    onDeleteFile?: (recordId: string, fileName: string) => Promise<void>;
    isDeletingRecord?: (recordId: string) => boolean;
}

const formatFileSize = (bytes: number): string => {
    const fileSizeSchema = z.number().positive();
    const validatedBytes = fileSizeSchema.parse(bytes);

    if (validatedBytes < 1024) return `${validatedBytes} B`;
    if (validatedBytes < 1048576)
        return `${(validatedBytes / 1024).toFixed(1)} KB`;
    return `${(validatedBytes / 1048576).toFixed(1)} MB`;
};

export function FilesList({
    uploadedFiles = [],
    pendingFiles = [],
    isLoading = false,
    isReadOnly = false,
    onRemoveFile,
    onDeleteFile,
    isDeletingRecord = () => false,
}: FilesListProps) {
    const hasUploadedFiles = uploadedFiles.length > 0;
    const hasPendingFiles = pendingFiles.length > 0;
    const hasNoFiles = !hasUploadedFiles && !hasPendingFiles;

    if (isLoading) {
        return (
            <div className="mt-6 flex justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
            </div>
        );
    }

    if (hasNoFiles) {
        if (isReadOnly) {
            return (
                <div className="py-8 text-center text-gray-500">
                    No test records available
                </div>
            );
        }
        return null;
    }

    return (
        <div className="mt-6 space-y-6">
            {hasPendingFiles && (
                <div>
                    <h4 className="mb-2 text-sm font-medium">
                        Files to Upload ({pendingFiles.length})
                    </h4>

                    <div className="max-h-[200px] space-y-2 overflow-y-auto">
                        {pendingFiles.map((file) => (
                            <div
                                key={file.name}
                                className="flex flex-col rounded-md border bg-yellow-50 p-3"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-1 items-center">
                                        <div className="mr-2 flex-shrink-0">
                                            <FileText className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <p className="max-w-[180px] truncate text-sm font-medium">
                                            {file.name}
                                        </p>
                                    </div>

                                    {onRemoveFile && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onRemoveFile(file.name)
                                            }
                                            className="ml-2 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600 focus:ring-2 focus:ring-gray-400 focus:outline-none"
                                            aria-label={`Remove ${file.name}`}
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    )}
                                </div>

                                {/* File metadata row */}
                                <div className="mt-1 flex items-center space-x-2 pl-7">
                                    <span className="text-xs text-gray-500">
                                        {formatFileSize(file.size)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {hasUploadedFiles && (
                <div>
                    <h4 className="mb-2 text-sm font-medium">
                        {isReadOnly
                            ? "Test Records "
                            : "Uploaded Test Records "}
                        ({uploadedFiles.length})
                    </h4>

                    <div
                        className={`${isReadOnly ? "max-h-[400px]" : "max-h-[200px]"} space-y-2 overflow-y-auto`}
                    >
                        {uploadedFiles.map((file) => (
                            <div
                                key={file.id}
                                className="flex flex-col rounded-md border bg-green-50 p-3"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-1 items-center">
                                        <div className="mr-2 flex-shrink-0">
                                            <FileText className="h-5 w-5 text-green-400" />
                                        </div>
                                        <p className="max-w-[180px] truncate text-sm font-medium">
                                            {file.fileName}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <a
                                            href={file.fileUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs text-blue-600 hover:bg-blue-200"
                                        >
                                            <FileText className="mr-1 h-3 w-3" />
                                            View
                                        </a>

                                        {!isReadOnly && onDeleteFile && (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    onDeleteFile(
                                                        file.id,
                                                        file.fileName,
                                                    )
                                                }
                                                className="flex items-center rounded-md bg-red-50 px-2 py-1 text-xs text-red-600 hover:bg-red-100"
                                                disabled={isDeletingRecord(
                                                    file.id,
                                                )}
                                                aria-label={`Delete ${file.fileName}`}
                                            >
                                                {isDeletingRecord(file.id) ? (
                                                    <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                                                ) : (
                                                    <Trash2 className="mr-1 h-3 w-3" />
                                                )}
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                </div>
                                {/* File metadata row */}
                                <div className="flex items-center space-x-2 pl-7">
                                    <span className="text-xs text-gray-500">
                                        {formatFileSize(file.fileSize)}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {new Date(
                                            file.uploadedAt,
                                        ).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
