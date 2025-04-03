import type Project from "./interface";

const fakeProjectsData: Project = {
    id: "P-001",
    contractId: "C-2023-001",
    contractName: "City Bridge Construction",
    contractorName: "ABC Builders",
    limits: "Downtown to West End",
    location: "New York, NY",
    materialsEngineer: "Genesis Bugna",
    projectDetails: [
        {
            itemId: 1,
            itemNo: "item 311",
            description: "Concrete Mix - 4000 psi",
            quantity: 100,
            itemTest: [
                {
                    testId: 1,
                    testRequired: "Slump Test",
                    testsOnFile: 1,
                    balance: 1,
                    unit: "cu.m",
                },
                {
                    testId: 2,
                    testRequired: "Compressive Strength Test",
                    testsOnFile: 0,
                    balance: 2,
                    unit: "cu.m",
                },
            ],
            materials: [
                {
                    id: 101,
                    name: "Concrete",
                    quantity: 50,
                    materialTest: [
                        {
                            testId: 3,
                            testRequired: "Density Test",
                            testsOnFile: 1,
                            balance: 1,
                        },
                        {
                            testId: 4,
                            testRequired: "Tensile Strength Test",
                            testsOnFile: 0,
                            balance: 2,
                        },
                        {
                            testId: 18,
                            testRequired: "Air Content Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                        {
                            testId: 19,
                            testRequired: "Setting Time Test",
                            testsOnFile: 0,
                            balance: 1,
                        },
                    ],
                    unit: "pcs",
                },
                {
                    id: 102,
                    name: "Cement",
                    quantity: 20,
                    materialTest: [
                        {
                            testId: 5,
                            testRequired: "Fineness Test",
                            testsOnFile: 1,
                            balance: 1,
                        },
                        {
                            testId: 6,
                            testRequired: "Soundness Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                        {
                            testId: 20,
                            testRequired: "Heat of Hydration Test",
                            testsOnFile: 0,
                            balance: 1,
                        },
                        {
                            testId: 21,
                            testRequired: "Chemical Composition Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                    ],
                    unit: "cu",
                },
                {
                    id: 103,
                    name: "Gravel",
                    quantity: 30,
                    materialTest: [
                        {
                            testId: 11,
                            testRequired: "Gradation Test",
                            testsOnFile: 2,
                            balance: 0,
                        },
                        {
                            testId: 22,
                            testRequired: "Abrasion Resistance Test",
                            testsOnFile: 1,
                            balance: 1,
                        },
                        {
                            testId: 23,
                            testRequired: "Specific Gravity Test",
                            testsOnFile: 0,
                            balance: 1,
                        },
                    ],
                    unit: "cu.m",
                },
                {
                    id: 104,
                    name: "Water",
                    quantity: 10,
                    materialTest: [
                        {
                            testId: 12,
                            testRequired: "Purity Test",
                            testsOnFile: 1,
                            balance: 1,
                        },
                        {
                            testId: 24,
                            testRequired: "pH Level Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                        {
                            testId: 25,
                            testRequired: "Chloride Content Test",
                            testsOnFile: 0,
                            balance: 1,
                        },
                    ],
                    unit: "liters",
                },
            ],
        },
        {
            itemId: 2,
            itemNo: "item 312",
            description: "Rebar - 16mm",
            quantity: 200,
            itemTest: [
                {
                    testId: 7,
                    testRequired: "Tensile Strength Test",
                    testsOnFile: 2,
                    balance: 2,
                    unit: "pcs",
                },
                {
                    testId: 8,
                    testRequired: "Bend Test",
                    testsOnFile: 1,
                    balance: 1,
                    unit: "pcs",
                },
            ],
            materials: [
                {
                    id: 201,
                    name: "Steel",
                    quantity: 100,
                    materialTest: [
                        {
                            testId: 9,
                            testRequired: "Hardness Test",
                            testsOnFile: 1,
                            balance: 1,
                        },
                        {
                            testId: 10,
                            testRequired: "Impact Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                        {
                            testId: 26,
                            testRequired: "Corrosion Resistance Test",
                            testsOnFile: 0,
                            balance: 1,
                        },
                        {
                            testId: 27,
                            testRequired: "Elongation Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                    ],
                    unit: "cu",
                },
                {
                    id: 202,
                    name: "Epoxy Coating",
                    quantity: 15,
                    materialTest: [
                        {
                            testId: 13,
                            testRequired: "Adhesion Test",
                            testsOnFile: 0,
                            balance: 1,
                        },
                        {
                            testId: 28,
                            testRequired: "Thickness Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                        {
                            testId: 29,
                            testRequired: "Curing Test",
                            testsOnFile: 1,
                            balance: 1,
                        },
                    ],
                    unit: "kg",
                },
                {
                    id: 203,
                    name: "Wire Mesh",
                    quantity: 40,
                    materialTest: [
                        {
                            testId: 14,
                            testRequired: "Mesh Size Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                        {
                            testId: 30,
                            testRequired: "Welding Strength Test",
                            testsOnFile: 0,
                            balance: 1,
                        },
                        {
                            testId: 31,
                            testRequired: "Coating Integrity Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                    ],
                    unit: "sq.m",
                },
            ],
        },
        {
            itemId: 3,
            itemNo: "item 313",
            description: "Asphalt Pavement - 50mm",
            quantity: 150,
            itemTest: [
                {
                    testId: 15,
                    testRequired: "Thickness Test",
                    testsOnFile: 1,
                    balance: 1,
                    unit: "sq.m",
                },
            ],
            materials: [
                {
                    id: 301,
                    name: "Asphalt",
                    quantity: 80,
                    materialTest: [
                        {
                            testId: 16,
                            testRequired: "Viscosity Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                        {
                            testId: 32,
                            testRequired: "Flash Point Test",
                            testsOnFile: 0,
                            balance: 1,
                        },
                        {
                            testId: 33,
                            testRequired: "Ductility Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                        {
                            testId: 34,
                            testRequired: "Penetration Test",
                            testsOnFile: 0,
                            balance: 1,
                        },
                    ],
                    unit: "tons",
                },
                {
                    id: 302,
                    name: "Aggregate",
                    quantity: 60,
                    materialTest: [
                        {
                            testId: 17,
                            testRequired: "Sieve Analysis",
                            testsOnFile: 1,
                            balance: 1,
                        },
                        {
                            testId: 35,
                            testRequired: "Los Angeles Abrasion Test",
                            testsOnFile: 0,
                            balance: 1,
                        },
                        {
                            testId: 36,
                            testRequired: "Flakiness Index Test",
                            testsOnFile: 1,
                            balance: 0,
                        },
                    ],
                    unit: "cu.m",
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
    contractorName:
        "ABC Mega Construction Consortium International Limited in Association with Global Infrastructure Partners and Springfield Civil Works Joint Venture",
    limits: "From KM 10+500 to KM 15+800 along the Eastern Corridor, including all access roads, service lanes, and intersections within the municipal boundaries of Springfield and neighboring districts",
    location:
        "Springfield Metropolitan Area, including North Springfield District, East Springfield Township, and parts of the Springfield Valley Special Economic Zone",
    materialsEngineer:
        "Dr. Johnathan Michael Doe, PhD in Civil Engineering with specialization in Materials Science, Senior Materials Engineer (License #ME-123456789)",
    projectDetails: [
        {
            itemId: 1,
            itemNo: "ITEM-001",
            description: "Asphalt Concrete Wearing Course",
            quantity: 5000,
            materials: [
                {
                    id: 1,
                    name: "Bitumen",
                    quantity: 250,
                    unit: "tons",
                    materialTest: [
                        {
                            testId: 1,
                            testRequired: "Penetration Test",
                            testsOnFile: 3,
                            balance: 2,
                        },
                        {
                            testId: 2,
                            testRequired: "Softening Point Test",
                            testsOnFile: 2,
                            balance: 1,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Aggregate",
                    quantity: 4750,
                    unit: "tons",
                    materialTest: [
                        {
                            testId: 3,
                            testRequired: "Sieve Analysis",
                            testsOnFile: 5,
                            balance: 3,
                        },
                    ],
                },
            ],
            itemTest: [
                {
                    testId: 4,
                    testRequired: "Marshall Stability Test",
                    testsOnFile: 2,
                    balance: 1,
                    unit: "samples",
                },
                {
                    testId: 5,
                    testRequired: "Density Test",
                    testsOnFile: 5,
                    balance: 2,
                    unit: "samples",
                },
            ],
        },
        {
            itemId: 2,
            itemNo: "ITEM-002",
            description: "Reinforced Concrete Pipe",
            quantity: 120,
            materials: [
                {
                    id: 3,
                    name: "Cement",
                    quantity: 60,
                    unit: "bags",
                    materialTest: [
                        {
                            testId: 6,
                            testRequired: "Compressive Strength",
                            testsOnFile: 2,
                            balance: 1,
                        },
                    ],
                },
                {
                    id: 4,
                    name: "Steel Reinforcement",
                    quantity: 8,
                    unit: "tons",
                    materialTest: [
                        {
                            testId: 7,
                            testRequired: "Tensile Strength",
                            testsOnFile: 1,
                            balance: 0,
                        },
                    ],
                },
            ],
            itemTest: [
                {
                    testId: 8,
                    testRequired: "Crushing Strength Test",
                    testsOnFile: 3,
                    balance: 1,
                    unit: "samples",
                },
            ],
        },
    ],
};
export const fakeEmptyContractDetails = {
    id: "PRJ-2023-001-45678-ABCDE",
    contractId: "",
    contractName: "",
    contractorName: "",
    limits: "",
    location: "",
    materialsEngineer: "",
    projectDetails: [
        {
            itemId: 1,
            itemNo: "ITEM-001",
            description: "Asphalt Concrete Wearing Course",
            quantity: 5000,
            materials: [
                {
                    id: 1,
                    name: "Bitumen",
                    quantity: 250,
                    unit: "tons",
                    materialTest: [
                        {
                            testId: 1,
                            testRequired: "Penetration Test",
                            testsOnFile: 3,
                            balance: 2,
                        },
                        {
                            testId: 2,
                            testRequired: "Softening Point Test",
                            testsOnFile: 2,
                            balance: 1,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Aggregate",
                    quantity: 4750,
                    unit: "tons",
                    materialTest: [
                        {
                            testId: 3,
                            testRequired: "Sieve Analysis",
                            testsOnFile: 5,
                            balance: 3,
                        },
                    ],
                },
            ],
            itemTest: [
                {
                    testId: 4,
                    testRequired: "Marshall Stability Test",
                    testsOnFile: 2,
                    balance: 1,
                    unit: "samples",
                },
                {
                    testId: 5,
                    testRequired: "Density Test",
                    testsOnFile: 5,
                    balance: 2,
                    unit: "samples",
                },
            ],
        },
        {
            itemId: 2,
            itemNo: "ITEM-002",
            description: "Reinforced Concrete Pipe",
            quantity: 120,
            materials: [
                {
                    id: 3,
                    name: "Cement",
                    quantity: 60,
                    unit: "bags",
                    materialTest: [
                        {
                            testId: 6,
                            testRequired: "Compressive Strength",
                            testsOnFile: 2,
                            balance: 1,
                        },
                    ],
                },
                {
                    id: 4,
                    name: "Steel Reinforcement",
                    quantity: 8,
                    unit: "tons",
                    materialTest: [
                        {
                            testId: 7,
                            testRequired: "Tensile Strength",
                            testsOnFile: 1,
                            balance: 0,
                        },
                    ],
                },
            ],
            itemTest: [
                {
                    testId: 8,
                    testRequired: "Crushing Strength Test",
                    testsOnFile: 3,
                    balance: 1,
                    unit: "samples",
                },
            ],
        },
    ],
};

export const fakeEmptyProjectDetails = {
    id: "PRJ-2023-001-45678-ABCDE",
    contractId: "",
    contractName: "",
    contractorName: "",
    limits: "From KM 10+500 to KM 15+800",
    location: "Springfield",
    materialsEngineer: "John Doe",
    projectDetails: [],
};
