// import "server-only";

// import { tryCatch } from "@/lib/utils/try-catch";
// import { db } from "@/server/db/db";

// const getProjects = async () => {
//     const { data, error } = await tryCatch(db.project.findMany());

//     if (error) return { data: null, error: "Failed to fetch projects" };

//     return { data, error: null };
// };

// export default getProjects;

import "server-only";

import { tryCatch } from "@/lib/utils/try-catch";
import { db } from "@/server/db/db";

const getProjects = async () => {
    const { data: rawProjects, error } = await tryCatch(db.project.findMany());

    if (error) return { data: null, error: "Failed to fetch projects" };

    // Transform the projects to convert Decimal objects to numbers
    const transformedProjects = rawProjects.map((project) => ({
        id: project.id,
        contractId: project.contractId,
        contractName: project.contractName,
        contractor: project.contractor,
        limits: project.limits,
        location: project.location,
        dateStarted: project.dateStarted,
        createdAt: project.createdAt,
        materialsEngineer: project.materialsEngineer,
        contract_cost: project.contract_cost.toNumber(), // Convert Decimal to number
        // Include any other properties that need to be transformed
    }));

    return { data: transformedProjects, error: null };
};

export default getProjects;
