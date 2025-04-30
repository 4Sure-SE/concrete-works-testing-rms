"use server";

import { revalidatePath } from "next/cache";

import { updateProjectWorkItemSchema } from "@/app/(main)/projects/[id]/work-items/_components/update-project-work-item-form/update-project-work-item.schema";
import type { ProjectWorkItemActionState } from "@/lib/types/project-work-item/project-work-item.types";
import { tryCatch } from "@/lib/utils";
import { errorHandler } from "@/lib/utils/error-handler";
import { ProjectService } from "@/server/services/project.service";

export async function updateProjectWorkItem(
    projectWorkItemId: string,
    _prevState: ProjectWorkItemActionState | null,
    formData: FormData,
): Promise<ProjectWorkItemActionState> {
    const formDataObj = Object.fromEntries(formData.entries());

    const {
        data: parsedData,
        error: parseError,
        success: parseSuccess,
    } = updateProjectWorkItemSchema.safeParse(formDataObj);

    // if it has errors return an object with the error message of each field
    if (!parseSuccess) {
        return {
            success: false,
            error: parseError.flatten().fieldErrors,
        };
    }

    const { quantity } = parsedData;

    // update via service/use-case
    const { data: updatedDTO, error } = await tryCatch(
        // service handles conversion and logic
        ProjectService.updateProjectWorkItem(projectWorkItemId, {
            quantity: quantity,
        }),
    );

    if (error) {
        console.error("Error updating project work item quantity:", error);
        return {
            success: false,
            error: { general: [errorHandler(error).message] },
        };
    }

    revalidatePath("/projects");

    return {
        success: true,
        data: updatedDTO,
    };
}
