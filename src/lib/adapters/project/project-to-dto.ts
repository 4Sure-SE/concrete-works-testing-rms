import type { ProjectDTO } from "@/lib/types/project";
import type { Project } from "@prisma/client";

export function projectToDTO(project: Project | null): ProjectDTO | null {
    if (!project) return null;
    return {
        id: project.id,
        contractId: project.contractId,
        contractName: project.contractName,
        contractor: project.contractor,
        limits: project.limits ?? null,
        location: project.location ?? null,
        dateStarted: project.dateStarted,
        materialsEngineer: project.materialsEngineer,
        contractCost: Number(project.contractCost),
        token: project.token,
    };
}
