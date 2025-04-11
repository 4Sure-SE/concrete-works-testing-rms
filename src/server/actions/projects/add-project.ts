"use server";

import {
    type ProjectActionState,
    projectFormSchema,
} from "@/lib/definitions/project";
import { formatDate, tryCatch } from "@/lib/utils";
import { errorHandler } from "@/lib/utils/error-handler";
import { db } from "@/server/db/db";
import { revalidatePath } from "next/cache";

export async function addProject(
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
    } = projectFormSchema.safeParse(formDataObj);

    // if it has errors return an object with the error message of each field
    if (!parseSuccess) {
        // const errors: ProjectActionErrors = {};

        // for (const { path, message } of parseError?.issues || []) {
        //     errors[path.join(".") as keyof ProjectActionErrors] = message;
        // }

        return {
            data: null,
            error: parseError.flatten().fieldErrors,
        };
    }

    // add the project data to the db
    const { data, error } = await tryCatch(
        db.project.create({
            data: {
                ...parsedData,
                dateStarted: new Date(parsedData.dateStarted), // convert date string to a date object
                contract_cost: 0,
            },
        }),
    );

    // if there's an error in creating the project in the db
    // set the error message on the "general" field of the error object and return it
    if (error) {
        const errorMsg = errorHandler(error).message;
        return { data: null, error: { general: [errorMsg] } };
    }

    revalidatePath("/projects");

    return {
        data: {
            ...data,
            dateStarted: formatDate(data.dateStarted) ?? "",
            location: data.location ?? undefined,
            limits: data.limits ?? undefined,
        },
        error: null,
    };
}
