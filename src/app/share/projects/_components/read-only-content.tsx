"use client";

import { ProjectWorkItemsTable } from "@/app/(main)/projects/[id]/_components/table/table";
import type { Projects } from "@/lib/types/project";

export function ReadOnlyProjectContent({ project }: { project: Projects }) {
    return (
        <>
            <ProjectWorkItemsTable
                initialProjectData={project}
                isReadOnly={true}
            />
        </>
    );
}
