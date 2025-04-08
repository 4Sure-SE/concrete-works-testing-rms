import type { Project } from "./interface";

const fakeProjectsData: Project = {
    id: "P-001",
    contractId: "C-2023-001",
    contractName: "City Bridge Construction",
    contractor: "ABC Builders",
    limits: "Downtown to West End",
    location: "New York, NY",
    materialsEngineer: "Genesis Bugna",
    projectWorkItem: [
        {
            id: "WI-001",
            itemNo: "311",
            description: "Concrete Mix - 4000 psi",
            quantity: 100.0,
            unit: "cu.m",
            itemTest: [
                {
                    id: "IT-001",
                    testRequired: "Slump Test",
                    testsOnFile: 1,
                    balance: 1,
                },
            ],
            materials: [
                {
                    id: "MAT-001",
                    name: "Portland Cement",
                    quantity: 50.0, // Changed from Decimal to number
                    unit: "kg",
                    materialTest: [
                        {
                            id: "MT-001",
                            testRequired: "Fineness Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                    ],
                },
            ],
        },
        {
            id: "WI-002",
            itemNo: "312",
            description: "Steel Reinforcement",
            quantity: 200.0, // Changed from Decimal to number
            unit: "pcs",
            itemTest: [
                {
                    id: "IT-002",
                    testRequired: "Tensile Test",
                    testsOnFile: 2,
                    balance: 1,
                },
            ],
            materials: [
                {
                    id: "MAT-002",
                    name: "Rebar 16mm",
                    quantity: 100.0, // Changed from Decimal to number
                    unit: "m",
                    materialTest: [
                        {
                            id: "MT-002",
                            testRequired: "Bend Test",
                            testsOnFile: 1,
                            balance: 1,
                        },
                    ],
                },
            ],
        },
    ],
};

export default fakeProjectsData;

export const fakeLongContractDetails = {
    id: "PRJ-2023-001-45678-ABCDE",
    contractId:
        "CONT-2023-001-98765-ZYXWV-Construction-Highway-Project-Springfield",
    contractName:
        "Springfield Northern Bypass Highway Construction and Associated Infrastructure Development Project with Bridge Works and Drainage Systems",
    contractor:
        "ABC Mega Construction Consortium International Limited in Association with Global Infrastructure Partners and Springfield Civil Works Joint Venture",
    limits: "From KM 10+500 to KM 15+800 along the Eastern Corridor, including all access roads, service lanes, and intersections within the municipal boundaries of Springfield and neighboring districts",
    location:
        "Springfield Metropolitan Area, including North Springfield District, East Springfield Township, and parts of the Springfield Valley Special Economic Zone",
    materialsEngineer:
        "Dr. Johnathan Michael Doe, PhD in Civil Engineering with specialization in Materials Science, Senior Materials Engineer (License #ME-123456789)",
    projectWorkItem: [],
};
export const fakeEmptyContractDetails = {
    id: "PRJ-2023-001-45678-ABCDE",
    contractId: "",
    contractName: "",
    contractor: "",
    limits: "",
    location: "",
    materialsEngineer: "",
    projectWorkItem: [],
};

export const fakeEmptyProjectDetails = {
    id: "P-001",
    contractId: "C-2023-001",
    contractName: "City Bridge Construction",
    contractor: "ABC Builders",
    limits: "Downtown to West End",
    location: "New York, NY",
    materialsEngineer: "Genesis Bugna",
    ProjectWorkItem: [],
};
