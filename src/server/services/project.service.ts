import "server-only";

import {
    projectDetailsToDTO,
    projectSummaryToDTO,
    projectToDTO,
} from "@/lib/adapters/project";
import { projectWorkItemToDTO } from "@/lib/adapters/project-work-item/project-work-item-to-dto";
import type {
    CreateProjectDTO,
    ProjectDTO,
    ProjectSummaryDTO,
} from "@/lib/types/project";
import type {
    ProjectWorkItemDTO,
    UpdateProjectWorkItemDTO,
} from "@/lib/types/project-work-item/project-work-item.types";
import type { Projects } from "@/lib/types/project/project-details.types";
import type { CreateProjectWorkItemDTO } from "@/lib/types/work-item";
import { formatDate, tryCatch } from "@/lib/utils";
import {
    createProject,
    deleteProject,
    getProjectById,
    getProjectDetailsById,
    getProjectSummaryList,
    updateProject,
} from "@/server/data-access/project";
import {
    getProjectMaterialTestById,
    updateMaterialTestCount,
} from "../data-access/project-material-test/project-material-test";
import {
    getProjectWorkItemTestById,
    updateWorkItemsTestCount,
} from "../data-access/project-work-item-test/project-work-item-test";

import type {
    ProjectListFilters,
    UpdateProjectDTO,
} from "@/lib/types/project/project.types";
import {
    PrismaClient,
    type Prisma,
    type ProjectMaterial,
    type ProjectWorkItem,
} from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { createProjectMaterialTests } from "../data-access/project-material-test/project-material-test";
import {
    createProjectMaterials,
    getProjectMaterialListByProjectWorkItem,
    updateProjectMaterial,
} from "../data-access/project-material/project-material";
import { addProjectWorkItemTests } from "../data-access/project-work-item-test/project-work-item-test";
import {
    createProjectWorkItem,
    deleteProjectWorkItem,
    getProjectWorkItemById,
    getProjectWorkItemByProjectIdAndWorkItemId,
    getProjectWorkItemListByProjectId,
    updateProjectWorkItem,
} from "../data-access/project-work-item/project-work-item";
import {
    generateProjectShareLink,
    getProjectDetailsByToken,
    getProjectsCount,
} from "../data-access/project/project";
import type { WorkItemMaterialDefinitionPayload } from "../data-access/work-item-material/work-item-material.payloads";
import type { WorkItemTestDefinitionPayload } from "../data-access/work-item-test/work-item-test.payloads";
import { getWorkItemWithAllDefinitions } from "../data-access/work-item/work-item";

// helpers

const _calculateMaterialQuantity = (
    wimDef: WorkItemMaterialDefinitionPayload,
    workItemQty: Decimal,
) => {
    let quantity: Decimal;

    // if the conversion (quantity per unit) is defined, use that to calculate the quantity
    if (wimDef.quantityPerUnit) {
        quantity = wimDef.quantityPerUnit.mul(workItemQty);
        // otherwise if the static quantity is defined, use that
    } else if (wimDef.staticQuantity) {
        quantity = wimDef.staticQuantity;
    } else {
        throw new Error(
            `[Service] No quantity found for work item material ID: ${wimDef.id}`,
        );
    }

    // if the unit of the material is a whole number, round the quantity
    if (wimDef.material.unit.isWholeNumber) {
        quantity = quantity.round();
    }

    return quantity;
};

// generate project materials for a work item
const _generateProjectMaterials = async (
    data: ProjectWorkItem,
    workItemMaterials: WorkItemMaterialDefinitionPayload[],
    tx: Prisma.TransactionClient,
) => {
    console.log(
        `[Service] Generating project materials for work item ID: ${data.workItemId}`,
    );

    // get all materials based on the work item definition
    const projectMaterialData = workItemMaterials.map((wimDef) => {
        return {
            materialId: wimDef.materialId,
            quantity: _calculateMaterialQuantity(wimDef, data.quantity),
            projectWorkItemId: data.id,
        };
    });

    //  add all materials found in the work item definition to the project material table
    const projectMaterials = await createProjectMaterials(
        projectMaterialData,
        tx,
    );
    return projectMaterials;
};

