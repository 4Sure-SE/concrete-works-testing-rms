"use server";

import { createProjectWorkItemSchema } from "@/app/(main)/projects/[id]/work-items/_components/add-work-item-form.schema";
import type { ProjectWorkItemActionState } from "@/lib/types/work-item";
import { tryCatch } from "@/lib/utils";
import { errorHandler } from "@/lib/utils/error-handler";
import { ProjectService } from "@/server/services/project.service";
import { revalidatePath } from "next/cache";

export async function createProjectWorkItem(
    projectId: string,
    _initialState: ProjectWorkItemActionState,
    formData: FormData,
): Promise<ProjectWorkItemActionState> {
    // make an object from the received form data
    const formDataObj = Object.fromEntries(formData.entries());

    // validate the object if it is in the correct format
    const {
        data: parsedData,
        error: parseError,
        success: parseSuccess,
    } = createProjectWorkItemSchema.safeParse(formDataObj);

    // if it has errors return an object with the error message of each field
    if (!parseSuccess) {
        return {
            success: false,
            error: parseError.flatten().fieldErrors,
        };
    }

    // create a new project with the parsed data
    const { data, error } = await tryCatch(
        ProjectService.createProjectWorkItem(projectId, parsedData),
    );

    // if there's an error in creating the project in the db
    // set the error message on the "general" field of the error object and return it
    if (error) {
        console.log(error.message);
        const errorMsg = errorHandler(error).message;
        return { success: false, error: { general: [errorMsg] } };
    }

    revalidatePath("/projects");

    return {
        success: true,
        data: data,
    };
}
