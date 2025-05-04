"use client";

import { ProjectWorkItemsTable } from "@/app/(main)/projects/[id]/_components/table/table";
import type { Projects } from "@/lib/types/project";

export function ReadOnlyProjectContent({ project }: { project: Projects }) {
    // function that doesn't actually do anything
    // since we're in read-only mode
    const dummyUpdate = async (
        _id: string | undefined,
        _amount: number,
        _type: "material" | "workItem",
    ): Promise<number> => {
        return 0;
    };

    return (
        <>
            <ProjectWorkItemsTable
                project={project}
                onServerUpdate={dummyUpdate}
                isReadOnly={true}
            />
        </>
    );
}
