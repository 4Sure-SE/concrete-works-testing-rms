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
        projectWorkItem: rawProject.projectWorkItem?.map((pwi) => ({
            id: pwi.workItem.id,
            itemNo: pwi.workItem.itemNo,
            description: pwi.workItem.description,
            quantity: pwi.quantity.toNumber(),
            unit: pwi.workItem.unit.name,
            itemTest:
                pwi.projectWorkItemTest.map((pjwt) => ({
                    id: pjwt.id,
                    testRequired: pjwt.test.name,
                    testsOnFile: pjwt.onFile ?? 0,
                    balance: pjwt.onFile,
                })) ?? [],

            materials:
                pwi.projectMaterial?.map((pm) => ({
                    id: pm.material.id,
                    name: pm.material.name,
                    unit: pm.material.unit?.name ?? "N/A",
                    quantity: pm.quantity.toNumber(),
                    materialTest:
                        pm.projectMaterialTest?.map((pmt) => ({
                            id: pmt.id,
                            testRequired: pmt.test?.name ?? "N/A",
                            testsOnFile: pmt.onFile ?? 0,
                            balance: 1 - (pmt.onFile ?? 0),
                        })) ?? [],
                })) ?? [],
        })),
    };

    return { data: transformedProject, error: null };
};

export default getProjectDetails;
