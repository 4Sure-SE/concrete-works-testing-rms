import { Loader, Save, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface UpdateProjectWorkItemActionsProps {
    onSave: () => void;
    isSubmittingEdit: boolean;
    isDisabled: boolean;
    onCancel: () => void;
}

export function UpdateProjectWorkItemActions({
    onSave,
    isSubmittingEdit,
    isDisabled,
    onCancel,
}: UpdateProjectWorkItemActionsProps) {
    return (
        <>
            {/* save button */}
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            onClick={onSave}
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 cursor-pointer text-green-600 hover:bg-green-100 hover:text-green-700"
                            disabled={isDisabled || isSubmittingEdit} // Disable when submitting
                            aria-label="Save quantity"
                        >
                            {isSubmittingEdit ? (
                                <Loader className="h-4 w-4 animate-spin" />
                            ) : (
                                <Save className="h-4 w-4" />
                            )}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Save</p>
                    </TooltipContent>
                </Tooltip>
                {/* cancel */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 cursor-pointer text-muted-foreground hover:bg-gray-100 hover:text-gray-700"
                            onClick={onCancel}
                            disabled={isSubmittingEdit} // Also disable cancel during submission
                            aria-label="Cancel edit"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Cancel</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    );
}
