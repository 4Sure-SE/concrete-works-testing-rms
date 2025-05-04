"use client";

import { useState } from "react";

import { type ProjectSummaryDTO } from "@/lib/types/project";

import { ProjectItem } from "./project-item";
import { ProjectListHeader } from "./project-list-header";

interface ProjectListProps {
    projects: ProjectSummaryDTO[];
}

export function ProjectList({ projects }: ProjectListProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const filteredProjects = projects.filter((project) => {
        const matchesSearch =
            project.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.contractId
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            project.contractName
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

        let matchesDate = true;
        if (startDate) {
            matchesDate =
                matchesDate &&
                new Date(project.dateStarted) >= new Date(startDate);
        }
        if (endDate) {
            matchesDate =
                matchesDate &&
                new Date(project.dateStarted) <= new Date(endDate);
        }

        return matchesSearch && matchesDate;
    });

    return (
        <>
            <ProjectListHeader
                title="Projects"
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
            />
            {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectItem
                            contractId={project.contractId}
                            key={project.id}
                            id={project.id}
                            contractName={project.contractName}
                            stats={project.stats}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-24">
                    <p className="text-lg text-muted-foreground">
                        No projects found.
                    </p>
                </div>
            )}
        </>
    );
}
