import type { ProjectDTO } from "@/lib/types/project";
import type { Project } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { v4 as uuidv4 } from "uuid";

export const fakeProject: Project = {
    id: uuidv4(),
    contractId: "fake-contract-id",
    contractName: "Fake Contract Name",
    dateStarted: new Date("2025-01-01"),
    updatedAt: new Date("2025-12-01"),
    contractCost: Decimal(1000),
    contractor: "Fake Contractor",
    materialsEngineer: "Fake Engineer",
    limits: "Fake Limits",
    token: null,
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
    token: null,
    contractCost: fakeProject.contractCost.toNumber(),
};
