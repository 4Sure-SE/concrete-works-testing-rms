import { TestRecordModal } from "@/app/(main)/projects/[id]/_components/test-columns/test-record-modal";
import { TestRecordModalSkeleton } from "@/app/(main)/projects/[id]/_components/test-columns/test-record-modal-skeleton";
import type { TestType } from "@/lib/types/project-test/project-test.types";
import { tryCatch } from "@/lib/utils";
import { TestRecordService } from "@/server/services/test-records.service";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// maybe change the naming as well since this is technically not a page
export default async function TestRecordsModalPage({
    params,
}: {
    params: Promise<{ testId: string; testType: string; token: string }>;
}) {
    const { testId, testType, token: token } = await params;

    return (
        <Suspense fallback={<TestRecordModalSkeleton />}>
            <ResolvedModalContent
                testId={testId}
                testType={testType as TestType}
                projectId={token}
            />
        </Suspense>
    );
}

// maybe you can change the naming
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
            isReadOnly={true}
        />
    );
}
