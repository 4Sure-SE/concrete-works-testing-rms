import * as projectAdapter from "@/lib/adapters/project";
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
});
