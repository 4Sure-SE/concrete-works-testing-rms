import type Project from "./interface";

const fakeProjectsData: Project = {
    id: "P-001",
    contractId: "C-2023-001",
    contractName: "City Bridge Construction",
    contractorName: "ABC Builders",
    limits: "Downtown to West End",
    location: "New York, NY",
    materialsEngineer: "Genesis S. Bugna",
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
                    ],
                    unit: "cu",
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
                    ],
                    unit: "cu",
                },
            ],
        },
    ],
};

export default fakeProjectsData;
