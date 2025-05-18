import type { Projects } from "@/lib/types/project/project-details.types";
import type { ProjectDetailsPayload } from "@/server/data-access/project/project.payloads";
function calculateBalance(testQuantity: number, testsOnFile: number): number {
    const rawBalance = testQuantity - testsOnFile;

    const nonNegativeBalance = Math.max(rawBalance, 0);

    return nonNegativeBalance < 1
        ? Math.ceil(nonNegativeBalance)
        : Math.round(nonNegativeBalance);
}

export function projectDetailsToDTO(
    rawProject: ProjectDetailsPayload | null,
): Projects | null {
    if (!rawProject) return null;
    return {
        id: rawProject.id,
        contractId: rawProject.contractId,
        contractName: rawProject.contractName,
        contractor: rawProject.contractor,
        limits: rawProject.limits,
        location: rawProject.location,
        materialsEngineer: rawProject.materialsEngineer,
        contractCost: rawProject.contractCost.toNumber(),
        projectWorkItem:
            rawProject.projectWorkItem?.map((pwi) => ({
                id: pwi.workItem.id,
                itemNo: pwi.workItem.itemNo,
                description: pwi.workItem.description,
                quantity: pwi.quantity.toNumber(),
                unit: pwi.workItem.unit.name,
                itemTest:
                    pwi.projectWorkItemTest?.map((pjwit) => {
                        const matchingWIT = pwi.workItem.workItemTest.find(
                            (wit) => wit.testId === pjwit.testId,
                        );

                        const testQuantity =
                            matchingWIT?.testQuantity?.toNumber() ?? 0;
                        const testsOnFile = pjwit.onFile ?? 0;

                        const balance = calculateBalance(
                            testQuantity,
                            testsOnFile,
                        );

                        return {
                            id: pjwit.id,
                            testRequired: pjwit.test.name,
                            testsOnFile,
                            requiredTests: testQuantity,
                            testQuantity,
                            balance,
                        };
                    }) ?? [],
                materials:
                    pwi.projectMaterial?.map((pm) => {
                        const matchingWorkItemMaterial =
                            pwi.workItem.workItemMaterial.find(
                                (wim) => wim.materialId === pm.material.id,
                            );

                        return {
                            id: pm.material.id,
                            name: pm.material.name,
                            unit: pm.material.unit?.name ?? "N/A",
                            quantity: pm.quantity.toNumber(),
                            materialTest:
                                pm.projectMaterialTest?.map((pmt) => {
                                    const matchingTest =
                                        matchingWorkItemMaterial?.workItemMaterialTest.find(
                                            (wit) => wit.testId === pmt.testId,
                                        );

                                    const unitsPerTest =
                                        matchingTest?.unitsPerTest?.toNumber() ??
                                        0;

                                    const testsOnFile = pmt.onFile ?? 0;
                                    const testsRequired = pm.quantity
                                        .dividedBy(unitsPerTest)
                                        .round()
                                        .toNumber();

                                    const balance = calculateBalance(
                                        testsRequired,
                                        testsOnFile,
                                    );

                                    return {
                                        id: pmt.id,
                                        testRequired: pmt.test?.name ?? "N/A",
                                        testsOnFile,
                                        balance,
                                        unitsPerTest,
                                    };
                                }) ?? [],
                        };
                    }) ?? [],
            })) ?? [],
    };
}
