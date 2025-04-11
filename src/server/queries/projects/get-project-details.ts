import "server-only";

import type { Project } from "@/app/(main)/_components/project-details/interface";
import { tryCatch } from "@/lib/utils/try-catch";
import { db } from "@/server/db/db";

const getProjectDetails = async (projectId: string) => {
    const { data: rawProject, error } = await tryCatch(
        db.project.findUnique({
            where: { id: projectId },
            include: {
                projectWorkItem: {
                    include: {
                        workItem: {
                            include: {
                                unit: true,
                                workItemTest: {
                                    include: { test: true },
                                },
                                workItemMaterial: {
                                    include: {
                                        workItemMaterialTest: true,
                                    },
                                },
                            },
                        },
                        projectMaterial: {
                            include: {
                                material: {
                                    include: {
                                        unit: true,
                                    },
                                },
                                projectMaterialTest: {
                                    include: { test: true },
                                },
                            },
                        },
                        projectWorkItemTest: {
                            include: {
                                test: true,
                            },
                        },
                    },
                },
            },
        }),
    );

    if (error || !rawProject) return { data: null, error: "Failed to project" };

    const transformedProject: Project = {
        id: rawProject.id,
        contractId: rawProject.contractId,
        contractName: rawProject.contractName,
        contractor: rawProject.contractor,
        limits: rawProject.limits,
        location: rawProject.location,
        materialsEngineer: rawProject.materialsEngineer,
        contractCost: rawProject.contract_cost.toNumber(),
        projectWorkItem: rawProject.projectWorkItem?.map((pwi) => ({
            id: pwi.workItem.id,
            itemNo: pwi.workItem.itemNo,
            description: pwi.workItem.description,
            quantity: pwi.quantity.toNumber(),
            unit: pwi.workItem.unit.name,
            itemTest:
                pwi.projectWorkItemTest.map((pjwit) => {
                    const matchingWIT = pwi.workItem.workItemTest.find(
                        (wit) => wit.testId === pjwit.testId,
                    );

                    const testQuantity =
                        matchingWIT?.testQuantity?.toNumber() ?? 0;
                    const testsOnFile = pjwit.onFile ?? 0;

                    return {
                        id: pjwit.id,
                        testRequired: pjwit.test.name,
                        testsOnFile,
                        requiredTests: testQuantity,
                        testQuantity,
                        balance: testQuantity - testsOnFile,
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
                                    matchingTest?.unitsPerTest?.toNumber() ?? 0;
                                const testsOnFile = pmt.onFile ?? 0;
                                const estimatedRequiredTests =
                                    unitsPerTest === 0
                                        ? 0
                                        : pm.quantity.toNumber() / unitsPerTest;

                                const rawBalance =
                                    estimatedRequiredTests - testsOnFile;

                                const balance =
                                    rawBalance < 1
                                        ? Math.ceil(rawBalance)
                                        : Math.round(rawBalance);

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
        })),
    };

    return { data: transformedProject, error: null };
};

export default getProjectDetails;
