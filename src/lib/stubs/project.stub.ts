import type { ProjectDTO } from "@/lib/types/project";

import { v4 as uuidv4 } from "uuid";

export const fakeProjectDTO: ProjectDTO = {
    id: uuidv4(),
    contractId: "fake-contract-id",
    contractName: "Fake Contract Name",
    dateStarted: new Date("2025-01-01"),
    contractCost: 1000,
    contractor: "Fake Contractor",
    materialsEngineer: "Fake Engineer",
    limits: "Fake Limits",
    token: null,
    location: "Fake Location",
};
