"use client";

import { Button } from "@/components/ui/button";
import { type UseSupabaseUploadReturn } from "@/hooks/use-supabase-upload";
import { cn } from "@/lib/utils/index";
import { FileTextIcon, Loader2, Upload, X } from "lucide-react";
import {
    createContext,
    type PropsWithChildren,
    useCallback,
    useContext,
} from "react";

export const formatBytes = (
    bytes: number,
    decimals = 2,
    size?: "bytes" | "KB" | "MB" | "GB" | "TB" | "PB" | "EB" | "ZB" | "YB",
) => {
    const k = 1000;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    if (bytes === 0 || bytes === undefined)
        return size !== undefined ? `0 ${size}` : "0 bytes";
    const i =
        size !== undefined
            ? sizes.indexOf(size)
            : Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

type DropzoneContextType = Omit<
    UseSupabaseUploadReturn,
    "getRootProps" | "getInputProps"
>;

const DropzoneContext = createContext<DropzoneContextType | undefined>(
    undefined,
);

type DropzoneProps = UseSupabaseUploadReturn & {
    className?: string;
};

const Dropzone = ({
    className,
    children,
    getRootProps,
    getInputProps,
    ...restProps
}: PropsWithChildren<DropzoneProps>) => {
    const isSuccess = restProps.isSuccess;
    const isActive = restProps.isDragActive;
    const isInvalid =
        (restProps.isDragActive && restProps.isDragReject) ||
        (restProps.errors.length > 0 && !isSuccess) ||
        restProps.files.some((file) => file.errors.length !== 0);

    return (
        <DropzoneContext.Provider value={{ ...restProps }}>
            <div
                {...getRootProps({
                    className: cn(
                        "border-2 border-gray-300 rounded-lg p-4 text-center bg-card transition-colors duration-300 text-foreground",
                        className,
                        isSuccess
                            ? "border-green-500 border-solid"
                            : "border-dashed",
                        isActive && "border-primary bg-primary/10",
                        isInvalid && "border-destructive bg-destructive/10",
                    ),
                })}
            >
                <input {...getInputProps()} />
                {children}
            </div>
        </DropzoneContext.Provider>
    );
};

const DropzoneContent = ({ className }: { className?: string }) => {
    const {
        files,
        setFiles,
        loading,
        successes,
        errors: uploadAttemptErrors,
        maxFileSize,
        maxFiles,
    } = useDropzoneContext();

    const exceedMaxFilesError = files.length > maxFiles;

    const handleRemoveFile = useCallback(
        (fileName: string) => {
            console.log("Removing file:", fileName);
            setFiles(files.filter((file) => file.name !== fileName));
            console.log("Updated files:", files);
        },
        [files, setFiles],
    );

    return (
        <div className={cn("flex flex-col text-left", className)}>
            {files.length > 0 && (
                <div
                    className={cn("mt-2 space-y-2 overflow-y-auto", "max-h-48")}
                >
                    {files.map((file, idx) => {
                        const isOverMaxFilesLimitError = file.errors.some(
                            (e) => e.code === "too-many-files",
                        );
                        const otherFileErrors = file.errors.filter(
                            (e) => e.code !== "too-many-files",
                        );
                        const uploadError = uploadAttemptErrors.find(
                            (e) => e.name === file.name,
                        );
                        const isSuccessfullyUploadedToStorage =
                            successes.includes(file.name);
                        const isCurrentlyUploading =
                            loading &&
                            !isSuccessfullyUploadedToStorage &&
                            !uploadError &&
                            files.some((f) => f.name === file.name);

                        const displayTooManyFilesErrorForThisFile =
                            isOverMaxFilesLimitError;

                        return (
                            <div
                                key={`${file.name}-${idx}`}
                                className={cn(
                                    "flex items-center gap-x-3 rounded-md border p-2.5",
                                    ((otherFileErrors.length > 0 ||
                                        uploadError) ??
                                        displayTooManyFilesErrorForThisFile) &&
                                        "border-destructive bg-destructive/5",
                                    isSuccessfullyUploadedToStorage &&
                                        "border-green-500 bg-green-500/5",
                                )}
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border bg-muted">
                                    <FileTextIcon
                                        size={20}
                                        className="text-muted-foreground"
                                    />
                                </div>

                                <div className="min-w-0 flex-grow">
                                    <p
                                        title={file.name}
                                        className="truncate text-sm font-medium"
                                    >
                                        {file.name}
                                    </p>

                                    {otherFileErrors.length > 0 && (
                                        <p className="text-xs text-destructive">
                                            {otherFileErrors
                                                .map((e) =>
                                                    e.message.startsWith(
                                                        "File is larger than",
                                                    )
                                                        ? `Too large: ${formatBytes(file.size, 2)} (max ${formatBytes(maxFileSize, 2)})`
                                                        : e.message,
                                                )
                                                .join(", ")}
                                        </p>
                                    )}
                                    {displayTooManyFilesErrorForThisFile &&
                                        !otherFileErrors.length && (
                                            <p className="text-xs text-destructive">
                                                Exceeds max file limit
                                            </p>
                                        )}
                                    {!otherFileErrors.length &&
                                        !displayTooManyFilesErrorForThisFile &&
                                        (isCurrentlyUploading ? (
                                            <p className="text-xs text-muted-foreground">
                                                Uploading to storage...
                                            </p>
                                        ) : uploadError ? (
                                            <p className="text-xs text-destructive">
                                                Storage upload failed:{" "}
                                                {uploadError.message}
                                            </p>
                                        ) : isSuccessfullyUploadedToStorage ? (
                                            <p className="text-xs text-green-600">
                                                Ready (
                                                {formatBytes(file.size, 2)})
                                            </p>
                                        ) : (
                                            <p className="text-xs text-muted-foreground">
                                                {formatBytes(file.size, 2)}
                                            </p>
                                        ))}
                                </div>

                                {isCurrentlyUploading ? (
                                    <Loader2 className="h-4 w-4 shrink-0 animate-spin text-muted-foreground" />
                                ) : (
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
                                        onClick={() =>
                                            handleRemoveFile(file.name)
                                        }
                                    >
                                        <X size={16} />
                                    </Button>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {exceedMaxFilesError && (
                <p className="mt-2 text-xs text-destructive">
                    Maximum {maxFiles} files allowed. Please remove{" "}
                    {files.length - maxFiles} file(s).
                </p>
            )}
        </div>
    );
};

const DropzoneEmptyState = ({ className }: { className?: string }) => {
    const { maxFiles, maxFileSize, inputRef, isSuccess } = useDropzoneContext();

    if (isSuccess) {
        return null;
    }

    return (
        <div className={cn("flex flex-col items-center gap-y-2", className)}>
            <Upload
                size={20}
                className="text-muted-foreground"
            />
            <p className="text-sm">
                Upload{!!maxFiles && maxFiles > 1 ? ` ${maxFiles}` : ""} file
                {!maxFiles || maxFiles > 1 ? "s" : ""}
            </p>
            <div className="flex flex-col items-center gap-y-1">
                <p className="text-xs text-muted-foreground">
                    Drag and drop or{" "}
                    <a
                        onClick={() => inputRef.current?.click()}
                        className="cursor-pointer underline transition hover:text-foreground"
                    >
                        select {maxFiles === 1 ? `file` : "files"}
                    </a>{" "}
                    to upload
                </p>
                {maxFileSize !== Number.POSITIVE_INFINITY && (
                    <p className="text-xs text-muted-foreground">
                        Maximum file size: {formatBytes(maxFileSize, 2)}
                    </p>
                )}
            </div>
        </div>
    );
};

const useDropzoneContext = () => {
    const context = useContext(DropzoneContext);

    if (!context) {
        throw new Error("useDropzoneContext must be used within a Dropzone");
    }

    return context;
};

export { Dropzone, DropzoneContent, DropzoneEmptyState, useDropzoneContext };
