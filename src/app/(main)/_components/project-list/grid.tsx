import { ProjectCard } from "./card";

interface Project {
    contractId: string;
    id: string;
    title: string;
    stats: {
        total: number;
        ongoing: number;
        completed: number;
    };
}

interface ProjectGridProps {
    projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard
                    contractId={project.contractId}
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    stats={project.stats}
                />
            ))}
        </div>
    );
}
