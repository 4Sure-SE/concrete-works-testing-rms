import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useCallback } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";

export const MAX_FILE_SIZE = 10485760;
export const ACCEPTED_FILE_TYPES = {
    "application/pdf": [".pdf"],
};

interface FileUploadAreaProps {
    onDrop: (acceptedFiles: File[]) => void;
    onDropRejected?: (fileRejections: FileRejection[]) => void;
    error: string | null;
    disabled?: boolean;
    setError?: (error: string | null) => void;
    filesCount?: number;
}

export function FileUploadArea({
    onDrop,
    onDropRejected,
    error,
    disabled = false,
    setError,
    filesCount = 0,
}: FileUploadAreaProps) {
    const handleFileRejection = useCallback(
        (fileRejections: FileRejection[]) => {
            const errors = fileRejections.map((rejection) => {
                const isFileTypeError = rejection.errors.some(
                    (err) => err.code === "file-invalid-type",
                );

                if (isFileTypeError) {
                    return `${rejection.file.name}: Invalid file type. Only PDF files are accepted.`;
                }
                const errorMessage =
                    rejection.errors[0]?.message?.replace(
                        /\d+ bytes/i,
                        "10 MB",
                    ) ?? "Unknown error";
                return `${rejection.file.name}: ${errorMessage}`;
            });

            const errorMessage = errors.length > 0 ? errors.join(", ") : null;

            if (setError) {
                setError(errorMessage);
            }

            if (onDropRejected) {
                onDropRejected(fileRejections);
            }
        },
        [onDropRejected, setError],
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        onDropRejected: handleFileRejection,
        accept: ACCEPTED_FILE_TYPES,
        maxSize: MAX_FILE_SIZE,
        disabled: disabled || filesCount >= MAX_FILES_LIMIT,
    });

    if (disabled) return null;

    if (filesCount >= MAX_FILES_LIMIT) {
        return (
            <div className="rounded-md border-2 border-dashed border-gray-200 bg-gray-50 p-6 text-center">
                <Upload
                    className="mx-auto mb-3 h-9 w-9 text-gray-300"
                    aria-hidden="true"
                />
                <p className="text-sm text-gray-500">
                    Maximum file limit reached ({MAX_FILES_LIMIT} files)
                </p>
                <p className="mt-1 text-xs text-gray-400">
                    Please remove some files before uploading more
                </p>
            </div>
        );
    }

    return (
        <div
            {...getRootProps()}
            className={`cursor-pointer rounded-md border-2 border-dashed p-6 text-center transition-colors ${
                isDragActive
                    ? "bg-primary-50 border-primary"
                    : "border-gray-300 hover:border-gray-400"
            }`}
            role="button"
            aria-label="Upload test records"
            tabIndex={0}
        >
            <input
                {...getInputProps()}
                aria-label="File input"
            />
            <div className="flex flex-col items-center justify-center">
                <Upload
                    className="mb-3 h-9 w-9 text-gray-400"
                    aria-hidden="true"
                />
                <p className="text-sm text-gray-600">
                    {isDragActive
                        ? "Drop the files here..."
                        : "Drag and drop files here or click to browse"}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                    Accepted formats: PDF (Max 10MB) • Maximum {MAX_FILES_LIMIT}{" "}
                    files
                </p>
                {error && (
                    <p
                        className="mt-2 text-xs text-red-500"
                        role="alert"
                    >
                        {error}
                    </p>
                )}
                <Button
                    type="button"
                    variant="default"
                    size="sm"
                    className="mt-3"
                >
                    Upload Files
                </Button>
            </div>
        </div>
    );
}
