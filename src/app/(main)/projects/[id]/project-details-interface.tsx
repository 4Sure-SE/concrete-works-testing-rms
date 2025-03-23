interface Material {
    id: number;
    name: string;
    testRequired: string;
    unit: string;
    testsOnFile: number;
    balance: number;
    quantity: number;
}

export default interface projectDetails {
    itemId: number;
    itemNo: string;
    description: string;
    materials: Material[];
    quantity: number;
    unit: string;
    testsRequired: string;
    testsOnFile: number;
    balance: number;
}
