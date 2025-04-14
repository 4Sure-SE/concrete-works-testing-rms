import "server-only";

import { db } from "@/server/db";
import type { Prisma, Project } from "@prisma/client";
import {
    projectSummaryInclude,
    type ProjectSummaryPayload,
} from "./project.payloads";

// get project by id
export async function getProjectById(id: string): Promise<Project | null> {
    if (!id) return null;
    const project = await db.project.findUnique({ where: { id } });
    return project;
}

// get project list
export async function getProjectSummaryList(): Promise<
    ProjectSummaryPayload[]
> {
    const projects = await db.project.findMany({
        orderBy: { createdAt: "desc" },
        include: projectSummaryInclude,
    });
    return projects;
}

// create new project
export async function createProject(
    data: Prisma.ProjectCreateInput,
): Promise<Project> {
    const newProject = await db.project.create({
        data,
    });
    return newProject;
}

// update project
export async function updateProject(
    id: string,
    data: Prisma.ProjectUpdateInput,
): Promise<Project> {
    const updatedProject = await db.project.update({
        where: { id },
        data,
    });
    return updatedProject;
}

// delete project
export async function deleteProject(id: string): Promise<Project> {
    const deletedProject = await db.project.delete({
        where: { id },
    });
    return deletedProject;
}
