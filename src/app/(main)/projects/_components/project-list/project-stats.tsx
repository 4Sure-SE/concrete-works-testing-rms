interface ProjectStatsProps {
    total: number;
    balance: number;
    onFile: number;
}

export function ProjectStats({ total, balance, onFile }: ProjectStatsProps) {
    return (
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="rounded p-2">
                <div className="font-bold">{total}</div>
                <div className="text-sm text-muted-foreground">Total</div>
            </div>
            <div className="rounded p-2">
                <div className="font-bold text-amber-500">{balance}</div>
                <div className="text-sm">Balance</div>
            </div>
            <div className="rounded p-2">
                <div className="font-bold text-green-500">{onFile}</div>
                <div className="text-sm">On File</div>
            </div>
        </div>
    );
}
