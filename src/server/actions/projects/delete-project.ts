"use server";

import type { ProjectActionState } from "@/lib/types/project/project.types";
import { tryCatch } from "@/lib/utils";
import { errorHandler } from "@/lib/utils/error-handler";
import { ProjectService } from "@/server/services/project.service";
import { revalidatePath } from "next/cache";

export async function deleteProject(
    projectId: string,
): Promise<ProjectActionState> {
    // delete the project with the given id
    const { data, error: cError } = await tryCatch(
        ProjectService.deleteProject(projectId),
    );

    // if there's an error in deleting the project in the db
    if (cError) {
        const error = errorHandler(cError);
        // if the target is undefined set it to a general error
        const errorKey =
            typeof error.target === "string" && error.target
                ? error.target
                : "general";
        return {
            success: false,
            error: { [errorKey]: [error.message] },
        };
    }

    // refetch projects on the /projects route
    revalidatePath("/projects");

    return {
        success: true,
        data,
    };
}
