interface MaterialTest {
    testId: string;
    testRequired: string;
    testsOnFile: number;
    balance: number;
}

interface ItemTest {
    testId: string;
    testRequired: string;
    testsOnFile: number;
    balance: number;
}

interface Material {
    id: string;
    name: string;
    materialTest: MaterialTest[];
    quantity: number;
    unit: string;
}

interface ProjectWorkItem {
    itemId: string;
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
