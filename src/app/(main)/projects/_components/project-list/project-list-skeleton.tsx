// filepath: c:\Users\josee\Code-Stuff\Projects\concrete-works-testing-rms\src\app\(main)\projects\_components\project-list\project-list-skeleton.tsx
import { ProjectItemSkeleton } from "./project-item-skeleton";
import { ProjectListHeader } from "./project-list-header";

export function ProjectListSkeleton() {
    return (
        <div className="container mx-auto p-4">
            <ProjectListHeader title="Projects" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {Array.from({ length: 6 }).map((_, index) => (
                    <ProjectItemSkeleton key={index} />
                ))}
            </div>
        </div>
    );
}
