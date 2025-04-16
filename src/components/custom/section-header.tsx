import { cn } from "@/lib/utils";

type SectionHeaderProps = {
    title: string;
    description: string;
    className?: string;
};

function SectionHeader({
    title,
    description,
    className = "",
}: SectionHeaderProps) {
    return (
        <div className={cn("mb-6", className)}>
            <h1 className="text-lg font-bold md:text-2xl">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}

export default SectionHeader;
