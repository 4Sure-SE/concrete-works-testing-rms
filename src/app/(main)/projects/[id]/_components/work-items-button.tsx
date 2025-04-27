import { Button } from "@/components/ui/button";
import { ListChecks } from "lucide-react";
import Link from "next/link";

interface WorkItemsButtonProps {
    projectId: string;
}

export function WorkItemsButton({ projectId }: WorkItemsButtonProps) {
    return (
        <Button
            asChild
            variant="default"
            size="default"
            className="flex w-[137px] items-center gap-1 bg-blue-700 px-2 py-1 text-xs text-white hover:bg-blue-800 sm:w-[169px] sm:gap-2 sm:text-sm md:text-sm"
        >
            <Link href={`/projects/${projectId}/work-items`}>
                <ListChecks className="size-5" />
                <span className="xs:inline">Work Items</span>
            </Link>
        </Button>
    );
}
