import type { CreateProjectDTO, UpdateProjectDTO } from "@/lib/types/project";

export const fakeCreateProjectData: CreateProjectDTO = {
    contractId: "TEST-2024-001",
    contractName: "Metro Manila Bridge Construction",
    contractor: "ABC Construction Inc.",
    location: "Manila",
    dateStarted: new Date("2024-01-15"),
    materialsEngineer: "Eng. Maria Santos",
    limits: "All concrete works shall comply with DPWH Blue Book standards. Maximum water-cement ratio of 0.45. Minimum compressive strength of 28 MPa at 28 days.",
    contractCost: 15500000,
};

export const fakeUpdateProjectData: UpdateProjectDTO = {
    contractId: "TEST-2024-001-UPDATED",
    contractName: "Metro Manila Bridge Construction - Phase 2",
    contractor: "ABC Construction Inc. (Updated)",
    location: "Manila, Philippines",
    dateStarted: new Date("2024-02-01"),
    materialsEngineer: "Eng. Maria Santos, CE",
    limits: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contractCost: 18500000,
};

export const createProjectTestData = {
    minimal: {
        contractId: "MIN-001",
        contractName: "Minimal Test Project",
        contractor: "Test Contractor",
        location: "Iloilo",
        dateStarted: new Date(),
        materialsEngineer: "Test Engineer",
        limits: "",
        contractCost: 0,
    } satisfies CreateProjectDTO,

    complete: fakeCreateProjectData,
};

export const updateProjectTestData = {
    complete: fakeUpdateProjectData,

    partial: {
        contractId: undefined,
        contractName: "Partially Updated Project",
        contractor: undefined,
        location: "New Location Only",
        dateStarted: undefined,
        materialsEngineer: undefined,
        limits: undefined,
        contractCost: 2500000,
    } satisfies UpdateProjectDTO,
};