// generate project work item tests for a work item
const _generateProjectWorkItemTests = async (
    data: ProjectWorkItem,
    workItemTests: WorkItemTestDefinitionPayload[],
    tx: Prisma.TransactionClient,
) => {
    console.log(
        `[Service] Generating project work item tests for work item ID: ${data.workItemId}`,
    );
    //  get the tests required for the work item

    // create project work item test records
    const projectWorkItemTestsData: Prisma.ProjectWorkItemTestCreateManyInput[] =
        workItemTests.map((test) => {
            return {
                testId: test.testId,
                projectWorkItemId: data.id,
            };
        });

    const projectWorkItemTests = await addProjectWorkItemTests(
        projectWorkItemTestsData,
        tx,
    );

    return projectWorkItemTests;
};

// generate project materialt tests for a material
const _generateProjectMaterialTests = async (
    data: ProjectMaterial[],
    workItemMaterials: (WorkItemMaterialDefinitionPayload & {
        workItemMaterialTest: { testId: string }[];
    })[],
    tx: Prisma.TransactionClient,
) => {
    console.log(`[Service] Generating project material tests`);

    const projectMaterialTestData: Prisma.ProjectMaterialTestCreateManyInput[] =
        [];

    // go through the work item materials and get the tests for each material
    workItemMaterials.forEach((workItemMaterialDef) => {
        // find the current material from the generated materials
        const projectMaterial = data.find(
            (projectMaterial) =>
                projectMaterial.materialId === workItemMaterialDef.materialId,
        );
        // skip if not found
        if (!projectMaterial) return;

        // get the tests for the material
        workItemMaterialDef.workItemMaterialTest.forEach(
            (workItemMaterialDef) => {
                projectMaterialTestData.push({
                    projectMaterialId: projectMaterial.id,
                    testId: workItemMaterialDef.testId,
                });
            },
        );
    });

    const projectMaterialTests = await createProjectMaterialTests(
        projectMaterialTestData,
        tx,
    );

    return projectMaterialTests;
};

