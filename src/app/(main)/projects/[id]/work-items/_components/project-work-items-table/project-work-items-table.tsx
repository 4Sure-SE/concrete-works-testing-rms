"use client";

import { startTransition, useOptimistic, useState, useTransition } from "react";
import { toast } from "sonner";

import { useRefreshContext } from "@/app/(main)/_contexts/refresh-context";
import EmptyMessage from "@/components/custom/empty-message";
import {
    Table,
    TableBody,
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
import { updateProjectWorkItem } from "@/server/actions/projects/update-project-work-item";
import { ProjectWorkItemRow } from "./project-work-item-row";

interface ProjectWorkItemsTableProps {
    projectId: string;
    data: ProjectWorkItemDTO[];
    onDeleteAction: (id: string) => Promise<ProjectWorkItemActionState>;
}

type OptimisticAction = { type: "DELETE"; payload: { id: string } };

export function ProjectWorkItemsTable({
    projectId,
    data,
    onDeleteAction,
}: ProjectWorkItemsTableProps) {
    const { triggerRefresh } = useRefreshContext();

    // allow simultaneous edits
    const [editingItemIds, setEditingItemIds] = useState<string[]>([]);
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

    const deleteCallbacks: Callbacks<
        ProjectWorkItemDTO | null,
        ProjectWorkItemActionErrors
    > = {
        onSuccess: (data) => {
            startTransition(() => {
                toast.success(
                    `Work ${data?.itemNo ?? ""} deleted successfully`,
                );
                startTransition(() => {
                    triggerRefresh(`/projects/${projectId}`);
                });
            });
        },
        onError: (error) => {
            const errorMsg = error.general ?? "Failed to delete work item.";
            toast.error(errorMsg);
        },
    };

    const handleDelete = (id: string) => {
        if (editingItemIds.includes(id)) {
            handleCancel(id);
        }
        setDeletingId(id);
        startDeleteTransition(() => {
            setOptimisticItems({ type: "DELETE", payload: { id } });

            startTransition(async () => {
                const deleteAction = withCallbacks(
                    onDeleteAction.bind(null, id),
                    deleteCallbacks,
                );
                await deleteAction();
                setDeletingId(null);
            });
        });
    };

    const handleEdit = (id: string) => {
        setEditingItemIds((prev) => [...prev, id]);
    };

    const handleCancel = (id: string) => {
        setEditingItemIds((prev) => prev.filter((itemId) => itemId !== id));
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
                    const isEditingThisRow = editingItemIds.includes(item.id);
                    const isDeletingThisRow =
                        isDeletePending && deletingId === item.id;

                    return (
                        <ProjectWorkItemRow
                            projectId={projectId}
                            key={item.id}
                            item={item}
                            isEditing={isEditingThisRow}
                            isDeleting={isDeletingThisRow}
                            onEdit={handleEdit}
                            onCancel={() => handleCancel(item.id)}
                            onDelete={handleDelete}
                            updateAction={updateProjectWorkItem}
                        />
                    );
                })}
            </TableBody>
        </Table>
    );
}
