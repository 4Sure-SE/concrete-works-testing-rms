"use client";

import { FileText, Loader } from "lucide-react";

import { DeleteDialog } from "@/components/custom/delete-dialog";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Callbacks } from "@/lib/types/actions.types";
import type {
    ProjectWorkItemActionErrors,
    ProjectWorkItemActionState,
    ProjectWorkItemDTO,
} from "@/lib/types/project-work-item/project-work-item.types";
import { withCallbacks } from "@/lib/utils";
import { useOptimistic, useState, useTransition } from "react";

interface ProjectWorkItemsTableProps {
    data: ProjectWorkItemDTO[];
    onDeleteAction: (id: string) => Promise<ProjectWorkItemActionState>;
}

export function ProjectWorkItemsTable({
    data,
    onDeleteAction,
}: ProjectWorkItemsTableProps) {
    const callbacks: Callbacks<
        ProjectWorkItemDTO | null,
        ProjectWorkItemActionErrors
    > = {
        onSuccess: (data) => {
            console.table(data);
        },

        onError: (error) => {
            console.error(error);
        },
    };

    const [optimisticItems, setOptimisticItems] = useOptimistic(
        data,
        (currState, deletingId: string) => {
            return currState.filter((pwi) => pwi.id != deletingId);
        },
    );

    const [isPending, startTransition] = useTransition();
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleDelete = async (id: string) => {
        setDeletingId(id);
        startTransition(async () => {
            setOptimisticItems(id);
            const action = withCallbacks(onDeleteAction, callbacks);
            await action(id);
            setDeletingId(null);
        });
    };

    if (!data || data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                <FileText className="mb-2 h-10 w-10 text-muted-foreground" />
                <h3 className="text-lg font-medium">No work items</h3>
                <p className="text-sm text-muted-foreground">
                    There are no work items added to this project yet.
                </p>
            </div>
        );
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Item No.</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="w-[150px]">Quantity</TableHead>
                    <TableHead className="w-[100px]">Unit</TableHead>
                    <TableHead className="w-[50px] text-right" />
                </TableRow>
            </TableHeader>
            <TableBody>
                {optimisticItems.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell className="font-medium">
                            {item.itemNo}
                        </TableCell>
                        <TableCell>
                            {item.description ?? "No description"}
                        </TableCell>
                        <TableCell>{item.quantity.toLocaleString()}</TableCell>
                        <TableCell>{item.unitAbbreviation}</TableCell>
                        <TableCell className="text-center">
                            {deletingId === item.id ? (
                                <Button
                                    disabled
                                    variant="ghost"
                                    size="icon"
                                    className="size-8 cursor-pointer text-destructive"
                                >
                                    <Loader className="size-4 animate-spin" />
                                </Button>
                            ) : (
                                <DeleteDialog
                                    entityId={item.id}
                                    entityAlias={item.itemNo}
                                    entityName="work item"
                                    onDeleteAction={handleDelete}
                                    disabled={isPending}
                                />
                            )}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
