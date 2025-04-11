import type { Project } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

const mockProjects: Project[] = [
    {
        id: "1",
        contractId: "CC-001",
        contractName: "Test Project",
        contractor: "Test Contractor",
        limits: null,
        location: null,
        dateStarted: new Date(),
        createdAt: new Date(),
        materialsEngineer: "John John",
        contract_cost: Decimal(10),
    },
    {
        id: "2",
        contractId: "AA-002",
        contractName: "Test Project 2",
        contractor: "Test Contractor",
        limits: null,
        location: null,
        dateStarted: new Date(),
        createdAt: new Date(),
        materialsEngineer: "John Mark",
        contract_cost: Decimal(10),
    },
    {
        id: "3",
        contractId: "AC-003",
        contractName: "Test Project 3",
        contractor: "Test Contractor",
        limits: null,
        location: null,
        dateStarted: new Date(),
        createdAt: new Date(),
        materialsEngineer: "John Doe",
        contract_cost: Decimal(10),
    },
    {
        id: "4",
        contractId: "EW-004",
        contractName: "Test Project 4",
        contractor: "Test Contractor",
        limits: null,
        location: null,
        dateStarted: new Date(),
        createdAt: new Date(),
        materialsEngineer: "John Cena",
        contract_cost: Decimal(10),
    },
];

export default mockProjects;
