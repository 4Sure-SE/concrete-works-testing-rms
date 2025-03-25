interface Test {
    testId: number;
    testRequired: string;
    testsOnFile: number;
    balance: number;
    unit: string;
}

interface Material {
    id: number;
    name: string;
    materialTest: Test[];
    quantity: number;
}

interface ProjectDetails {
    itemId: number;
    itemNo: string;
    description: string;
    materials: Material[];
    quantity: number;
    itemTest: Test[];
}

export default interface Project {
    id: string;
    contractId: string;
    contractName: string;
    contractorName: string;
    limits: string;
    location: string;
    projectDetails: ProjectDetails[];
}
