"use server";

import { createProjectSchema } from "@/app/(main)/projects/new/_components/project-form";
import type {
    CreateProjectInitialState,
    CreateProjectReturnState,
} from "@/lib/types/project/project.types";
import { tryCatch } from "@/lib/utils";
import { errorHandler } from "@/lib/utils/error-handler";
import { ProjectService } from "@/server/services/project.service";
import { revalidatePath } from "next/cache";

export async function addProject(
    _initialState: CreateProjectInitialState,
    formData: FormData,
): Promise<CreateProjectReturnState> {
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
            data: null,
            error: parseError.flatten().fieldErrors,
        };
    }

    // create a new projec with the parsed data
    const { data, error } = await tryCatch(
        ProjectService.createNewProject(parsedData),
    );

    // if there's an error in creating the project in the db
    // set the error message on the "general" field of the error object and return it
    if (error) {
        const errorMsg = errorHandler(error).message;
        return { data: null, error: { general: [errorMsg] } };
    }

    // refetch projects on the /projects route
    revalidatePath("/projects");

    return {
        data,
        error: null,
    };
}
