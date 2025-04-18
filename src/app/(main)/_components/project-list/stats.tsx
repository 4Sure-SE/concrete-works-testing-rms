interface ProjectStatsProps {
    total: number;
    ongoing: number;
    completed: number;
}

export function ProjectStats({ total, ongoing, completed }: ProjectStatsProps) {
    return (
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="rounded p-2">
                <div className="font-bold">{total}</div>
                <div className="text-sm text-muted-foreground">Total</div>
            </div>
            <div className="rounded p-2">
                <div className="font-bold text-amber-500">{ongoing}</div>
                <div className="text-sm">Ongoing</div>
            </div>
            <div className="rounded p-2">
                <div className="font-bold text-green-500">{completed}</div>
                <div className="text-sm">Completed</div>
            </div>
        </div>
    );
}
