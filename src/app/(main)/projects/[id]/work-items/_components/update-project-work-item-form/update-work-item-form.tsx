import { Form as UIForm } from "@/components/ui/form";
import { type FieldConfig } from "@/lib/types/form.types";
import {
    type ProjectWorkItemActionState,
    type UpdateProjectWorkItemDTO,
} from "@/lib/types/project-work-item/project-work-item.types";
import Form from "next/form";
import { type UseFormReturn } from "react-hook-form";
import { UpdateProjectWorkItemField } from "./update-project-work-item-field";

interface UpdateProjectWorkItemFormProps {
    form: UseFormReturn<UpdateProjectWorkItemDTO>;
    fieldDetails: FieldConfig<UpdateProjectWorkItemDTO>;
    formRef: React.RefObject<HTMLFormElement | null>;
    isDisabled?: boolean;
    actionState: ProjectWorkItemActionState;
    handleFormSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
    submitAction: (payload: FormData) => void;
}

export function UpdateProjectWorkItemForm({
    form,
    fieldDetails,
    formRef,
    isDisabled = false,
    actionState,
    handleFormSubmit,
    submitAction,
}: UpdateProjectWorkItemFormProps) {
    return (
        <UIForm {...form}>
            <Form
                ref={formRef}
                action={submitAction}
                onSubmit={handleFormSubmit}
                noValidate
                className="flex items-start space-x-2"
            >
                <UpdateProjectWorkItemField
                    control={form.control}
                    fieldDetails={fieldDetails}
                    isDisabled={isDisabled}
                />
                <button
                    type="submit"
                    style={{ display: "none" }}
                />
            </Form>
            {!actionState.success && actionState.error && (
                <p className="mt-1 text-xs text-destructive">
                    {actionState.error.general ?? ""}
                </p>
            )}
        </UIForm>
    );
}
