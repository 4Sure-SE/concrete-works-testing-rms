"use server";

import { tryCatch } from "@/lib/utils/try-catch";
import { db } from "@/server/db";

type TestType = "material" | "workItem";

export const updateProjectTestOnFile = async (
    id: string | undefined,
    amount: number,
    type: TestType,
) => {
    if (typeof amount !== "number" || !id) {
        return { data: null, error: "Invalid Input" };
    }

    const findTest = async () => {
        if (type === "material") {
            return await tryCatch(
                db.projectMaterialTest.findUnique({ where: { id } }),
            );
        }
        return await tryCatch(
            db.projectWorkItemTest.findUnique({ where: { id } }),
        );
    };

    const { data: existingTest, error: findError } = await findTest();

    if (findError || !existingTest) {
        return { data: null, error: "Test Not Found" };
    }

    const newValue = Math.max(0, (existingTest.onFile ?? 0) + amount);

    const updateTest = async () => {
        if (type === "material") {
            return await db.projectMaterialTest.update({
                where: { id },
                data: { onFile: newValue },
            });
        }
        return await db.projectWorkItemTest.update({
            where: { id },
            data: { onFile: newValue },
        });
    };

    const updatedTest = await updateTest();

    return { data: updatedTest, error: null };
};

export async function UpdateProjectTest(
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
