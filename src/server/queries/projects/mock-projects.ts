import type { Projects } from "@prisma/client";

const mockProjects: Projects[] = [
    {
        id: "1",
        contractId: "CC-001",
        contractName: "Test Project",
        contractor: "Test Contractor",
        limits: null,
        location: null,
        dateStarted: new Date(),
        createdAt: new Date(),
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
    },
];

export default mockProjects;
