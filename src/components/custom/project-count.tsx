interface ProjectCountProps {
    currentCount: number;
    totalCount: number;
}

export function ProjectCount({ currentCount, totalCount }: ProjectCountProps) {
    return (
        <div className="text-sm text-muted-foreground">
            {currentCount} of {totalCount} projects
        </div>
    );
}
