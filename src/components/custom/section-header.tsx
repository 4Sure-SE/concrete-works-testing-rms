import { cn } from "@/lib/utils";

type SectionHeaderProps = {
    title: string;
    description: string;
    className?: string;
    leftControl?: React.ReactNode;
};

function SectionHeader({
    title,
    description,
    className = "",
    leftControl,
}: SectionHeaderProps) {
    return (
        <div className={cn("mb-6 flex flex-row", className)}>
            {leftControl && <div className="mr-4">{leftControl}</div>}
            <div>
                <h1 className="text-lg font-bold md:text-2xl">{title}</h1>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}

export default SectionHeader;
