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
}

interface Material {
    id: number;
    name: string;
    materialTest: MaterialTest[];
    quantity: number;
    unit: string;
}

interface ProjectWorkItem {
    itemId: number;
    itemNo: string;
    description: string;
    materials: Material[];
    quantity: number;
    unit: string;
    itemTest: ItemTest[];
}

export default interface Project {
    id: string;
    contractId: string;
    contractName: string;
    contractor: string;
    limits: string;
    location: string;
    materialsEngineer: string;
    projectWorkItem?: ProjectWorkItem[];
}
