import "server-only";

import { tryCatch } from "@/lib/utils/try-catch";
import { db } from "@/server/db/db";

const getProjects = async () => {
    const { data, error } = await tryCatch(db.project.findMany());

    if (error) return { data: null, error: "Failed to fetch projects" };

    return { data, error: null };
};

export default getProjects;
