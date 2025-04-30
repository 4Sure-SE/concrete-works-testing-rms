"use client";

import { useOptimistic, useState, useTransition } from "react";
import { toast } from "sonner";

import EmptyMessage from "@/components/custom/empty-message";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type {
    ProjectWorkItemActionState,
    ProjectWorkItemDTO,
} from "@/lib/types/project-work-item/project-work-item.types";
import { updateProjectWorkItem } from "@/server/actions/projects/update-project-work-item";
import { ProjectWorkItemRow } from "./project-work-item-row";

interface ProjectWorkItemsTableProps {
    data: ProjectWorkItemDTO[];
    onDeleteAction: (id: string) => Promise<ProjectWorkItemActionState>;
}

type OptimisticAction = { type: "DELETE"; payload: { id: string } };

export function ProjectWorkItemsTable({
    data,
    onDeleteAction,
}: ProjectWorkItemsTableProps) {
    const [editingItemId, setEditingItemId] = useState<string | null>(null);

    const [optimisticItems, setOptimisticItems] = useOptimistic(
        data,
        (currentState, action: OptimisticAction): ProjectWorkItemDTO[] => {
            switch (action.type) {
                case "DELETE":
                    return currentState.filter(
                        (pwi) => pwi.id !== action.payload.id,
                    );

                default:
                    return currentState;
            }
        },
    );

    const [isDeletePending, startDeleteTransition] = useTransition();

    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleDelete = (id: string) => {
        if (editingItemId === id) {
            setEditingItemId(null);
        }
        setDeletingId(id);
        startDeleteTransition(async () => {
            setOptimisticItems({ type: "DELETE", payload: { id } });
            const result = await onDeleteAction(id);
            setDeletingId(null);

            if (!result.success) {
                const errorMsg =
                    result.error?.general?.[0] ?? "Failed to delete work item.";
                toast.error(errorMsg);
            } else {
                toast.success(
                    `Work item ${result.data?.itemNo ?? ""} deleted.`,
                );
            }
        });
    };

    const handleEdit = (id: string) => {
        // prevent starting a new edit if a delete is pending
        if (isDeletePending) return;
        setEditingItemId(id);
    };

    const handleCancel = () => {
        setEditingItemId(null);
    };

    if (!optimisticItems || optimisticItems.length === 0) {
        return (
            <EmptyMessage
                title="No work items"
                description="There are no work items added to this project yet."
            />
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
                    <TableHead className="w-[120px] text-right">
                        Actions
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {optimisticItems.map((item) => {
                    const isEditingThisRow = editingItemId === item.id;
                    const isDeletingThisRow =
                        isDeletePending && deletingId === item.id;

                    return (
                        <ProjectWorkItemRow
                            key={item.id}
                            item={item}
                            isEditing={isEditingThisRow}
                            isDeleting={isDeletingThisRow}
                            isOverallPending={isDeletePending}
                            onEdit={handleEdit}
                            onCancel={handleCancel}
                            onDelete={handleDelete}
                            updateAction={updateProjectWorkItem}
                        />
                    );
                })}
            </TableBody>
        </Table>
    );
}
