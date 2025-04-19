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
import { tryCatch } from "@/lib/utils";
import {
    createProject,
    getProjectById,
    getProjectDetailsById,
    getProjectSummaryList,
} from "@/server/data-access/project";
import { db } from "@/server/db";
import type { Prisma, ProjectMaterial, ProjectWorkItem } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { createProjectMaterialTest } from "../data-access/project-material-test/project-material-test";
import {
    createProjectMaterials,
    getProjectMaterialListByProjectWorkItem,
    updateProjectMaterial,
} from "../data-access/project-material/project-material";
import { addProjectWorkItemTests } from "../data-access/project-work-item-test/project-work-item-test";
import {
    createProjectWorkItem,
    getProjectWorkItemById,
    getProjectWorkItemByProjectIdAndWorkItemId,
    updateProjectWorkItem,
} from "../data-access/project-work-item/project-work-item";
import { getWorkItemMaterialTestDefinitions } from "../data-access/work-item-material-test/work-item-material-test";
import {
    getWorkItemMaterialDefinition,
    getWorkItemMaterialDefinitionList,
} from "../data-access/work-item-material/work-item-material";
import { getWorkItemTestDefinitions } from "../data-access/work-item-test/work-item-test";

// helpers

// generate project materials for a work item
const _generateProjectMaterials = async (
    data: ProjectWorkItem,
    tx: Prisma.TransactionClient,
) => {
    console.log(
        `[Service] Generating project materials for work item ID: ${data.workItemId}`,
    );
    // get the materials required for the work item
    const workItemMaterials = await getWorkItemMaterialDefinitionList(
        data.workItemId,
        tx,
    );

    // create project material records
    const projectMaterialsData: Prisma.ProjectMaterialCreateManyInput[] =
        workItemMaterials.map((item) => {
            return {
                materialId: item.materialId,
                // multiply the quantity per unit by the work item quantity
                // to get the total quantity of material needed for the project
                quantity: new Decimal(item.quantityPerUnit).mul(
                    new Decimal(data.quantity),
                ),
                projectWorkItemId: data.id,
            };
        });

    const projectMaterials = await createProjectMaterials(
        projectMaterialsData,
        tx,
    );

    return projectMaterials;
};

// generate project work item tests for a work item
const _generateProjectWorkItemTests = async (
    data: ProjectWorkItem,
    tx: Prisma.TransactionClient,
) => {
    console.log(
        `[Service] Generating project work item tests for work item ID: ${data.workItemId}`,
    );
    //  get the tests required for the work item
    const workItemTests = await getWorkItemTestDefinitions(data.workItemId, tx);

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
    data: ProjectMaterial,
    workItemId: string,
    tx: Prisma.TransactionClient,
) => {
    console.log(
        `[Service] Generating project material tests for material ID: ${data.materialId}`,
    );

    // const
    const workItemMaterial = await getWorkItemMaterialDefinition(
        workItemId,
        data.materialId,
        tx,
    );

    if (!workItemMaterial) {
        throw new Error(
            `[Service] Failed to get work item material ID for material ID: ${data.materialId} and work item ID: ${workItemId}`,
        );
    }

    // get the tests required for the material
    const materialTests = await getWorkItemMaterialTestDefinitions(
        workItemMaterial.id,
        tx,
    );

    // create the required tests for the project material
    const projectMaterialTestsData: Prisma.ProjectMaterialTestCreateManyInput[] =
        materialTests.map((test) => {
            return {
                testId: test.testId,
                projectMaterialId: data.id,
            };
        });

    const projectMaterialTests = await createProjectMaterialTest(
        projectMaterialTestsData,
        tx,
    );

    return projectMaterialTests;
};

export const ProjectService = {
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

    // get project summary list
    async getProjectSummaryList(): Promise<ProjectSummaryDTO[]> {
        console.log(`[Service] Getting project list summary`);

        // fetch raw data
        const projectSummaryListPayload = await getProjectSummaryList();

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
        const allProjectsPayload = await getProjectSummaryList();

        // transform to dto used by the ui
        const allSummaries = allProjectsPayload
            .map(projectSummaryToDTO)
            .filter((vm): vm is ProjectSummaryDTO => vm !== null);
        const lastFiveSummaries = allSummaries.slice(0, 5);

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

    // get project details by id
    async getProjectDetails(projectId: string): Promise<Projects> {
        console.log(
            `[Service] Getting full project details for ID: ${projectId}`,
        );

        const rawProject = await getProjectDetailsById(projectId);

        if (!rawProject)
            throw new Error(`[Service] Project with ID ${projectId} not found`);

        return projectDetailsToDTO(rawProject);
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
            // create a new project work item
            const { data: projectWorkItem, error } = await tryCatch(
                db.$transaction(
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

                        // generate the work item materials
                        const projectMaterials =
                            await _generateProjectMaterials(
                                projectWorkItem,
                                tx,
                            );

                        // generate the work item tests
                        await _generateProjectWorkItemTests(
                            projectWorkItem,
                            tx,
                        );

                        // generate the tests for each project material
                        for (const projectMaterial of projectMaterials) {
                            await _generateProjectMaterialTests(
                                projectMaterial,
                                projectWorkItem.workItemId,
                                tx,
                            );
                        }

                        return getProjectWorkItemById(projectWorkItem.id, tx);
                    },
                    { timeout: 10000 },
                ),
            );

            if (error) {
                throw error;
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

        const { data: updatedProjectWorkItem, error } = await tryCatch(
            // use a transaction to ensure atomicity (if any part fails, all changes are rolled back)
            db.$transaction(async (tx) => {
                const projectWorkItem = await getProjectWorkItemById(id, tx);

                if (!projectWorkItem) {
                    throw new Error(
                        `[Service] Project work item with ID ${id} not found`,
                    );
                }

                // update the project work item with the new quantity
                const updatedProjectWorkItem = await updateProjectWorkItem(
                    id,
                    {
                        // set the new quantity
                        quantity: new Decimal(data.quantity),
                    },
                    tx,
                );

                const projectMaterials =
                    await getProjectMaterialListByProjectWorkItem(
                        updatedProjectWorkItem.id,
                        tx,
                    );

                // update each project material with the new quantity
                for (const projectMaterial of projectMaterials) {
                    // get the work item material definition to get the conversion
                    const workItemMaterial =
                        await getWorkItemMaterialDefinition(
                            updatedProjectWorkItem.workItemId,
                            projectMaterial.materialId,
                            tx,
                        );

                    if (!workItemMaterial) {
                        throw new Error(
                            `[Service] Failed to get work item material ID for material ID: ${projectMaterial.materialId} and work item ID: ${updatedProjectWorkItem.workItemId}`,
                        );
                    }

                    // update the project material quantity
                    await updateProjectMaterial(
                        projectMaterial.id,
                        {
                            // multiply the quantity per unit by the new work item quantity
                            quantity: new Decimal(
                                workItemMaterial.quantityPerUnit,
                            ).mul(new Decimal(data.quantity)),
                        },
                        tx,
                    );
                }
                return updatedProjectWorkItem;
            }),
        );
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
};
