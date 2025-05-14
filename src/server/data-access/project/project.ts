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

import { v4 as uuidv4 } from "uuid";

// get project by id
export async function getProjectById(id: string): Promise<Project | null> {
    if (!id) return null;
    const project = await db.project.findUnique({ where: { id } });
    return project;
}

export async function getProjectsCount(
    filters: ProjectListFilters,
): Promise<number> {
    const count = await db.project.count({
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
    return count;
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
        skip: (filters.currentPage - 1) * filters.itemsPerPage,
        take: filters.itemsPerPage,
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

export async function getProjectDetailsByToken(
    token: string,
): Promise<ProjectDetailsPayload | null> {
    if (!token) return null;

    const project = await db.project.findUnique({
        where: { token },
        include: projectDetails,
    });

    return project;
}

// generate shareable link for project
export async function generateProjectShareLink(
    id: string,
): Promise<{ token: string }> {
    const token = uuidv4();

    await db.project.update({
        where: { id },
        data: {
            token,
            updatedAt: new Date(),
        },
    });

    return { token };
}

export async function clearProjects(): Promise<void> {
    await db.project.deleteMany();
}
