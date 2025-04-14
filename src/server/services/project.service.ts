import "server-only";

import { projectSummaryToDTO, projectToDTO } from "@/lib/adapters/project";
import type {
    CreateProjectDTO,
    ProjectDTO,
    ProjectSummaryDTO,
} from "@/lib/types/project";
import {
    createProject,
    getProjectById,
    getProjectSummaryList,
} from "@/server/data-access/project";

export const ProjectService = {
    async getProjectById(projectId: string): Promise<ProjectDTO | null> {
        console.log(`[Service] Getting project ID: ${projectId}`);

        const rawProject = await getProjectById(projectId);
        return projectToDTO(rawProject);
    },

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

    async createNewProject(input: CreateProjectDTO): Promise<ProjectDTO> {
        console.log(`[Service] Creating new project: ${input.contractId}`);

        const newProjectRecord = await createProject(input);

        const outputDto = projectToDTO(newProjectRecord);

        if (!outputDto) {
            throw new Error("Failed to convert newly created project.");
        }

        return outputDto;
    },
};
