import { ProjectsClient } from "@/app/(main)/_components/project-list/client";

// Sample data - in a real app, this would come from a database
const projects = [
    {
        id: "CT-2024-001",
        contractId: "AC-003",
        title: "Highway Bridge Renovation",
        dateStarted: "2024-01-15",
        stats: { total: 48, ongoing: 12, completed: 36 },
    },
    {
        id: "CT-2024-003",
        contractId: "EW-004",
        title: "Residential Tower Construction",
        dateStarted: "2024-02-10",
        stats: { total: 64, ongoing: 38, completed: 26 },
    },
    {
        id: "CT-2024-002",
        contractId: "CC-001",
        title: "Commercial Complex Foundation",
        dateStarted: "2024-01-30",
        stats: { total: 36, ongoing: 20, completed: 16 },
    },
    {
        id: "CT-2024-004",
        contractId: "AA-002",
        title: "Municipal Infrastructure Project",
        dateStarted: "2024-03-01",
        stats: { total: 52, ongoing: 8, completed: 44 },
    },
];

export default async function ProjectListPage() {
    return (
        <div className="container mx-auto p-4">
            <ProjectsClient projects={projects} />
        </div>
    );
}
