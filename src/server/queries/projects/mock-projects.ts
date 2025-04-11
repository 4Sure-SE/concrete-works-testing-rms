import type { Project } from "@prisma/client";

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
    },
];

export default mockProjects;
