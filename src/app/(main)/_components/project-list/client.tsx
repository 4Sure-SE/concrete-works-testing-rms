"use client";

import { useState } from "react";
import { PageHeader } from "./header";
import { ProjectGrid } from "./grid";

interface Project {
    id: string;
    contractId: string;
    title: string;
    dateStarted: string;
    stats: {
        total: number;
        ongoing: number;
        completed: number;
    };
}

interface ProjectClientProps {
    projects: Project[];
}

export function ProjectClient({ projects }: ProjectClientProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const filteredProjects = projects.filter((project) => {
        const matchesSearch =
            project.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.contractId
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            project.title.toLowerCase().includes(searchTerm.toLowerCase());

        let matchesDate = true;
        if (startDate) {
            matchesDate = matchesDate && project.dateStarted >= startDate;
        }
        if (endDate) {
            matchesDate = matchesDate && project.dateStarted <= endDate;
        }

        return matchesSearch && matchesDate;
    });

    return (
        <>
            <PageHeader
                title="Projects"
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
            />
            {filteredProjects.length > 0 ? (
                <ProjectGrid projects={filteredProjects} />
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
