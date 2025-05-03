"use client";

import { useRef } from "react";
import { toast } from "sonner";

import { TableCell, TableRow } from "@/components/ui/table";
import { useFormAction } from "@/hooks/use-form-action";
import type { Callbacks } from "@/lib/types/actions.types";
import type {
    ProjectWorkItemActionErrors,
    ProjectWorkItemActionState,
    ProjectWorkItemDTO,
} from "@/lib/types/project-work-item/project-work-item.types";
import { withCallbacks } from "@/lib/utils";
import {
    UpdateProjectWorkItemActions,
    UpdateProjectWorkItemForm,
    updateProjectWorkItemSchema,
} from "../update-project-work-item-form/";
import ProjectWorkItemsTableActions from "./project-work-items-table-actions";

interface ProjectWorkItemRowProps {
    item: ProjectWorkItemDTO;
    isEditing: boolean;
    isDeleting: boolean;
    isOverallPending: boolean;
    onEdit: (id: string) => void;
    onCancel: () => void;
    onDelete: (id: string) => void;
    updateAction: (
        id: string,
        prevState: ProjectWorkItemActionState,
        formData: FormData,
    ) => Promise<ProjectWorkItemActionState>;
}

export function ProjectWorkItemRow({
    item,
    isEditing,
    isDeleting,
    isOverallPending,
    onEdit,
    onCancel,
    onDelete,
    updateAction,
}: ProjectWorkItemRowProps) {
    const callbacks: Callbacks<
        ProjectWorkItemDTO | null,
        ProjectWorkItemActionErrors
    > = {
        onSuccess: (_data) => {
            toast.success("Quantity updated successfully.");
            onCancel();
        },
        onError: (error) => {
            toast.error(
                error.quantity?.[0] ??
                    error.general?.[0] ??
                    "Failed to update quantity.",
            );
        },
    };

    const {
        form,
        actionState,
        isPending: isSubmittingEdit,
        startAction,
        submitAction,
    } = useFormAction({
        action: withCallbacks(updateAction.bind(null, item.id), callbacks),
        schema: updateProjectWorkItemSchema,
        defaultValues: { quantity: item.quantity },
    });

    const formRef = useRef<HTMLFormElement>(null);

    const handleFormSubmit = form.handleSubmit(() => {
        startAction(() => {
            if (formRef.current) {
                const formData = new FormData(formRef.current);
                submitAction(formData);
            } else {
                console.error("Form reference not found during submission.");
                toast.error(
                    "An unexpected error occurred submitting the form.",
                );
            }
        });
    });

    const isDisabled = isOverallPending || isSubmittingEdit || isDeleting;

    return (
        <TableRow
            key={item.id}
            className={isEditing ? "bg-muted/50" : ""}
        >
            <TableCell className="font-medium">{item.itemNo}</TableCell>

            <TableCell>{item.description ?? "No description"}</TableCell>

            <TableCell>
                {isEditing ? (
                    <UpdateProjectWorkItemForm
                        form={form}
                        formRef={formRef}
                        actionState={actionState}
                        fieldDetails={{
                            name: "quantity",
                            default: item.quantity,
                            type: "number",
                        }}
                        handleFormSubmit={handleFormSubmit}
                        submitAction={submitAction}
                        isDisabled={isDisabled}
                    />
                ) : (
                    item.quantity
                )}
            </TableCell>

            <TableCell>{item.unitAbbreviation}</TableCell>

            <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                    {isEditing ? (
                        <UpdateProjectWorkItemActions
                            isSubmittingEdit={isSubmittingEdit}
                            onCancel={onCancel}
                            onSave={handleFormSubmit}
                            isDisabled={isDisabled}
                        />
                    ) : (
                        <ProjectWorkItemsTableActions
                            item={item}
                            onDelete={onDelete}
                            onEdit={onEdit}
                            isDeleting={isDeleting}
                            isDisabled={isDisabled}
                        />
                    )}
                </div>
            </TableCell>
        </TableRow>
    );
}
