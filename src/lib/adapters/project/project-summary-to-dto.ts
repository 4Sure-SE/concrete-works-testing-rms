import type { ProjectSummaryDTO } from "@/lib/types/project";
import type { ProjectSummaryPayload } from "@/server/data-access/project/project.payloads";

export function projectSummaryToDTO(
    project: ProjectSummaryPayload | null,
): ProjectSummaryDTO | null {
    if (!project) return null;

    let totalRequired = 0;
    let totalOnFile = 0;

    // for each project work item
    for (const pwi of project.projectWorkItem) {
        // calculate material tests required/onFile
        for (const pm of pwi.projectMaterial) {
            // look for the material used in the project work item
            const workItemMaterial = pwi.workItem.workItemMaterial.find(
                (wim) => wim.materialId === pm.materialId,
            );

            // if the material is not found go to the next material used
            if (!workItemMaterial) continue;

            // for each test required of the material
            for (const pmt of pm.projectMaterialTest) {
                // validate the test required by the project material
                const test = workItemMaterial.workItemMaterialTest.find(
                    (wimtDef) => wimtDef.testId === pmt.testId,
                );
                if (!test || test.unitsPerTest.lte(0)) continue;

                // calculate how many tests are required for the project material
                const materialQty = pm.quantity;
                const unitsPerTest = test.unitsPerTest;
                const testsRequired = Math.ceil(
                    materialQty.dividedBy(unitsPerTest).toNumber(),
                );

                const onFile = pmt.onFile;

                if (testsRequired > 0) {
                    totalRequired += testsRequired;
                    totalOnFile += onFile;
                }
            }
        }

        // calculate work item tests required/onFile
        for (const pwt of pwi.projectWorkItemTest) {
            // validate the test required by the project work item
            const testDef = pwi.workItem.workItemTest.find(
                (witDef) => witDef.testId === pwt.testId,
            );
            if (!testDef) continue;

            const testsRequired = testDef.testQuantity.toNumber(); // Assuming this is total per instance
            const onFile = pwt.onFile ?? 0;

            if (testsRequired > 0) {
                totalRequired += testsRequired;
                totalOnFile += onFile;
            }
        }
    }

    return {
        id: project.id,
        contractId: project.contractId,
        contractName: project.contractName,
        dateStarted: project.dateStarted,
        stats: {
            totalRequiredTests: totalRequired,
            totalOnFileTests: totalOnFile,
            totalBalanceTests: totalRequired - totalOnFile,
        },
    };
}
