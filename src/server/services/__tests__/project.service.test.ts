import * as projectAdapter from "@/lib/adapters/project";
import { fakeProjectWorkItemData } from "@/lib/stubs/project-details.stub";
import { fakeProject, fakeProjectDTO } from "@/lib/stubs/project.stub";
import * as projectMaterialTestAccess from "@/server/data-access/project-material-test/project-material-test";
import * as projectWorkItemTestAccess from "@/server/data-access/project-work-item-test/project-work-item-test";
import * as projectDataAccess from "@/server/data-access/project/project";
import { ProjectService } from "@/server/services/project.service";

describe("ProjectService", () => {
    describe("deleteProject", () => {
        const projectIdToDelete = fakeProject.id;

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
            await projectDataAccess.createProject(fakeProject);

            const result =
                await ProjectService.deleteProject(projectIdToDelete);

            // check if the project was deleted
            expect(result).toEqual(fakeProjectDTO);
        });

        it("throws a vague error when the db fails", async () => {
            await projectDataAccess.createProject(fakeProject);

            const dbError = new Error("DB Error");

            // mock the deleteProject function to throw an error
            const deleteProjectSpy = vi
                .spyOn(projectDataAccess, "deleteProject")
                .mockRejectedValue(dbError);

            // check if the error is thrown
            await expect(
                ProjectService.deleteProject(projectIdToDelete),
            ).rejects.toThrow(
                `[Service] Failed to delete project ID: ${projectIdToDelete}`,
            );

            expect(deleteProjectSpy).toHaveBeenCalledWith(projectIdToDelete);
        });

        it("throws a not found error when project doesn't exist", async () => {
            // directly call the deleteProject function without creating the project
            // and check if the error is thrown
            await expect(
                ProjectService.deleteProject(projectIdToDelete),
            ).rejects.toThrow(
                `[Service] Project with ID ${projectIdToDelete} not found`,
            );
        });
        it("throws an error when project DTO conversion fails", async () => {
            await projectDataAccess.createProject(fakeProject);

            // mock the projectToDTO function to return null (failed conversion)
            vi.spyOn(projectAdapter, "projectToDTO").mockReturnValue(null);

            await expect(
                ProjectService.deleteProject(projectIdToDelete),
            ).rejects.toThrow(
                `[Service] Failed to convert deleted project ID: ${projectIdToDelete}`,
            );
        });
    });

    describe("getProjectDetails", () => {
        const projectId = fakeProject.id;

        beforeEach(async () => {
            // before each test
            // clear all mocks and clear the projects and all associated dat
            vi.clearAllMocks();
            await projectDataAccess.clearProjects();
        });

        afterEach(async () => {
            vi.restoreAllMocks();
            await projectDataAccess.clearProjects();
        });

        it("successfully get ptoject details and return its DTO", async () => {
            await projectDataAccess.createProject(fakeProject);
            await ProjectService.createProjectWorkItem(
                projectId,
                fakeProjectWorkItemData,
            );

            const result = await ProjectService.getProjectDetails(projectId);

            expect(result).toMatchObject({
                contractId: fakeProject.contractId,
                projectWorkItem: [
                    expect.objectContaining({
                        description: "Reinforced Concrete",

                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        itemTest: expect.arrayContaining([
                            expect.objectContaining({
                                balance: 1,
                                requiredTests: 1,
                                testQuantity: 1,
                                testRequired: "Trial Mix",
                                testsOnFile: 0,
                            }),
                        ]),
                    }),
                ],
            });
        });

        it("should return an error if project is not found", async () => {
            const fakeProjectId = "550e8400-e29b-41d4-a716-446655440000"; // valid UUID

            // Use async/await with expect.rejects to check for error thrown
            await expect(
                ProjectService.getProjectDetails(fakeProjectId),
            ).rejects.toThrowError(
                `[Service] Project with ID ${fakeProjectId} not found`,
            );
        });

        it("should return a DTO with empty work items if none exist", async () => {
            const project = { ...fakeProject };
            await projectDataAccess.createProject(project);

            const result = await ProjectService.getProjectDetails(project.id);

            expect(result.projectWorkItem).toEqual([]);
        });

        it("throws an error when projectDetailsToDTO conversion fails", async () => {
            await projectDataAccess.createProject(fakeProject);

            // Spy on and mock the DTO conversion to return null
            vi.spyOn(projectAdapter, "projectDetailsToDTO").mockReturnValue(
                null,
            );

            await expect(
                ProjectService.getProjectDetails(fakeProject.id),
            ).rejects.toThrow(
                `[Service] Failed to convert project ID: ${fakeProject.id} to DTO`,
            );
        });
        it("throws a vague error when the DB fails during getProjectDetails", async () => {
            await projectDataAccess.createProject(fakeProject);
            const dbError = new Error("DB Error");

            // simulate a DB failure when calling getProjectDetailsById
            const getProjectDetailsByIdSpy = vi
                .spyOn(projectDataAccess, "getProjectDetailsById")
                .mockRejectedValue(dbError);

            // check that the service throws the appropriate error
            await expect(
                ProjectService.getProjectDetails(projectId),
            ).rejects.toThrow(
                `[Service] Project with ID ${projectId} not found`,
            );

            expect(getProjectDetailsByIdSpy).toHaveBeenCalledWith(projectId);
        });
    });

    describe("updateProjectWorkItemsTestCount", () => {
        const projectId = fakeProject.id;

        beforeEach(async () => {
            // before each test
            // clear all mocks and clear the projects and all associated dat
            vi.clearAllMocks();
            await projectDataAccess.clearProjects();
        });

        afterEach(async () => {
            vi.restoreAllMocks();
            await projectDataAccess.clearProjects();
        });

        it("successfully increment test count", async () => {
            await projectDataAccess.createProject(fakeProject);
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

            expect(workItemTestId).toBeDefined(); // ensure we have a valid test ID

            const result = await ProjectService.updateProjectWorkItemsTestCount(
                workItemTestId!,
                3,
            );

            expect(result).toBeDefined(); // ensure update result exists
            expect(result.onFile).toBeGreaterThanOrEqual(3); // depending on test data
        }, 20000);

        it("successfully decrement test count", async () => {
            await projectDataAccess.createProject(fakeProject);

            await ProjectService.createProjectWorkItem(
                projectId,
                fakeProjectWorkItemData,
            );

            const projectDetails =
                await ProjectService.getProjectDetails(projectId);

            const workItemTestId =
                projectDetails.projectWorkItem?.[0]?.itemTest?.[0]?.id;

            expect(workItemTestId).toBeDefined(); // ensure we have a valid test ID

            await ProjectService.updateProjectWorkItemsTestCount(
                workItemTestId!,
                3,
            );

            const result = await ProjectService.updateProjectWorkItemsTestCount(
                workItemTestId!,
                -1,
            );

            expect(result).toBeDefined(); // ensure update result exists
            expect(result.onFile).toEqual(2); // depending on test data
        }, 20000);

        it("should throw an error if work item test is not found", async () => {
            const fakeWorkItemTestId = "123e4567-e89b-12d3-a456-426614174000";

            await expect(
                ProjectService.updateProjectWorkItemsTestCount(
                    fakeWorkItemTestId,
                    3,
                ),
            ).rejects.toThrow("Work item test not found");
        }, 20000);

        it("should throw an error when DB update fails", async () => {
            await projectDataAccess.createProject(fakeProject);

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
        const projectId = fakeProject.id;

        beforeEach(async () => {
            // before each test
            // clear all mocks and clear the projects and all associated dat
            vi.clearAllMocks();
            await projectDataAccess.clearProjects();
        });

        afterEach(async () => {
            vi.restoreAllMocks();
            await projectDataAccess.clearProjects();
        });

        it("successfully increment test count", async () => {
            await projectDataAccess.createProject(fakeProject);
            await ProjectService.createProjectWorkItem(
                projectId,
                fakeProjectWorkItemData,
            );

            const projectDetails =
                await ProjectService.getProjectDetails(projectId);

            const materialTestId =
                projectDetails.projectWorkItem?.[0]?.materials[0]
                    ?.materialTest[0]?.id;

            expect(materialTestId).toBeDefined(); // ensure we have a valid test ID

            const result = await ProjectService.updateProjectMaterialTestCount(
                materialTestId!,
                3,
            );

            expect(result).toBeDefined(); // ensure update result exists
            expect(result.onFile).toBeGreaterThanOrEqual(3); // depending on test data
        }, 20000);

        it("successfully decrement test count", async () => {
            await projectDataAccess.createProject(fakeProject);

            await ProjectService.createProjectWorkItem(
                projectId,
                fakeProjectWorkItemData,
            );

            const projectDetails =
                await ProjectService.getProjectDetails(projectId);

            const materialTestId =
                projectDetails.projectWorkItem?.[0]?.materials[0]
                    ?.materialTest[0]?.id;

            expect(materialTestId).toBeDefined(); // ensure we have a valid test ID

            await ProjectService.updateProjectMaterialTestCount(
                materialTestId!,
                3,
            );

            const result = await ProjectService.updateProjectMaterialTestCount(
                materialTestId!,
                -1,
            );

            expect(result).toBeDefined(); // ensure update result exists
            expect(result.onFile).toEqual(2); // depending on test data
        }, 20000);

        it("should throw an error if work item test is not found", async () => {
            const fakeMaterialTestId = "123e4567-e89b-12d3-a456-426614174000";

            await expect(
                ProjectService.updateProjectMaterialTestCount(
                    fakeMaterialTestId,
                    3,
                ),
            ).rejects.toThrow("[Service] Material test not found");
        }, 20000);

        it("should throw an error when DB update fails", async () => {
            await projectDataAccess.createProject(fakeProject);

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
