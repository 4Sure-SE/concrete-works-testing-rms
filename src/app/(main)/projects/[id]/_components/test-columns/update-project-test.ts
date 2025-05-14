import type { TestType } from "@/lib/types/project-test/project-test.types";
import type { Projects } from "@/lib/types/project/project-details.types";

export function updateProjectTest(
    prevProject: Projects,
    id: string,
    amount: number,
    type: TestType,
): Projects {
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
                            const balance = Math.max(
                                rawBalance < 1
                                    ? Math.ceil(rawBalance)
                                    : Math.round(rawBalance),
                                0,
                            );

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

            if (type === "work-item") {
                updatedItemTest = workItem.itemTest?.map((pjwit) => {
                    if (pjwit.id === id) {
                        const newTestsOnFile = pjwit.testsOnFile + amount;
                        const requiredTests = pjwit.testQuantity;
                        return {
                            ...pjwit,
                            testsOnFile: newTestsOnFile,
                            balance: Math.max(
                                requiredTests - newTestsOnFile,
                                0,
                            ),
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
