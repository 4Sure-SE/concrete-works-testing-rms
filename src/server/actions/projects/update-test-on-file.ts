"use server";

import { tryCatch } from "@/lib/utils/try-catch";
import { db } from "@/server/db/db";

const updateProjectMaterialTestOnFile = async (
    id: string | undefined,
    amount: number,
) => {
    if (typeof amount !== "number" || !id) {
        return { data: null, error: "Invalid Input" };
    }

    const { data: existingTest, error: findError } = await tryCatch(
        db.projectMaterialTest.findUnique({ where: { id } }),
    );

    if (findError || !existingTest) {
        return { data: null, error: "Test Not Found" };
    }

    const newValue = Math.max(0, (existingTest.onFile ?? 0) + amount);

    const updatedTest = await db.projectMaterialTest.update({
        where: { id },
        data: { onFile: newValue },
    });

    return { data: updatedTest, error: null };
};

const updateProjectWorkItemTestOnFile = async (
    id: string | undefined,
    amount: number,
) => {
    if (typeof amount !== "number" || !id) {
        return { data: null, error: "Invalid Input" };
    }

    const { data: existingTest, error: findError } = await tryCatch(
        db.projectWorkItemTest.findUnique({ where: { id } }),
    );

    if (findError || !existingTest) {
        return { data: null, error: "Test Not Found" };
    }

    const newValue = Math.max(0, (existingTest.onFile ?? 0) + amount);

    const updatedTest = await db.projectWorkItemTest.update({
        where: { id },
        data: { onFile: newValue },
    });

    return { data: updatedTest, error: null };
};

export { updateProjectMaterialTestOnFile, updateProjectWorkItemTestOnFile };
