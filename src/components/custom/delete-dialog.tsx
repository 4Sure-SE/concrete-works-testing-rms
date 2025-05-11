"use client";

import { Trash2 } from "lucide-react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface DeleteDialogProps {
    entityId: string;
    entityName: string;
    entityAlias?: string;
    onDeleteAction: (id: string) => void;
    disabled?: boolean;
}

export function DeleteDialog({
    onDeleteAction,
    entityId,
    entityName,
    entityAlias,
    disabled = false,
}: DeleteDialogProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger
                asChild
                className=""
            >
                <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 cursor-pointer text-destructive hover:bg-destructive/10"
                    aria-label={`Delete ${entityName} ${entityAlias ?? entityId}`}
                    disabled={disabled}
                >
                    <Trash2 className="size-4" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the {entityName}
                        {` `}
                        <span className="font-mono">
                            {entityAlias ?? entityId}
                        </span>
                        {` `} and all associated data.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={() => onDeleteAction(entityId)}
                        className="cursor-pointer bg-destructive text-white hover:bg-destructive/90"
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
