// Interface definitions
interface MaterialTest {
    id: string;
    testRequired: string;
    testsOnFile: number;
    balance: number;
}

interface ItemTest {
    id: string;
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
    id: string;
    itemNo: string;
    description: string | null;
    materials: Material[];
    quantity: number;
    unit: string;
    itemTest: ItemTest[];
}

interface Project {
    id: string;
    contractId: string;
    contractName: string;
    contractor: string;
    limits: string | null;
    location: string | null;
    materialsEngineer: string;
    projectWorkItem?: ProjectWorkItem[];
}

export type { ItemTest, Material, MaterialTest, Project, ProjectWorkItem };
