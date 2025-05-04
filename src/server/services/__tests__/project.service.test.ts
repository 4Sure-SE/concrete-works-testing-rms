import { ProjectService } from "@/server/services/project.service";

import { projectToDTO } from "@/lib/adapters/project";
import {
    deleteProject,
    getProjectById,
} from "@/server/data-access/project/project";

import { fakeProject, fakeProjectDTO } from "@/lib/stubs/project.stub";

vi.mock("@/server/data-access/project/project", () => ({
    getProjectById: vi.fn(),
    deleteProject: vi.fn(),
}));
vi.mock("@/lib/adapters/project", () => ({
    projectToDTO: vi.fn(),
}));

describe("ProjectService", () => {
    // add other unit tests here

    // Delete Project Unit Tests
    describe("deleteProject", () => {
        const projectIdToDelete = fakeProject.id;

        beforeEach(() => {
            vi.clearAllMocks();
        });

        it("successfully deletes an existing project and returns its DTO", async () => {
            vi.mocked(getProjectById).mockResolvedValue(fakeProject);
            vi.mocked(deleteProject).mockResolvedValue(fakeProject);
            vi.mocked(projectToDTO).mockReturnValue(fakeProjectDTO);

            const result =
                await ProjectService.deleteProject(projectIdToDelete);

            expect(deleteProject).toHaveBeenCalledWith(projectIdToDelete);
            expect(projectToDTO).toHaveBeenCalledWith(fakeProject);
            expect(result).toEqual(fakeProjectDTO);
        });

        it("throws a vague error when the db fails", async () => {
            const databaseError = new Error("DB Error");
            vi.mocked(getProjectById).mockResolvedValue(fakeProject);
            vi.mocked(deleteProject).mockRejectedValue(databaseError);

            await expect(
                ProjectService.deleteProject(projectIdToDelete),
            ).rejects.toThrow(
                `[Service] Failed to delete project ID: ${projectIdToDelete}`,
            );

            expect(projectToDTO).not.toHaveBeenCalled();
        });

        it("throws a not found error when project doesn't exist", async () => {
            vi.mocked(getProjectById).mockResolvedValue(null);

            await expect(
                ProjectService.deleteProject(projectIdToDelete),
            ).rejects.toThrow(
                `[Service] Project with ID ${projectIdToDelete} not found`,
            );

            expect(deleteProject).not.toHaveBeenCalled();
            expect(projectToDTO).not.toHaveBeenCalled();
        });

        it("throws an error when project DTO conversion fails", async () => {
            vi.mocked(getProjectById).mockResolvedValue(fakeProject);
            vi.mocked(deleteProject).mockResolvedValue(fakeProject);
            vi.mocked(projectToDTO).mockReturnValue(null);

            await expect(
                ProjectService.deleteProject(projectIdToDelete),
            ).rejects.toThrow(
                `[Service] Failed to convert deleted project ID: ${projectIdToDelete}`,
            );
        });
    });
});
