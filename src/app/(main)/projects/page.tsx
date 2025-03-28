import { PageHeader } from "@/components/project-list/header";
import { ProjectGrid } from "@/components/project-list/grid";

export default async function ProjectListPage() {
    const projects = [
        {
            id: "CT-2024-001",
            title: "Highway Bridge Renovation",
            stats: { total: 48, ongoing: 12, completed: 36 },
        },
        {
            id: "CT-2024-003",
            title: "Residential Tower Construction",
            stats: { total: 64, ongoing: 38, completed: 26 },
        },
        {
            id: "CT-2024-002",
            title: "Commercial Complex Foundation",
            stats: { total: 36, ongoing: 20, completed: 16 },
        },
        {
            id: "CT-2024-004",
            title: "Municipal Infrastructure Project",
            stats: { total: 52, ongoing: 8, completed: 44 },
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <PageHeader title="PROJECTS" />
            <ProjectGrid projects={projects} />
        </div>
    );
}
