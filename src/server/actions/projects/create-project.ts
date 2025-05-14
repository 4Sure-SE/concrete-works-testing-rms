"use server";

import { createProjectSchema } from "@/app/(main)/projects/new/_components/create-project-form";
import type { ProjectActionState } from "@/lib/types/project/project.types";
import { tryCatch } from "@/lib/utils";
import { errorHandler } from "@/lib/utils/error-handler";
import { ProjectService } from "@/server/services/project.service";
import { revalidatePath } from "next/cache";

export async function createProject(
    _initialState: ProjectActionState,
    formData: FormData,
): Promise<ProjectActionState> {
    // make an object from the received form data
    const formDataObj = Object.fromEntries(formData.entries());

    // validate the object if it is in the correct format
    const {
        data: parsedData,
        error: parseError,
        success: parseSuccess,
    } = createProjectSchema.safeParse(formDataObj);

    // if it has errors return an object with the error message of each field
    if (!parseSuccess) {
        return {
            success: false,
            error: parseError.flatten().fieldErrors,
        };
    }

    // create a new project with the parsed data
    const { data, error: dbError } = await tryCatch(
        ProjectService.createNewProject(parsedData),
    );

    // if there's an error in creating the project in the db
    if (dbError) {
        const error = errorHandler(dbError);
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
