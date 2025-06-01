import * as projectAdapter from "@/lib/adapters/project";
import { fakeProjectWorkItemData } from "@/lib/stubs/project-details.stub";
import { fakeProjectDTO } from "@/lib/stubs/project.stub";
import { type Projects } from "@/lib/types/project";
import * as projectMaterialTestAccess from "@/server/data-access/project-material-test/project-material-test";
import * as projectWorkItemTestAccess from "@/server/data-access/project-work-item-test/project-work-item-test";
import * as projectDataAccess from "@/server/data-access/project/project";
import { ProjectService } from "@/server/services/project.service";

describe("ProjectService", () => {
    describe("deleteProject", () => {
        const projectIdToDelete = fakeProjectDTO.id;

        beforeEach(async () => {
            // before each test
            // clear all mocks and clear the projects and all associated dat
            vi.clearAllMocks();
            await projectDataAccess.clearProjects();
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        it("successfully deletes an existing project and returns its DTO", async () => {
            // create a project in the db
            await projectDataAccess.createProject(fakeProjectDTO);

            const result =
                await ProjectService.deleteProject(projectIdToDelete);

            // check if the project was deleted
            expect(result).toEqual(fakeProjectDTO);
        });

        it("throws a vague error when the db fails", async () => {
            await projectDataAccess.createProject(fakeProjectDTO);

            const dbError = new Error("DB Error");

            // mock the deleteProject function to throw an error
            const deleteProjectSpy = vi
                .spyOn(projectDataAccess, "deleteProject")
                .mockRejectedValue(dbError);

            // check if the error is thrown
            await expect(
                ProjectService.deleteProject(projectIdToDelete),
            ).rejects.toThrow(
                `Failed to delete project ID: ${projectIdToDelete}`,
            );

            expect(deleteProjectSpy).toHaveBeenCalledWith(projectIdToDelete);
        });

        it("throws a not found error when project doesn't exist", async () => {
            // directly call the deleteProject function without creating the project
            // and check if the error is thrown
            await expect(
                ProjectService.deleteProject(projectIdToDelete),
            ).rejects.toThrow(`Project with ID ${projectIdToDelete} not found`);
        });
        it("throws an error when project DTO conversion fails", async () => {
            await projectDataAccess.createProject(fakeProjectDTO);

            // mock the projectToDTO function to return null (failed conversion)
            vi.spyOn(projectAdapter, "projectToDTO").mockReturnValue(null);

            await expect(
                ProjectService.deleteProject(projectIdToDelete),
            ).rejects.toThrow(
                `Failed to convert deleted project ID: ${projectIdToDelete}`,
            );
        });
    });

    describe("getProjectDetails", () => {
        const projectId = fakeProjectDTO.id;

        beforeEach(async () => {
            vi.clearAllMocks();
            await projectDataAccess.clearProjects();
        });

        afterEach(async () => {
            vi.restoreAllMocks();
            await projectDataAccess.clearProjects();
        });

        //Happy Path
        it("successfully get ptoject details and return its DTO", async () => {
            await projectDataAccess.createProject(fakeProjectDTO);
            await ProjectService.createProjectWorkItem(
                projectId,
                fakeProjectWorkItemData,
            );

            const result: Projects =
                await ProjectService.getProjectDetails(projectId);
            console.log(result);

            expect(result).toMatchObject({
                contractId: "fake-contract-id",
                contractName: "Fake Contract Name",
                contractor: "Fake Contractor",
                limits: "Fake Limits",
                location: "Fake Location",
                materialsEngineer: "Fake Engineer",
                contractCost: 1000,
                projectWorkItem: [
                    {
                        itemNo: "Item 900",
                        description: "Reinforced Concrete",
                        quantity: 1000,
                        unit: "cubic meter",
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        itemTest: expect.any(Array),
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        materials: expect.any(Array),
                    },
                ],
            });
        }, 20000);

        //Sad Path
        it("should return an error if project is not found", async () => {
            const fakeProjectId = "550e8400-e29b-41d4-a716-446655440000";

            await expect(
                ProjectService.getProjectDetails(fakeProjectId),
            ).rejects.toThrowError(
                `[Service] Project with ID ${fakeProjectId} not found`,
            );
        }, 20000);

        //Happy Path
        it("should return a DTO with empty work items if none exist", async () => {
            const project = { ...fakeProjectDTO };
            await projectDataAccess.createProject(project);

            const result = await ProjectService.getProjectDetails(project.id);

            expect(result.projectWorkItem).toEqual([]);
        }, 20000);

        //Sad Path
        it("throws an error when projectDetailsToDTO conversion fails", async () => {
            await projectDataAccess.createProject(fakeProjectDTO);

            vi.spyOn(projectAdapter, "projectDetailsToDTO").mockReturnValue(
                null,
            );

            await expect(
                ProjectService.getProjectDetails(fakeProjectDTO.id),
            ).rejects.toThrow(
                `[Service] Failed to convert project ID: ${fakeProjectDTO.id} to DTO`,
            );
        }, 20000);

        //Sad Path
        it("throws a vague error when the DB fails during getProjectDetails", async () => {
            await projectDataAccess.createProject(fakeProjectDTO);
            const dbError = new Error("DB Error");

            const getProjectDetailsByIdSpy = vi
                .spyOn(projectDataAccess, "getProjectDetailsById")
                .mockRejectedValue(dbError);

            await expect(
                ProjectService.getProjectDetails(projectId),
            ).rejects.toThrow(
                `[Service] Project with ID ${projectId} not found`,
            );

            expect(getProjectDetailsByIdSpy).toHaveBeenCalledWith(projectId);
        }, 20000);
    });

    describe("updateProjectWorkItemsTestCount", () => {
        const projectId = fakeProjectDTO.id;

        beforeEach(async () => {
            vi.clearAllMocks();
            await projectDataAccess.clearProjects();
        });

        afterEach(async () => {
            vi.restoreAllMocks();
            await projectDataAccess.clearProjects();
        });

        //Happy Path
        it("successfully increment test count", async () => {
            await projectDataAccess.createProject(fakeProjectDTO);
            await ProjectService.createProjectWorkItem(
                projectId,
                fakeProjectWorkItemData,
            );

            const projectDetails =
                await ProjectService.getProjectDetails(projectId);

            const workItemTestId =
                projectDetails.projectWorkItem?.[0]?.itemTest?.[0]?.id;

            const workItemTestOnFile =
                projectDetails.projectWorkItem?.[0]?.itemTest?.[0]?.testsOnFile;

            console.log("Test Id", workItemTestId);
            console.log("Test On File", workItemTestOnFile);

            expect(workItemTestId).toBeDefined();

            const result = await ProjectService.updateProjectWorkItemsTestCount(
                workItemTestId!,
                3,
            );

            expect(result).toBeDefined();
            expect(result.onFile).toBeGreaterThanOrEqual(3);
        }, 20000);

        //Happy Path
        it("successfully decrement test count", async () => {
            await projectDataAccess.createProject(fakeProjectDTO);

            await ProjectService.createProjectWorkItem(
                projectId,
                fakeProjectWorkItemData,
            );

            const projectDetails =
                await ProjectService.getProjectDetails(projectId);

            const workItemTestId =
                projectDetails.projectWorkItem?.[0]?.itemTest?.[0]?.id;

            expect(workItemTestId).toBeDefined();

            await ProjectService.updateProjectWorkItemsTestCount(
                workItemTestId!,
                3,
            );

            const result = await ProjectService.updateProjectWorkItemsTestCount(
                workItemTestId!,
                -1,
            );

            expect(result).toBeDefined();
            expect(result.onFile).toEqual(2);
        }, 20000);

        //Sad Path
        it("should throw an error if work item test is not found", async () => {
            const fakeWorkItemTestId = "123e4567-e89b-12d3-a456-426614174000";

            await expect(
                ProjectService.updateProjectWorkItemsTestCount(
                    fakeWorkItemTestId,
                    3,
                ),
            ).rejects.toThrow("Work item test not found");
        }, 20000);

        //Sad Path
        it("should throw an error when DB update fails", async () => {
            await projectDataAccess.createProject(fakeProjectDTO);

            await ProjectService.createProjectWorkItem(
                projectId,
                fakeProjectWorkItemData,
            );

            const projectDetails =
                await ProjectService.getProjectDetails(projectId);

            const workItemTestId =
                projectDetails.projectWorkItem?.[0]?.itemTest?.[0]?.id;

            vi.spyOn(
                projectWorkItemTestAccess,
                "updateWorkItemsTestCount",
            ).mockRejectedValueOnce(new Error("DB Error"));

            await expect(
                ProjectService.updateProjectWorkItemsTestCount(
                    workItemTestId!,
                    1,
                ),
            ).rejects.toThrow("DB Error");
        }, 20000);
    });

    describe("updateProjectMaterialTestCount", () => {
        const projectId = fakeProjectDTO.id;

        beforeEach(async () => {
            vi.clearAllMocks();
            await projectDataAccess.clearProjects();
        });

        afterEach(async () => {
            vi.restoreAllMocks();
            await projectDataAccess.clearProjects();
        });

        //Happy Path
        it("successfully increment test count", async () => {
            await projectDataAccess.createProject(fakeProjectDTO);
            await ProjectService.createProjectWorkItem(
                projectId,
                fakeProjectWorkItemData,
            );

            const projectDetails =
                await ProjectService.getProjectDetails(projectId);

            const materialTestId =
                projectDetails.projectWorkItem?.[0]?.materials[0]
                    ?.materialTest[0]?.id;

            expect(materialTestId).toBeDefined();

            const result = await ProjectService.updateProjectMaterialTestCount(
                materialTestId!,
                3,
            );

            expect(result).toBeDefined();
            expect(result.onFile).toBeGreaterThanOrEqual(3);
        }, 20000);

        //Happy Path
        it("successfully decrement test count", async () => {
            await projectDataAccess.createProject(fakeProjectDTO);

            await ProjectService.createProjectWorkItem(
                projectId,
                fakeProjectWorkItemData,
            );

            const projectDetails =
                await ProjectService.getProjectDetails(projectId);

            const materialTestId =
                projectDetails.projectWorkItem?.[0]?.materials[0]
                    ?.materialTest[0]?.id;

            expect(materialTestId).toBeDefined();

            await ProjectService.updateProjectMaterialTestCount(
                materialTestId!,
                3,
            );

            const result = await ProjectService.updateProjectMaterialTestCount(
                materialTestId!,
                -1,
            );

            expect(result).toBeDefined();
            expect(result.onFile).toEqual(2);
        }, 20000);

        //Sad Path
        it("should throw an error if work item test is not found", async () => {
            const fakeMaterialTestId = "123e4567-e89b-12d3-a456-426614174000";

            await expect(
                ProjectService.updateProjectMaterialTestCount(
                    fakeMaterialTestId,
                    3,
                ),
            ).rejects.toThrow("[Service] Material test not found");
        }, 20000);

        //Sad Path
        it("should throw an error when DB update fails", async () => {
            await projectDataAccess.createProject(fakeProjectDTO);

            await ProjectService.createProjectWorkItem(
                projectId,
                fakeProjectWorkItemData,
            );

            const projectDetails =
                await ProjectService.getProjectDetails(projectId);

            const materialTestId =
                projectDetails.projectWorkItem?.[0]?.materials[0]
                    ?.materialTest[0]?.id;

            vi.spyOn(
                projectMaterialTestAccess,
                "updateMaterialTestCount",
            ).mockRejectedValueOnce(new Error("DB Error"));

            await expect(
                ProjectService.updateProjectMaterialTestCount(
                    materialTestId!,
                    1,
                ),
            ).rejects.toThrow("DB Error");
        }, 20000);
    });
});
