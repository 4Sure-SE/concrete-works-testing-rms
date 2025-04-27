"use server";

import { tryCatch } from "@/lib/utils/try-catch";
import { ProjectService } from "@/server/services/project.service";

type TestType = "material" | "workItem";

export const updateProjectTestOnFile = async (
    id: string | undefined,
    amount: number,
    type: TestType,
) => {
    if (typeof amount !== "number" || !id) {
        return { data: null, error: "Invalid Input" };
    }

    if (type === "workItem") {
        const { data: updatedWorkItemTest, error: updateError } =
            await tryCatch(
                ProjectService.updateProjectWorkItemsTestCount(id, amount),
            );

        if (updateError) {
            return {
                data: null,
                error: updateError || "Error updating work item test",
            };
        }

        return { data: updatedWorkItemTest, error: null };
    }

    if (type === "material") {
        const { data: updatedMaterialTest, error: updateError } =
            await tryCatch(
                ProjectService.updateProjectMaterialTestCount(id, amount),
            );

        if (updateError) {
            return {
                data: null,
                error: updateError.message || "Error updating material test",
            };
        }

        return { data: updatedMaterialTest, error: null };
    }

    return { data: null, error: "Invalid Test Type" };
};

export async function updateProjectTest(
    id: string | undefined,
    amount: number,
    type: "material" | "workItem",
): Promise<number> {
    const { data, error } = await updateProjectTestOnFile(id, amount, type);

    if (error) {
        console.error("Update Error:", error);
        return 0;
    }

    return data?.onFile ?? 0;
}
