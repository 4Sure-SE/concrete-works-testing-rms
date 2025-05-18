import type {
    MaterialTestRecordDTO,
    WorkItemTestRecordDTO,
} from "@/lib/types/test-record/test-record.types";
import { FileTextIcon } from "lucide-react";
import Link from "next/link";

import { DeleteDialog } from "@/components/custom/delete-dialog";
import { formatBytes } from "@/components/custom/dropzone";
import { cn } from "@/lib/utils";

type TestRecordDisplayItem = WorkItemTestRecordDTO | MaterialTestRecordDTO;

interface TestRecordListProps {
    records: TestRecordDisplayItem[];
    isReadOnly?: boolean;
    onDelete?: (
        recordId: string,
        storagePath: string,
        fileName: string,
    ) => Promise<void>;
    isLoading?: boolean;
    className?: string;
}

export function TestRecordList({
    records = [],
    isReadOnly = false,
    onDelete,
    isLoading = false,

    className,
}: TestRecordListProps) {
    return (
        <div>
            <h4 className="text-md mt-6 mb-2 font-semibold">
                {records.length > 0 || (isLoading && !isReadOnly)
                    ? "Uploaded Records"
                    : isReadOnly && records.length === 0
                      ? "No Records Found"
                      : "No Records Uploaded Yet"}
            </h4>
            <div className={cn("space-y-2", className)}>
                {records.map((file) => (
                    <div
                        key={file.id}
                        className="flex items-center justify-between rounded-md border bg-background p-3 transition-colors hover:bg-muted/30"
                    >
                        <div className="flex min-w-0 flex-1 items-center gap-3">
                            <FileTextIcon className="h-6 w-6 shrink-0 text-blue-500" />
                            <div className="min-w-0 flex-1">
                                <Link
                                    href={file.fileUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block truncate text-sm font-medium text-primary hover:underline"
                                    title={file.fileName}
                                >
                                    {file.fileName}
                                </Link>
                                <div className="text-xs text-muted-foreground">
                                    <span>{formatBytes(file.fileSize)}</span>
                                    <span className="mx-1">·</span>
                                    <span>
                                        {new Date(
                                            file.createdAt,
                                        ).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {!isReadOnly && onDelete && (
                            <DeleteDialog
                                entityId={file.id}
                                entityName={"Test Record"}
                                entityAlias={file.fileName}
                                onDeleteAction={() =>
                                    onDelete(
                                        file.id,
                                        file.storagePath,
                                        file.fileName,
                                    )
                                }
                                disabled={isLoading}
                            ></DeleteDialog>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
