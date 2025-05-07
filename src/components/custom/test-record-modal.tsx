import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { FileText, Loader2, Upload, X } from "lucide-react";
import { useCallback, useState } from "react";
import type { FileRejection } from "react-dropzone";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

interface TestRecordFile {
    name: string;
    size: number;
    file: File;
}

interface TestRecordModalProps {
    isOpen: boolean;
    onClose: () => void;
    testId: string;
    testType: "material" | "work-item";
}

export function TestRecordModal({
    isOpen,
    onClose,
    testId,
    testType,
}: TestRecordModalProps) {
    const [files, setFiles] = useState<TestRecordFile[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileError, setFileError] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFileError(null);
        const newFiles = acceptedFiles.map((file) => ({
            name: file.name,
            size: file.size,
            file,
        }));
        setFiles((prev) => [...prev, ...newFiles]);
    }, []);
    const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
        const errors = fileRejections.map((rejection) => {
            let errorMessage = rejection.errors[0]?.message ?? "Unknown error";
            if (errorMessage.includes("larger than")) {
                errorMessage = errorMessage.replace(/\d+ bytes/i, "10 MB");
            }
            return `${rejection.file.name}: ${errorMessage}`;
        });
        setFileError(errors.join(", "));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        onDropRejected,
        accept: {
            "application/pdf": [".pdf"],
        },
        maxSize: 10485760,
    });

    const removeFile = (fileName: string) => {
        setFiles((prev) => prev.filter((file) => file.name !== fileName));
    };

    const handleSaveChanges = async () => {
        try {
            setIsSubmitting(true);

            const formData = new FormData();
            files.forEach((file) => {
                formData.append("files", file.file);
            });
            formData.append("testId", testId);
            formData.append("testType", testType);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            toast.success(
                `Successfully uploaded ${files.length} test record file${
                    files.length !== 1 ? "s" : ""
                }`,
            );
            setFiles([]);
            onClose();
        } catch (error) {
            console.error("Error uploading files:", error);
            toast.error("Failed to upload test records. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / 1048576).toFixed(1)} MB`;
    };

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                if (!isSubmitting && !open) {
                    onClose();
                }
            }}
        >
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add Test Records</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <div
                        {...getRootProps()}
                        className={`cursor-pointer rounded-md border-2 border-dashed p-6 text-center transition-colors ${
                            isDragActive
                                ? "bg-primary-50 border-primary"
                                : "border-gray-300 hover:border-gray-400"
                        }`}
                    >
                        <input {...getInputProps()} />
                        <div className="flex flex-col items-center justify-center">
                            <Upload className="mb-3 h-9 w-9 text-gray-400" />
                            <p className="text-sm text-gray-600">
                                {isDragActive
                                    ? "Drop the files here..."
                                    : "Drag and drop files here or click to browse"}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                                Accepted formats: PDF (Max 10MB)
                            </p>
                            {fileError && (
                                <p className="mt-2 text-xs text-red-500">
                                    {fileError}
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

                    {files.length > 0 && (
                        <div className="mt-6">
                            <h4 className="mb-2 text-sm font-medium">
                                Test Records ({files.length})
                            </h4>
                            <div className="max-h-[200px] space-y-2 overflow-y-auto">
                                {files.map((file) => (
                                    <div
                                        key={file.name}
                                        className="flex items-center justify-between rounded-md border p-3"
                                    >
                                        <div className="flex items-center">
                                            <div className="mr-2 flex-shrink-0">
                                                <FileText className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <div>
                                                <p className="max-w-[180px] truncate text-sm font-medium">
                                                    {file.name}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {formatFileSize(file.size)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="h-8 w-8 p-0 text-gray-500"
                                                disabled={isSubmitting}
                                                onClick={() =>
                                                    removeFile(file.name)
                                                }
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <DialogFooter className="sm:justify-between">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onClose}
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
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
