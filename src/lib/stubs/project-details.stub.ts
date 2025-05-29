import type { Projects } from "@/lib/types/project";
import type { CreateProjectWorkItemDTO } from "../types/work-item";
import { fakeProject } from "./project.stub";
export const fakeProjectsData: Projects = {
    id: "P-001",
    contractId: "C-2023-001",
    contractName: "City Bridge Construction",
    contractor: "ABC Builders",
    limits: "Downtown to West End",
    location: "New York, NY",
    materialsEngineer: "Genesis Bugna",
    contractCost: 10000,
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
                    testQuantity: 5,
                },
            ],
            materials: [
                {
                    id: "MAT-001",
                    name: "Portland Cement",
                    quantity: 50.0,
                    unit: "kg",
                    materialTest: [
                        {
                            id: "MT-001",
                            testRequired: "Fineness Test",
                            testsOnFile: 1,
                            balance: 0,
                            unitsPerTest: 10,
                        },
                    ],
                },
            ],
        },
        {
            id: "WI-002",
            itemNo: "312",
            description: "Steel Reinforcement",
            quantity: 200.0,
            unit: "pcs",
            itemTest: [
                {
                    id: "IT-002",
                    testRequired: "Tensile Test",
                    testsOnFile: 2,
                    balance: 1,
                    testQuantity: 3,
                },
            ],
            materials: [
                {
                    id: "MAT-002",
                    name: "Rebar 16mm",
                    quantity: 100.0,
                    unit: "m",
                    materialTest: [
                        {
                            id: "MT-002",
                            testRequired: "Bend Test",
                            testsOnFile: 1,
                            balance: 1,
                            unitsPerTest: 5,
                        },
                    ],
                },
            ],
        },
    ],
};

export const fakeProjectWorkItemData: CreateProjectWorkItemDTO = {
    workItemId: "8c77efe6-9312-43d1-a7f6-1d065fda0acb",
    quantity: 1000,
};

export const fakeProjectDetailsDTO = {
    contractCost: fakeProject.contractCost.toNumber(),
    contractId: fakeProject.contractId,
    contractName: fakeProject.contractName,
    contractor: fakeProject.contractor,
    id: fakeProject.id,
    limits: fakeProject.limits,
    location: fakeProject.location,
    materialsEngineer: fakeProject.materialsEngineer,
    projectWorkItem: [
        {
            description: "Reinforced Concrete",
            id: "8c77efe6-9312-43d1-a7f6-1d065fda0acb",
            itemNo: "Item 900",
            itemTest: [
                {
                    balance: 1,
                    id: "142c12c8-6b30-4f72-ac37-b72dafb438ec",
                    requiredTests: 1,
                    testQuantity: 1,
                    testRequired: "Trial Mix",
                    testsOnFile: 0,
                },
                {
                    balance: 1,
                    id: "24589b86-c320-4669-a644-c1056f0d87cd",
                    requiredTests: 1,
                    testQuantity: 1,
                    testRequired: "Design Mix",
                    testsOnFile: 0,
                },
            ],
            materials: [
                {
                    id: "a2a28cc4-90e5-4572-9fee-2a55091b0f44",
                    materialTest: [
                        {
                            balance: 6,
                            id: "8e81a0c6-b083-45f6-9715-12c4cc24a4a0",
                            testRequired: "Quality Test",
                            testsOnFile: 0,
                            unitsPerTest: 1583.333333,
                        },
                    ],
                    name: "Cement",
                    quantity: 9500,
                    unit: "bag",
                },
                {
                    id: "bacc86d5-30e2-4b50-843d-6a7bba50f3a1",
                    materialTest: [
                        {
                            balance: 2,
                            id: "9e10ac7b-6a3f-466a-8892-ecc709ddf1df",
                            testRequired: "Quality Test",
                            testsOnFile: 0,
                            unitsPerTest: 250,
                        },
                        {
                            balance: 8,
                            id: "c988b701-04cb-42e4-95f1-7b05a1dbaa79",
                            testRequired: "Grading",
                            testsOnFile: 0,
                            unitsPerTest: 62.5,
                        },
                    ],
                    name: "Fine Aggregates",
                    quantity: 500,
                    unit: "cubic meter",
                },
                {
                    id: "24292957-d38a-4a0f-a7b2-1ee8055a3616",
                    materialTest: [
                        {
                            balance: 2,
                            id: "2e833998-c131-4b4e-a7d9-3082090339a5",
                            testRequired: "Quality Test",
                            testsOnFile: 0,
                            unitsPerTest: 500,
                        },
                        {
                            balance: 14,
                            id: "3843faf0-d30f-4c0b-9643-f4825ff853e9",
                            testRequired: "Grading",
                            testsOnFile: 0,
                            unitsPerTest: 71.428571,
                        },
                    ],
                    name: "Course Aggregates",
                    quantity: 1000,
                    unit: "cubic meter",
                },
                {
                    id: "c7c1cbb3-435f-4598-9570-289ac8de582d",
                    materialTest: [
                        {
                            balance: 1,
                            id: "27664012-a916-43b8-9f40-8ac6cf34a385",
                            testRequired: "Quality Test",
                            testsOnFile: 0,
                            unitsPerTest: 1,
                        },
                    ],
                    name: "Water",
                    quantity: 1,
                    unit: "source",
                },
                {
                    id: "0a84fe25-8d43-4091-8528-78ee77f80f3f",
                    materialTest: [
                        {
                            balance: 1,
                            id: "32da4688-387f-4c48-aae5-6ab1e158a7e8",
                            testRequired: "Quality Test",
                            testsOnFile: 0,
                            unitsPerTest: 1,
                        },
                    ],
                    name: "Chemical Admixture",
                    quantity: 1,
                    unit: "lot",
                },
                {
                    id: "9e29d88a-420b-4c4f-8847-d43ea5b1926d",
                    materialTest: [
                        {
                            balance: 1,
                            id: "7ca6e81b-b0e7-4ed4-80da-0a685f19cf8a",
                            testRequired: "Quality Test",
                            testsOnFile: 0,
                            unitsPerTest: 1,
                        },
                    ],
                    name: "Curing Compound",
                    quantity: 1,
                    unit: "lot",
                },
                {
                    id: "17e3b3da-e06a-4e32-8103-582abd63c0f7",
                    materialTest: [
                        {
                            balance: 1,
                            id: "8ef87433-7831-4d95-a860-c229c6c49c39",
                            testRequired: "Quality Test",
                            testsOnFile: 0,
                            unitsPerTest: 1,
                        },
                    ],
                    name: "Expansion Joint",
                    quantity: 1,
                    unit: "lot",
                },
                {
                    id: "b973f232-a110-45d5-87d9-2548f52c87d1",
                    materialTest: [
                        {
                            balance: 42,
                            id: "2bee1b85-f4d2-483d-80b2-7d22bbbc11cb",
                            testRequired: "Compressive Strength Test",
                            testsOnFile: 0,
                            unitsPerTest: 1,
                        },
                    ],
                    name: "Concrete",
                    quantity: 42,
                    unit: "cylinder set",
                },
            ],
            quantity: 1000,
            unit: "cubic meter",
        },
    ],
};
