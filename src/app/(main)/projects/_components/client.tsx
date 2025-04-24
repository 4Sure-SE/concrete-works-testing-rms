"use client";

import { useState } from "react";
import { PageHeader } from "@/app/(main)/projects/_components/header";
import { ProjectGrid } from "@/app/(main)/projects/_components/grid";

interface Project {
    contractId: string;
    id: string;
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
