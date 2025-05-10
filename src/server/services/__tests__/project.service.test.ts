import * as projectAdapter from "@/lib/adapters/project";
import { fakeProjectWorkItemData } from "@/lib/stubs/project-details.stub";
import { fakeProject, fakeProjectDTO } from "@/lib/stubs/project.stub";
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
    });
});
