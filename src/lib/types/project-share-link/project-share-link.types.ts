import type { Project } from "@prisma/client";

export interface ProjectShareLink {
    id: string;
    projectId: string;
    token: string;
    project?: Project;
}

export interface CreateProjectShareLinkInput {
    projectId: string;
}
