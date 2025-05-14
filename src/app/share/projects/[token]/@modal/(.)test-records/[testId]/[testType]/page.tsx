import { TestRecordModal } from "@/app/(main)/projects/[id]/_components/test-columns/test-record-modal";
import { Skeleton } from "@/components/ui/skeleton";
import type { TestType } from "@/lib/types/project-test/project-test.types";
import { tryCatch } from "@/lib/utils";
import { TestRecordService } from "@/server/services/test-records.service";
import { Suspense } from "react";

// revise this, it doesnt match the component itself
function ModalSkeleton() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-lg bg-card p-6 shadow-lg">
                <Skeleton className="mb-4 h-6 w-1/2" />
                <Skeleton className="mb-4 h-40 w-full" />
                <Skeleton className="mb-1 h-5 w-1/3" />{" "}
                <Skeleton className="mb-2 h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <div className="mt-6 flex justify-end">
                    <Skeleton className="h-10 w-20" />
                </div>
            </div>
        </div>
    );
}

// maybe change the naming as well since this is technically not a page
export default async function TestRecordsModalPage({
    params,
}: {
    params: Promise<{ testId: string; testType: string; token: string }>;
}) {
    const { testId, testType, token: token } = await params;

    return (
        <Suspense fallback={<ModalSkeleton />}>
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