export const ProjectService = {
    async generateShareLink(projectId: string): Promise<string> {
        console.log(
            `[Service] Generating share link for project ID: ${projectId}`,
        );

        const existingProject = await getProjectById(projectId);

        if (!existingProject) {
            throw new Error(`[Service] Project with ID ${projectId} not found`);
        }

        const existingToken = existingProject.token;

        // check if the project is already shared
        if (existingToken !== null) {
            console.log(
                `[Service] Project with ID ${projectId} already has a share link`,
            );
            return existingToken;
        }

        // generate a new share link
        const res = await generateProjectShareLink(projectId);

        if (!res.token) {
            throw new Error(
                `[Service] Failed to generate share link for project ID: ${projectId}`,
            );
        }

        return res.token;
    },

    // get project details by token
    async getProjectDetailsByToken(token: string): Promise<Projects> {
        console.log(`[Service] Getting project details by token: ${token}`);

        const rawProject = await getProjectDetailsByToken(token);

        if (!rawProject) {
            throw new Error(`[Service] Invalid token: no project found`);
        }

        const dto = projectDetailsToDTO(rawProject);
        if (!dto) {
            throw new Error(
                `[Service] Failed to convert project with token: ${token}`,
            );
        }

        return dto;
    },

    // get project by id
    async getProjectById(projectId: string): Promise<ProjectDTO> {
        console.log(`[Service] Getting project ID: ${projectId}`);

        const rawProject = await getProjectById(projectId);

        const dto = projectToDTO(rawProject);

        if (!dto) {
            throw new Error(
                `[Service] Failed to convert project ID: ${projectId}`,
            );
        }

        return dto;
    },
    async getProjectsCount(filters: ProjectListFilters): Promise<number> {
        console.log(`[Service] Getting projects count`);

        const count = await getProjectsCount(filters);

        return count;
    },
    // get project summary list
    async getProjectSummaryList(
        filters: ProjectListFilters,
    ): Promise<ProjectSummaryDTO[]> {
        console.log(`[Service] Getting project list summary`);

        // fetch raw data
        const projectSummaryListPayload = await getProjectSummaryList(filters);

        // transform to dto used by the ui
        const dtoList = projectSummaryListPayload
            .map(projectSummaryToDTO)
            .filter((dto): dto is ProjectSummaryDTO => dto !== null);

        console.log(`[Service] Retrieved ${dtoList.length} project summaries`);
        return dtoList;
    },

    // get last 5 project summaries
    // used in the sidebar
    async getLastFiveProjectSummaryList(): Promise<ProjectSummaryDTO[]> {
        console.log(`[Service] Getting last 5 project summaries`);
        const lastFiveSummariesPayload = await getProjectSummaryList({
            currentPage: 1,
            itemsPerPage: 5,
        });

        // transform to dto used by the ui
        const lastFiveSummaries = lastFiveSummariesPayload
            .map(projectSummaryToDTO)
            .filter((vm): vm is ProjectSummaryDTO => vm !== null);

        console.log(
            `[Service] Retrieved ${lastFiveSummaries.length} project summaries (last 5)`,
        );
        return lastFiveSummaries;
    },

    // create new project
    async createNewProject(input: CreateProjectDTO): Promise<ProjectDTO> {
        console.log(`[Service] Creating new project: ${input.contractId}`);

        const newProjectRecord = await createProject(input);

        const outputDto = projectToDTO(newProjectRecord);

        if (!outputDto) {
            throw new Error(
                "[Service] Failed to convert newly created project.",
            );
        }

        return outputDto;
    },

    // update project
    async updateProject(
        projectId: string,
        data: UpdateProjectDTO,
    ): Promise<ProjectDTO> {
        console.log(`[Service] Updating project ID: ${projectId}`);

        // check if the project exists
        const existingProject = await getProjectById(projectId);

        if (!existingProject) {
            throw new Error(`[Service] Project with ID ${projectId} not found`);
        }

        // check if there are any changes to the project
        if (
            existingProject.contractId === data.contractId &&
            existingProject.contractName === data.contractName &&
            existingProject.contractor === data.contractor &&
            existingProject.materialsEngineer === data.materialsEngineer &&
            formatDate(existingProject.dateStarted) ===
                formatDate(data.dateStarted!) &&
            existingProject.contractCost.toNumber() === data.contractCost &&
            existingProject.limits === data.limits &&
            existingProject.location === data.location
        ) {
            throw new Error(`[Service] No changes made`);
        }

        const updatedProjectRecord = await updateProject(projectId, data);
        const outputDto = projectToDTO(updatedProjectRecord);

        if (!outputDto) {
            throw new Error("[Service] Failed to convert updated project.");
        }

        return outputDto;
    },

    // delete project
    async deleteProject(projectId: string): Promise<ProjectDTO> {
        console.log(`[Service] Deleting project ID: ${projectId}`);

        // check if the project exists
        const existingProject = await getProjectById(projectId);

        if (!existingProject) {
            throw new Error(`[Service] Project with ID ${projectId} not found`);
        }

        const { data, error } = await tryCatch(deleteProject(projectId));

        if (error || !data) {
            throw new Error(
                `[Service] Failed to delete project ID: ${projectId}`,
            );
        }

        const dto = projectToDTO(data);

        if (!dto) {
            throw new Error(
                `[Service] Failed to convert deleted project ID: ${projectId}`,
            );
        }

        return dto;
    },

    // get project details by id
    async getProjectDetails(projectId: string): Promise<Projects> {
        console.log(
            `[Service] Getting full project details for ID: ${projectId}`,
        );

        const { data, error } = await tryCatch(
            getProjectDetailsById(projectId),
        );

        if (error || !data)
            throw new Error(`[Service] Project with ID ${projectId} not found`);

        const dto = projectDetailsToDTO(data);
        if (!dto)
            throw new Error(
                `[Service] Failed to convert project ID: ${projectId} to DTO`,
            );
        return dto;
    },

    async updateProjectWorkItemsTestCount(id: string, amount: number) {
        const test = await getProjectWorkItemTestById(id);

        if (!test) {
            throw new Error("[Service] Work item test not found");
        }

        const newValue = Math.max(0, (test.onFile ?? 0) + amount);

        return await updateWorkItemsTestCount(id, newValue);
    },

    async updateProjectMaterialTestCount(id: string, amount: number) {
        const test = await getProjectMaterialTestById(id);

        if (!test) {
            throw new Error("[Service] Material test not found");
        }

        const newValue = Math.max(0, (test.onFile ?? 0) + amount);

        return await updateMaterialTestCount(id, newValue);
    },

    async getProjectWorkItemList(
        projectId: string,
    ): Promise<ProjectWorkItemDTO[]> {
        console.log(
            `[Service] Getting project work item list for ID: ${projectId}`,
        );

        const rawProjectWorkItems =
            await getProjectWorkItemListByProjectId(projectId);

        const dtoList = rawProjectWorkItems
            .map(projectWorkItemToDTO)
            .filter((dto): dto is ProjectWorkItemDTO => dto !== null);

        return dtoList;
    },

    // create project work item
    async createProjectWorkItem(
        projectId: string,
        data: CreateProjectWorkItemDTO,
    ): Promise<ProjectWorkItemDTO> {
        if (!projectId)
            throw new Error(`[Service] Project with ID ${projectId} not found`);

        // check if the project work item already exists
        const existingProjectWorkItem =
            await getProjectWorkItemByProjectIdAndWorkItemId(
                projectId,
                data.workItemId,
            );

        // if it exists, update the project work item instead
        if (existingProjectWorkItem) {
            console.log(
                `[Service] Project work item already exists. Updating work item and material qunatities.`,
            );

            return this.updateProjectWorkItem(existingProjectWorkItem.id, {
                quantity:
                    data.quantity + existingProjectWorkItem.quantity.toNumber(),
            });
        } else {
            console.log(`[Service] Creating new project work item.`);
            // all the definitions of the work item - material, test conversions
            // used to generate the project work item tests and materials
            const workItemDefinitions = await getWorkItemWithAllDefinitions(
                data.workItemId,
            );

            if (!workItemDefinitions) {
                throw new Error(
                    `Work Item definition ${data.workItemId} not found.`,
                );
            }

            const client = new PrismaClient();

            // create a new project work item
            const { data: projectWorkItem, error } = await tryCatch(
                client.$transaction(
                    async (tx) => {
                        // create with a transaction to ensure atomicity (if any part fails, all changes are rolled back)

                        console.log(
                            `[Service] Creating project work item for project ID: ${projectId}`,
                        );

                        // create project work item record
                        const projectWorkItem = await createProjectWorkItem(
                            projectId,
                            data,
                            tx,
                        );

                        // generate the work item tests
                        await _generateProjectWorkItemTests(
                            projectWorkItem,
                            workItemDefinitions.workItemTest,
                            tx,
                        );

                        // generate the project materials
                        const projectMaterials =
                            await _generateProjectMaterials(
                                projectWorkItem,
                                workItemDefinitions.workItemMaterial,
                                tx,
                            );

                        // generate the project material tests
                        await _generateProjectMaterialTests(
                            projectMaterials,
                            workItemDefinitions.workItemMaterial,
                            tx,
                        );

                        return getProjectWorkItemById(projectWorkItem.id, tx);
                    },
                    { maxWait: 3000, timeout: 6000 },
                ),
            );

            await client.$disconnect();

            if (error) {
                throw new Error(`[Service] Failed to create project work item`);
            }

            if (projectWorkItem === null) {
                throw new Error(
                    `[Service] Failed to create project work item for project ID: ${projectId}`,
                );
            }

            const projectWorkItemDTO = projectWorkItemToDTO(projectWorkItem);

            return projectWorkItemDTO;
        }
    },

    // update project work item
    async updateProjectWorkItem(id: string, data: UpdateProjectWorkItemDTO) {
        console.log(`[Service] Updating project work item with ID: ${id}`);

        const client = new PrismaClient();

        const projectWorkItem = await getProjectWorkItemById(id);

        if (!projectWorkItem) {
            throw new Error(
                `[Service] Project work item with ID ${id} not found`,
            );
        }

        if (projectWorkItem.quantity.toNumber() === data.quantity) {
            throw new Error(`[Service] No changes made`);
        }

        // all the definitions of the work item - material, test conversions
        // used to generate the project work item tests and materials
        const workItemDefinitions = await getWorkItemWithAllDefinitions(
            projectWorkItem.workItemId,
        );

        if (!workItemDefinitions) {
            throw new Error(
                `Work Item definition ${projectWorkItem.workItemId} not found.`,
            );
        }
        const newQuantity = new Decimal(data.quantity);

        const projectMaterials =
            await getProjectMaterialListByProjectWorkItem(id);

        // get the update data for the project materials
        const materialUpdates: { id: string; quantity: Decimal }[] = [];
        for (const projectMaterial of projectMaterials) {
            const workItemMaterialDef =
                workItemDefinitions.workItemMaterial.find(
                    (def) => def.materialId === projectMaterial.materialId,
                );

            if (workItemMaterialDef) {
                // add the new quantity to the material updates array
                materialUpdates.push({
                    id: projectMaterial.id,
                    quantity: _calculateMaterialQuantity(
                        workItemMaterialDef,
                        newQuantity,
                    ),
                });
            } else {
                console.warn(
                    `[Service] Work item material definition not found for material ID: ${projectMaterial.materialId}`,
                );
            }
        }

        const { data: updatedProjectWorkItem, error } = await tryCatch(
            // use a transaction to ensure atomicity (if any part fails, all changes are rolled back)
            client.$transaction(
                async (tx) => {
                    // update the project work item with the new quantity
                    const updatedProjectWorkItem = await updateProjectWorkItem(
                        id,
                        {
                            // set the new quantity
                            quantity: new Decimal(data.quantity),
                        },
                        tx,
                    );

                    // update the project materials with the new quantity
                    await Promise.all(
                        materialUpdates.map(
                            async (update) =>
                                await updateProjectMaterial(
                                    update.id,
                                    {
                                        quantity: update.quantity,
                                    },
                                    tx,
                                ),
                        ),
                    );

                    return updatedProjectWorkItem;
                },
                { maxWait: 3000, timeout: 6000 },
            ),
        );

        await client.$disconnect();

        if (error) {
            throw error;
        }

        if (!updatedProjectWorkItem) {
            throw new Error(
                `[Service] Failed to update project work item with ID: ${id}`,
            );
        }

        const projectWorkItemPayload = await getProjectWorkItemById(
            updatedProjectWorkItem.id,
        );

        if (!projectWorkItemPayload) {
            throw new Error(
                `[Service] Failed to get updated project work item with ID: ${id}`,
            );
        }

        const updatedProjectWorkItemDTO = projectWorkItemToDTO(
            projectWorkItemPayload,
        );

        return updatedProjectWorkItemDTO;
    },

    async deleteProjectWorkItem(id: string) {
        console.log(`[Service] Deleting project work item with ID: ${id}`);

        const { data, error } = await tryCatch(deleteProjectWorkItem(id));

        if (error || !data) {
            throw new Error(
                `[Service] Failed to delete project work item with ID: ${id}`,
            );
        }

        const dto = projectWorkItemToDTO(data);

        if (!dto) {
            throw new Error(
                `[Service] Failed to convert deleted project work item with ID: ${id}`,
            );
        }

        return dto;
    },
};
