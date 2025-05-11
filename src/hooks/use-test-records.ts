import type { WorkItemTestRecord } from "@/lib/types/work-item-test-record/work-item-test-record.types";
import { deleteTestRecord } from "@/server/actions/test-records/delete-test-record";
import { getTestRecords } from "@/server/actions/test-records/upload-test-record";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export function useTestRecords(testId: string, isOpen: boolean) {
    const [testRecords, setTestRecords] = useState<WorkItemTestRecord[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [deletingRecordIds, setDeletingRecordIds] = useState<string[]>([]);

    const TestRecords = useCallback(async () => {
        if (!testId) return;
        setIsLoading(true);
        setError(null);
        try {
            const result = await getTestRecords(testId);
            if (result.success) {
                setTestRecords(
                    (result as { success: true; data: WorkItemTestRecord[] })
                        .data,
                );
            } else {
                setError((result as { success: false; error: string }).error);
            }
        } catch (e) {
            setError(e instanceof Error ? e.message : "Unknown error");
        } finally {
            setIsLoading(false);
        }
    }, [testId]);

    useEffect(() => {
        if (isOpen) void TestRecords();
    }, [TestRecords, isOpen]);

    const addRecords = useCallback((newRecords: WorkItemTestRecord[]) => {
        setTestRecords((prev) => [...prev, ...newRecords]);
    }, []);

    const deleteRecord = useCallback(
        async (recordId: string, fileName: string) => {
            if (!testId || !recordId || !fileName) return;
            setDeletingRecordIds((prev) => [...prev, recordId]);
            setError(null);
            try {
                const result = await deleteTestRecord(
                    recordId,
                    fileName,
                    testId,
                );
                if (result.success) {
                    setTestRecords((prev) =>
                        prev.filter((r) => r.id !== recordId),
                    );
                    toast.success("Test record deleted successfully");
                } else {
                    const errorMessage =
                        "error" in result && typeof result.error === "string"
                            ? result.error
                            : "Failed to delete test record";
                    setError(errorMessage);
                    toast.error(errorMessage);
                }
            } catch (e) {
                setError(e instanceof Error ? e.message : "Unknown error");
                toast.error("Failed to delete test record");
            } finally {
                setDeletingRecordIds((prev) =>
                    prev.filter((id) => id !== recordId),
                );
            }
        },
        [testId],
    );

    const isDeletingRecord = useCallback(
        (recordId: string) => {
            return deletingRecordIds.includes(recordId);
        },
        [deletingRecordIds],
    );

    return {
        testRecords,
        isLoading,
        error,
        isDeletingRecord,
        addRecords,
        deleteRecord,
        refetch: TestRecords,
    };
}
