"use client";

import Form from "next/form";
import { useRouter } from "next/navigation";

import ButtonWithLoader from "@/components/custom/button-with-loader";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Form as UIForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormAction } from "@/hooks/use-form-action";
import type { Callbacks } from "@/lib/types/actions.types";
import type {
    ProjectWorkItemActionErrors,
    ProjectWorkItemActionState,
    WorkItemDefinitionDTO,
} from "@/lib/types/work-item/";
import { withCallbacks } from "@/lib/utils";

import { createProjectWorkItemSchema } from "./add-work-item-form.schema";
import WorkItemSelect from "./work-item-select";

interface AddWorkItemFormProps {
    action: (
        projectId: string,
        previousState: ProjectWorkItemActionState,
        formData: FormData,
    ) => Promise<ProjectWorkItemActionState>;
    projectId: string;
    workItemDefinitions: WorkItemDefinitionDTO[];
}

function AddWorkItemForm({
    action,
    projectId,
    workItemDefinitions,
}: AddWorkItemFormProps) {
    const defaultValues = { workItemId: "", quantity: 0 };

    const router = useRouter();

    // server action callbacks on success or error
    const callbacks: Callbacks<
        WorkItemDefinitionDTO | null,
        ProjectWorkItemActionErrors
    > = {
        // on server action success
        onSuccess: (data) => {
            router.push(`/projects/${projectId}`);
            console.log("success", data);
        },
        // on server action error
        onError: (error) => {
            if (error.general)
                form.setError("root", { message: error.general[0] });
            if (error.workItemId)
                form.setError("workItemId", { message: error.workItemId[0] });
        },
    };

    const { form, isPending, startAction, submitAction } = useFormAction({
        action: withCallbacks(action.bind(null, projectId), callbacks), // bind projectId to the action
        schema: createProjectWorkItemSchema,
        defaultValues,
    });

    // handle form submission and call the server action with the form data
    const handleSubmit = form.handleSubmit((_, e) => {
        startAction(() => {
            const formData = new FormData(e?.target as HTMLFormElement);
            submitAction(formData);
        });
    });

    // work item unit
    const selectedWorkItemId = form.watch("workItemId");
    const selectedWorkItem = workItemDefinitions.find(
        (item) => item.id === selectedWorkItemId,
    );
    const selectedWorkItemUnit = selectedWorkItem?.unitAbbreviation ?? "unit";

    return (
        <UIForm {...form}>
            <Form
                action={submitAction}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-row items-center gap-4"
            >
                {/* WORK ITEM SELECTION */}
                <FormField
                    control={form.control}
                    name="workItemId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select Work Item</FormLabel>
                            <FormControl>
                                <WorkItemSelect
                                    definitions={workItemDefinitions}
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* WORK ITEM QUANTITY INPUT */}
                <FormField
                    name="quantity"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className="w-32">
                            <FormLabel
                                htmlFor="workItemQuantity"
                                className="mb-1 block text-sm font-medium"
                            >
                                Quantity
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Enter quantity"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* current selected work item unit */}
                <div className="mt-6 flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">{`${selectedWorkItemUnit}`}</span>
                    <ButtonWithLoader
                        type="submit"
                        isPending={isPending}
                        text="Add"
                    />
                </div>

                {/* display general server error */}
                {form.formState.errors.root ? (
                    <span className="font-medium text-destructive">
                        {form.formState.errors.root.message}
                    </span>
                ) : null}
            </Form>
        </UIForm>
    );
}

export default AddWorkItemForm;
