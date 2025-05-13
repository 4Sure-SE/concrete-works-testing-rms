import { Edit } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface EditButtonProps {
    projectId: string;
}

export function EditButton({ projectId }: EditButtonProps) {
    return (
        <Button
            asChild
            variant="default"
            size="default"
            className="flex w-[137px] items-center gap-1 bg-blue-700 px-2 py-1 text-xs text-white hover:bg-blue-800 sm:w-[169px] sm:gap-2 sm:text-sm md:text-sm"
        >
            <Link href={`/projects/${projectId}/edit`}>
                <>
                    <Edit className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    <span className="xs:inline">Edit</span>
                </>
            </Link>
        </Button>
    );
}
