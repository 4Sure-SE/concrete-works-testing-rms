import { TestRecordModal } from "@/app/(main)/projects/[id]/_components/test-columns/test-record-modal";
import { TestRecordModalSkeleton } from "@/app/(main)/projects/[id]/_components/test-columns/test-record-modal-skeleton";
import type { TestType } from "@/lib/types/project-test/project-test.types";
import { tryCatch } from "@/lib/utils";
import { TestRecordService } from "@/server/services/test-records.service";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function TestRecordsModalPage({
    params,
}: {
    params: Promise<{ testId: string; testType: string; id: string }>;
}) {
    const { testId, testType, id: projectId } = await params;

    return (
        <Suspense fallback={<TestRecordModalSkeleton />}>
            <ResolvedModalContent
                testId={testId}
                testType={testType as TestType}
                projectId={projectId}
            />
        </Suspense>
    );
}

async function ResolvedModalContent({
    testId,
    testType,
    projectId,
}: {
    testId: string;
    testType: TestType;
    projectId: string;
}) {
    let data;
    if (testType == "material") {
        const res = await tryCatch(
            TestRecordService.getMaterialTestRecords(testId),
        );
        if (res.error) {
            throw res.error;
        }
        data = res.data;
    } else {
        const res = await tryCatch(
            TestRecordService.getWorkItemTestRecords(testId),
        );
        if (res.error) {
            throw res.error;
        }
        data = res.data;
    }

    if (!data) {
        notFound();
    }

    return (
        <TestRecordModal
            testRecords={data}
            testId={testId}
            testType={testType}
            projectId={projectId}
        />
    );
}
