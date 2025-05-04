import "server-only";

import type { ProjectListFilters } from "@/lib/types/project/project.types";
import { db } from "@/server/db";
import type { Prisma, Project } from "@prisma/client";
import type { ProjectDetailsPayload } from "./project.payloads";
import {
    projectDetails,
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
export async function getProjectSummaryList(
    filters: ProjectListFilters,
): Promise<ProjectSummaryPayload[]> {
    const projects = await db.project.findMany({
        orderBy: { updatedAt: "desc" },
        include: projectSummaryInclude,
        // apply filters
        where: {
            // search by contractId or contractName
            OR: [
                {
                    contractId: {
                        contains: filters.query ?? "",
                        mode: "insensitive",
                    },
                },
                {
                    contractName: {
                        contains: filters.query ?? "",
                        mode: "insensitive",
                    },
                },
            ],
            // filter by date range
            AND: {
                dateStarted: {
                    gte: filters.dateFrom
                        ? new Date(filters.dateFrom)
                        : undefined,
                    lte: filters.dateTo ? new Date(filters.dateTo) : undefined,
                },
            },
        },
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
        data: {
            ...data,
            updatedAt: new Date(),
        },
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

export async function getProjectDetailsById(
    id: string,
): Promise<ProjectDetailsPayload | null> {
    if (!id) return null;

    const project = await db.project.findUnique({
        where: { id },
        include: projectDetails,
    });

    return project;
}
