import type {
    CreateProjectShareLinkInput,
    ProjectShareLink,
} from "@/lib/types/project-share-link/project-share-link.types";
import { db } from "@/server/db";
import { v4 as uuidv4 } from "uuid";

export async function createProjectShareLink(
    input: CreateProjectShareLinkInput,
): Promise<{ token: string }> {
    const { projectId } = input;

    const existingProject = await db.project.findUnique({
        where: { id: projectId },
        select: { token: true },
    });

    if (!existingProject) {
        throw new Error(`Project with ID ${projectId} not found`);
    }

    if (existingProject.token) {
        return { token: existingProject.token };
    }

    const token = uuidv4();

    await db.project.update({
        where: { id: projectId },
        data: {
            token,
            updatedAt: new Date(),
        },
    });

    return { token };
}

export async function getProjectShareLinkByToken(
    token: string,
): Promise<ProjectShareLink | null> {
    if (!token) return null;

    const project = await db.project.findUnique({
        where: { token },
    });

    if (!project?.token) return null;

    return {
        id: project.id,
        projectId: project.id,
        token: project.token,
        project,
    };
}
