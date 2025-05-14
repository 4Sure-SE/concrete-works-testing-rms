"use server";

import type { ProjectWorkItemActionState } from "@/lib/types/work-item";
import { tryCatch } from "@/lib/utils";
import { errorHandler } from "@/lib/utils/error-handler";
import { ProjectService } from "@/server/services/project.service";
import { revalidatePath } from "next/cache";

export async function deleteProjectWorkItem(
    projectWorkItemId: string,
): Promise<ProjectWorkItemActionState> {
    // delete the project work item in the db
    const { data, error } = await tryCatch(
        ProjectService.deleteProjectWorkItem(projectWorkItemId),
    );

    // if there's an error in deleting the project in the db
    // set the error message on the "general" field of the error object and return it
    if (error) {
        console.log(error.message);
        const errorMsg = errorHandler(error).message;
        return { success: false, error: { general: [errorMsg] } };
    }

    // refetch project work items data on the /projects/[id]/work-items route
    revalidatePath(`/projects`);
    revalidatePath(`/projects/[id]`, "page");
    revalidatePath(`/projects/[id]/work-items`, "page");

    return {
        success: true,
        data: data,
    };
}
