import type { ProjectDTO } from "@/lib/types/project";
import type { Project } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export const fakeProject: Project = {
    id: "fake-project-id",
    contractId: "fake-contract-id",
    contractName: "Fake Contract Name",
    dateStarted: new Date(),
    updatedAt: new Date(),
    contractCost: Decimal(1000),
    contractor: "Fake Contractor",
    materialsEngineer: "Fake Engineer",
    limits: "Fake Limits",
    location: "Fake Location",
};

export const fakeProjectDTO: ProjectDTO = {
    id: fakeProject.id,
    contractId: fakeProject.contractId,
    contractName: fakeProject.contractName,
    dateStarted: fakeProject.dateStarted,
    contractor: fakeProject.contractor,
    materialsEngineer: fakeProject.materialsEngineer,
    limits: fakeProject.limits,
    location: fakeProject.location,
    contractCost: fakeProject.contractCost.toNumber(),
};
