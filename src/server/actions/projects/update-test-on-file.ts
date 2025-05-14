"use server";

import type {
    ProjectTestActionState,
    TestType,
} from "@/lib/types/project-test/project-test.types";
import { tryCatch } from "@/lib/utils/try-catch";
import { ProjectService } from "@/server/services/project.service";
import { revalidatePath } from "next/cache";

export const updateProjectTestOnFile = async (
    id: string,
    amount: number,
    type: TestType,
): Promise<ProjectTestActionState> => {
    if (typeof amount !== "number") {
        return { success: false, error: "Invalid Input" };
    }

    if (type === "work-item") {
        const { data: updatedWorkItemTest, error: updateError } =
            await tryCatch(
                ProjectService.updateProjectWorkItemsTestCount(id, amount),
            );

        if (updateError) {
            return {
                success: false,
                error: updateError.message || "Error updating work item test",
            };
        }

        revalidatePath("/projects");
        revalidatePath(`/projects/[id]`);

        return { success: true, data: updatedWorkItemTest };
    }

    if (type === "material") {
        const { data: updatedMaterialTest, error: updateError } =
            await tryCatch(
                ProjectService.updateProjectMaterialTestCount(id, amount),
            );

        if (updateError) {
            return {
                success: false,
                error: updateError.message || "Error updating material test",
            };
        }

        revalidatePath("/projects");
        revalidatePath(`/projects/[id]`);

        return { success: true, data: updatedMaterialTest };
    }

    return { success: false, error: "Invalid Test Type" };
};
