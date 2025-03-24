import "server-only";

import { tryCatch } from "@/lib/tryCatch";
import { db } from "@/server/db/db";
import mockProjects from "./mock-projects";

const getProjects = async () => {
    if (process.env.NODE_ENV === "development") {
        return { data: mockProjects, error: null };
    }

    const { data, error } = await tryCatch(db.projects.findMany());

    if (error) return { data: null, error: "Failed to fetch projects" };

    return { data, error: null };
};

export default getProjects;
