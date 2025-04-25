// Interface definitions
interface MaterialTest {
    id: string;
    testRequired: string;
    testsOnFile: number;
    balance: number;
    unitsPerTest: number;
}

interface ItemTest {
    id: string;
    testRequired: string;
    testsOnFile: number;
    balance: number;
    testQuantity: number;
}

interface Material {
    id: string;
    name: string;
    materialTest: MaterialTest[];
    quantity: number;
    unit: string;
}

interface ProjectWorkItem {
    id: string;
    itemNo: string;
    description: string | null;
    materials: Material[];
    quantity: number;
    unit: string;
    itemTest: ItemTest[];
}

interface Projects {
    id: string;
    contractId: string;
    contractName: string;
    contractor: string;
    limits: string | null;
    location: string | null;
    materialsEngineer: string;
    contractCost: number;
    projectWorkItem?: ProjectWorkItem[];
}

export type { ItemTest, Material, MaterialTest, Projects, ProjectWorkItem };
