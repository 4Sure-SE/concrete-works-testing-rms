import { Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

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
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <h1 className="text-2xl font-bold">PROJECTS</h1>
                <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                    {/* Date Range */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 rounded-md p-2">
                            <span className="text-sm font-medium text-muted-foreground">
                                FROM
                            </span>
                            <Input
                                type="date"
                                className="h-9 w-[140px] text-muted-foreground uppercase"
                            />
                            <span className="text-sm font-medium text-muted-foreground">
                                TO
                            </span>
                            <Input
                                type="date"
                                className="h-9 w-[140px] text-muted-foreground uppercase"
                            />
                        </div>
                    </div>

                    {/* Search */}
                    <div className="flex items-center gap-3">
                        <div className="relative flex-grow">
                            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search projects..."
                                className="pl-10"
                            />
                        </div>
                        {/* New Project */}
                        <Button>
                            <Plus className="h-4 w-4" />
                            <span>New Project</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        className="transition-shadow hover:shadow-md"
                    >
                        <CardHeader className="pb-2">
                            <h3 className="text-lg font-bold">{project.id}</h3>
                            <p className="text-muted-foreground">
                                {project.title}
                            </p>
                        </CardHeader>
                        <CardContent>
                            {/* Stats with Progress Bar */}
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span>Progress</span>
                                    <span className="text-sm">
                                        {Math.round(
                                            (project.stats.completed /
                                                project.stats.total) *
                                                100,
                                        )}
                                        %
                                    </span>
                                </div>
                                {/* Custom progress bar */}
                                <div className="h-2 w-full rounded-full bg-muted">
                                    <div
                                        className="h-2 rounded-full bg-primary"
                                        style={{
                                            width: `${Math.round((project.stats.completed / project.stats.total) * 100)}%`,
                                        }}
                                    ></div>
                                </div>

                                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                                    <div className="rounded p-2">
                                        <div className="font-bold">
                                            {project.stats.total}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            Total
                                        </div>
                                    </div>
                                    <div className="rounded p-2">
                                        <div className="font-bold text-amber-500">
                                            {project.stats.ongoing}
                                        </div>
                                        <div className="text-sm">Ongoing</div>
                                    </div>
                                    <div className="rounded p-2">
                                        <div className="font-bold text-green-500">
                                            {project.stats.completed}
                                        </div>
                                        <div className="text-sm">Completed</div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
