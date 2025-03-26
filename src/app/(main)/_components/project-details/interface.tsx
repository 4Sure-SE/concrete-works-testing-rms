interface MaterialTest {
    testId: number;
    testRequired: string;
    testsOnFile: number;
    balance: number;
}

interface ItemTest {
    testId: number;
    testRequired: string;
    testsOnFile: number;
    balance: number;
    unit: string;
}

interface Material {
    id: number;
    name: string;
    materialTest: MaterialTest[];
    quantity: number;
    unit: string;
}

interface ProjectDetails {
    itemId: number;
    itemNo: string;
    description: string;
    materials: Material[];
    quantity: number;
    itemTest: ItemTest[];
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
