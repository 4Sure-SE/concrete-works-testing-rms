import type { Project } from "@/app/(main)/_components/project-details/interface";

export type TestUpdateType = "material" | "workItem";

export function UpdateProjectTest(
    prevProject: Project,
    id: string | undefined,
    amount: number,
    type: TestUpdateType,
): Project {
    return {
        ...prevProject,
        projectWorkItem: prevProject.projectWorkItem?.map((workItem) => {
            let updatedMaterials = workItem.materials;
            let updatedItemTest = workItem.itemTest;

            if (type === "material") {
                updatedMaterials = workItem.materials.map((material) => ({
                    ...material,
                    materialTest: material.materialTest.map((materialTest) => {
                        if (materialTest.id === id) {
                            const newTestsOnFile =
                                materialTest.testsOnFile + amount;
                            const unitsPerTest = materialTest.unitsPerTest ?? 0;
                            const estimatedRequiredTests =
                                unitsPerTest === 0
                                    ? 0
                                    : material.quantity / unitsPerTest;
                            const rawBalance =
                                estimatedRequiredTests - newTestsOnFile;
                            const balance =
                                rawBalance < 1
                                    ? Math.ceil(rawBalance)
                                    : Math.round(rawBalance);

                            return {
                                ...materialTest,
                                testsOnFile: newTestsOnFile,
                                balance,
                            };
                        }
                        return materialTest;
                    }),
                }));
            }

            if (type === "workItem") {
                updatedItemTest = workItem.itemTest?.map((pjwit) => {
                    if (pjwit.id === id) {
                        const newTestsOnFile = pjwit.testsOnFile + amount;
                        const requiredTests = pjwit.testQuantity;
                        return {
                            ...pjwit,
                            testsOnFile: newTestsOnFile,
                            balance: requiredTests - newTestsOnFile,
                        };
                    }
                    return pjwit;
                });
            }

            return {
                ...workItem,
                materials: updatedMaterials,
                itemTest: updatedItemTest,
            };
        }),
    };
}
