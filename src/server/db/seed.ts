import { PrismaClient } from "@prisma/client";

import { errorHandler } from "@/lib/utils/error-handler";

import { tryCatch } from "@/lib/utils";
import {
    materialsData,
    testsData,
    unitsData,
    workItemMaterialTestsData,
    workItemMaterialsData,
    workItemTestsData,
    workItemsData,
} from "./seed-data";

const prisma = new PrismaClient();

async function main() {
    console.log(`Starting seeding...`);

    const seedUnits = prisma.unit.createMany({
        data: unitsData,
        skipDuplicates: true,
    });

    const seedTests = prisma.test.createMany({
        data: testsData,
        skipDuplicates: true,
    });

    const seedMaterials = prisma.material.createMany({
        data: materialsData,
        skipDuplicates: true,
    });

    const seedWorkItems = prisma.workItem.createMany({
        data: workItemsData,
        skipDuplicates: true,
    });

    const seedWorkItemMaterials = prisma.workItemMaterial.createMany({
        data: workItemMaterialsData,
        skipDuplicates: true,
    });

    const seedWorkItemTests = prisma.workItemTest.createMany({
        data: workItemTestsData,
        skipDuplicates: true,
    });

    const seedWorkItemMaterialTests = prisma.workItemMaterialTest.createMany({
        data: workItemMaterialTestsData,
        skipDuplicates: true,
    });

    const { error } = await tryCatch(
        prisma.$transaction([
            seedUnits,
            seedMaterials,
            seedTests,
            seedWorkItems,
            seedWorkItemMaterials,
            seedWorkItemTests,
            seedWorkItemMaterialTests,
        ]),
    );

    if (error) throw error;
}

main()
    .then(async () => {
        await prisma.$disconnect();
        console.log("Disconnected the Prisma client.");
    })
    .catch(async (error: Error) => {
        console.error(`\nSeeding failed: ${errorHandler(error).message}`);
        await prisma.$disconnect();
        process.exit(1);
    });
