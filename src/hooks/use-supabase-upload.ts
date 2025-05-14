"use client";

import { createClient } from "@/lib/supabase/client";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
    type FileError,
    type FileRejection,
    useDropzone,
} from "react-dropzone";

const supabase = createClient();

interface FileWithPreview extends File {
    preview?: string;
    errors: readonly FileError[];
}

type UseSupabaseUploadOptions = {
    /**
     * Name of bucket to upload files to in your Supabase project
     */
    bucketName: string;
    /**
     * Folder to upload files to in the specified bucket within your Supabase project.
     *
     * Defaults to uploading files to the root of the bucket
     *
     * e.g If specified path is `test`, your file will be uploaded as `test/file_name`
     */
    path?: string;
    /**
     * Allowed MIME types for each file upload (e.g `image/png`, `text/html`, etc). Wildcards are also supported (e.g `image/*`).
     *
     * Defaults to allowing uploading of all MIME types.
     */
    allowedMimeTypes?: string[];
    /**
     * Maximum upload size of each file allowed in bytes. (e.g 1000 bytes = 1 KB)
     */
    maxFileSize?: number;
    /**
     * Maximum number of files allowed per upload.
     */
    maxFiles?: number;
    /**
     * The number of seconds the asset is cached in the browser and in the Supabase CDN.
     *
     * This is set in the Cache-Control: max-age=<seconds> header. Defaults to 3600 seconds.
     */
    cacheControl?: number;
    /**
     * When set to true, the file is overwritten if it exists.
     *
     * When set to false, an error is thrown if the object already exists. Defaults to `false`
     */
    upsert?: boolean;
};

export interface SupabaseUploadSuccessResult {
    name: string;
    path: string; // The full path in Supabase storage
    // Add other useful metadata if Supabase SDK provides it easily after upload,
    // like public URL, but often you construct the public URL yourself.
    // For now, path is enough to construct URL or reference.
    originalFile: File; // Keep the original file for size, type if needed
}

type UseSupabaseUploadReturn = ReturnType<typeof useSupabaseUpload>;

const useSupabaseUpload = (options: UseSupabaseUploadOptions) => {
    const {
        bucketName,
        path,
        allowedMimeTypes = [],
        maxFileSize = Number.POSITIVE_INFINITY,
        maxFiles = 1,
        cacheControl = 3600,
        upsert = false,
    } = options;

    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ name: string; message: string }[]>(
        [],
    );
    const [successes, setSuccesses] = useState<string[]>([]);

    const isSuccess = useMemo(() => {
        if (errors.length === 0 && successes.length === 0) {
            return false;
        }
        if (errors.length === 0 && successes.length === files.length) {
            return true;
        }
        return false;
    }, [errors.length, successes.length, files.length]);

    const onDrop = useCallback(
        (acceptedFiles: File[], fileRejections: FileRejection[]) => {
            const validFiles = acceptedFiles
                .filter((file) => !files.find((x) => x.name === file.name))
                .map((file) => {
                    (file as FileWithPreview).preview =
                        URL.createObjectURL(file);
                    (file as FileWithPreview).errors = [];
                    return file as FileWithPreview;
                });

            const invalidFiles = fileRejections.map(({ file, errors }) => {
                (file as FileWithPreview).preview = URL.createObjectURL(file);
                (file as FileWithPreview).errors = errors;
                return file as FileWithPreview;
            });

            const newFiles = [...files, ...validFiles, ...invalidFiles];

            setFiles(newFiles);
        },
        [files, setFiles],
    );

    const dropzoneProps = useDropzone({
        onDrop,
        noClick: true,
        accept: allowedMimeTypes.reduce(
            (acc, type) => ({ ...acc, [type]: [] }),
            {},
        ),
        maxSize: maxFileSize,
        maxFiles: maxFiles,
        multiple: maxFiles !== 1,
    });

    const onUpload = useCallback(async (): Promise<
        SupabaseUploadSuccessResult[]
    > => {
        setLoading(true);
        setErrors([]);
        setSuccesses([]);
        const filesToUpload = files.filter((file) => file.errors.length === 0);

        if (filesToUpload.length === 0) {
            setLoading(false);
            return [];
        }

        const uploadResults: SupabaseUploadSuccessResult[] = [];
        const currentErrors: { name: string; message: string }[] = [];

        await Promise.all(
            filesToUpload.map(async (file) => {
                const filePath = !!path ? `${path}/${file.name}` : file.name;
                const { data: uploadData, error } = await supabase.storage
                    .from(bucketName)
                    .upload(filePath, file, {
                        cacheControl: cacheControl.toString(),
                        upsert,
                    });

                if (error) {
                    currentErrors.push({
                        name: file.name,
                        message: error.message,
                    });
                } else if (uploadData) {
                    uploadResults.push({
                        name: file.name,
                        path: uploadData.path,
                        originalFile: file,
                    });
                }
            }),
        );

        setErrors(currentErrors);
        setSuccesses(uploadResults.map((r) => r.name));
        setLoading(false);
        return uploadResults;
    }, [files, path, bucketName, cacheControl, upsert]);

    useEffect(() => {
        if (files.length === 0) {
            setErrors([]);
            setSuccesses([]);
        }

        if (files.length <= maxFiles) {
            let changed = false;
            const newFiles = files.map((file) => {
                if (file.errors.some((e) => e.code === "too-many-files")) {
                    file.errors = file.errors.filter(
                        (e) => e.code !== "too-many-files",
                    );
                    changed = true;
                }
                return file;
            });
            if (changed) {
                setFiles(newFiles);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [files.length, setFiles, maxFiles]);

    return {
        files,
        setFiles,
        successes,
        isSuccess,
        loading,
        errors,
        setErrors,
        onUpload,
        maxFileSize: maxFileSize,
        maxFiles: maxFiles,
        allowedMimeTypes,
        ...dropzoneProps,
    };
};

export {
    useSupabaseUpload,
    type UseSupabaseUploadOptions,
    type UseSupabaseUploadReturn,
};
