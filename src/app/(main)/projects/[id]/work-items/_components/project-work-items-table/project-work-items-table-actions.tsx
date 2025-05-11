import { Loader, Pencil } from "lucide-react";

import { DeleteDialog } from "@/components/custom/delete-dialog";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ProjectWorkItemDTO } from "@/lib/types/project-work-item/project-work-item.types";

interface ProjectWorkItemsTableActionsProps {
    item: ProjectWorkItemDTO;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    isDisabled?: boolean;
    isDeleting?: boolean;
}

function ProjectWorkItemsTableActions({
    item,
    onEdit,
    onDelete,
    isDisabled = false,
    isDeleting = false,
}: ProjectWorkItemsTableActionsProps) {
    return (
        <TooltipProvider delayDuration={100}>
            {/* edit button */}
            <Tooltip>
                <TooltipContent>
                    <p>Edit</p>
                </TooltipContent>
                <TooltipTrigger asChild>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 cursor-pointer text-primary hover:bg-primary/10 hover:text-primary"
                        onClick={() => onEdit(item.id)}
                        disabled={isDisabled}
                        aria-label="Edit quantity"
                    >
                        <Pencil className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
            </Tooltip>

            {/* delete button */}
            <Tooltip>
                <TooltipContent>
                    <p>Delete</p>
                </TooltipContent>
                <TooltipTrigger asChild>
                    {isDeleting ? (
                        <Loader className="size-4 animate-spin" />
                    ) : (
                        <DeleteDialog
                            entityId={item.id}
                            entityAlias={item.itemNo}
                            entityName="work item"
                            onDeleteAction={() => onDelete(item.id)}
                            disabled={isDisabled}
                        />
                    )}
                </TooltipTrigger>
            </Tooltip>
        </TooltipProvider>
    );
}

export default ProjectWorkItemsTableActions;
