"use client";

import { startTransition, useEffect, useRef } from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import { useFormAction } from "@/hooks/use-form-action";
import type { Callbacks } from "@/lib/types/actions.types";
import type {
    ProjectWorkItemActionErrors,
    ProjectWorkItemActionState,
    ProjectWorkItemDTO,
} from "@/lib/types/project-work-item/project-work-item.types";
import { withCallbacks } from "@/lib/utils";
import { toast } from "sonner";
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
            startTransition(() => {
                form.reset();
                onCancel();
            });
        },
        onError: (error) => {
            if (error.general)
                form.setError("root", { message: error.general[0] });
            if (error.quantity)
                form.setError("quantity", { message: error.quantity[0] });
        },
    };

    const {
        form,
        isPending: isSubmittingEdit,
        submitAction: submitUpdateAction,
    } = useFormAction({
        action: withCallbacks(updateAction.bind(null, item.id), callbacks),
        schema: updateProjectWorkItemSchema,
        defaultValues: { quantity: item.quantity },
    });

    // when the quantity changes reset the form with the new quantity
    useEffect(() => {
        if (isEditing) {
            form.reset({ quantity: item.quantity });
        }
    }, [item.quantity, isEditing, form]);

    const formRef = useRef<HTMLFormElement>(null);

    const handleFormSubmit = form.handleSubmit(() => {
        startTransition(() => {
            if (formRef.current) {
                const formData = new FormData(formRef.current);
                submitUpdateAction(formData);
            }
        });
    });
    const isDisabled = isSubmittingEdit || isDeleting;

    return (
        <TableRow
            key={item.id}
            className={isEditing ? "bg-muted/50" : ""}
        >
            <TableCell className="font-medium">{item.itemNo}</TableCell>

            <TableCell>{item.description ?? "No description"}</TableCell>

            <TableCell>
                {isEditing ? (
                    // form to update the quantity of the work item
                    <UpdateProjectWorkItemForm
                        form={form}
                        formRef={formRef}
                        fieldDetails={{
                            name: "quantity",
                            default: item.quantity,
                            type: "number",
                        }}
                        handleFormSubmit={handleFormSubmit}
                        submitAction={submitUpdateAction}
                        isDisabled={isDisabled}
                    />
                ) : (
                    // how many of this work item is in the project
                    item.quantity
                )}
            </TableCell>

            <TableCell>{item.unitAbbreviation}</TableCell>

            <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                    {isEditing ? (
                        // save edit and cancel edit buttons
                        <UpdateProjectWorkItemActions
                            isSubmittingEdit={isSubmittingEdit}
                            onCancel={onCancel}
                            onSave={handleFormSubmit}
                            isDisabled={isDisabled}
                        />
                    ) : (
                        // edit and delete buttons
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
