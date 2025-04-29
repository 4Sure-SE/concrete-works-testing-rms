"use client";

import { Plus } from "lucide-react";
import Form from "next/form";

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
import { WorkItemSelect } from "./work-item-select";

interface AddWorkItemFormProps {
    action: (
        projectId: string,
        previousState: ProjectWorkItemActionState,
        formData: FormData,
    ) => Promise<ProjectWorkItemActionState>;
    projectId: string;
    workItemDefinitions: WorkItemDefinitionDTO[];
}

export function AddWorkItemForm({
    action,
    projectId,
    workItemDefinitions,
}: AddWorkItemFormProps) {
    const defaultValues = { workItemId: "", quantity: 0 };

    // const router = useRouter();

    // server action callbacks on success or error
    const callbacks: Callbacks<
        WorkItemDefinitionDTO | null,
        ProjectWorkItemActionErrors
    > = {
        // on server action success
        onSuccess: (data) => {
            form.reset();
            // router.push(`/projects/${projectId}`);
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
                className="space-y-4"
            >
                <div className="flex gap-4">
                    {/* WORK ITEM SELECTION */}
                    <div className="space-y-2">
                        <FormLabel className="text-sm font-medium">
                            Select Work Item
                        </FormLabel>
                        <FormField
                            control={form.control}
                            name="workItemId"
                            render={({ field }) => (
                                <FormItem>
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
                    </div>

                    {/* QUANTITY AND UNIT */}
                    <div className="flex gap-2">
                        <div className="space-y-2">
                            <FormLabel className="text-sm font-medium">
                                Quantity
                            </FormLabel>
                            <FormField
                                name="quantity"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="w-32">
                                        <FormControl>
                                            <Input
                                                type="number"
                                                placeholder="Enter quantity"
                                                {...field}
                                                min={0}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="mt-10 items-baseline">
                            <span className="text-sm font-medium text-muted-foreground">
                                {selectedWorkItemUnit}
                            </span>
                        </div>
                    </div>

                    {/* ADD BUTTON */}
                    <div className="mt-7 flex items-baseline">
                        <ButtonWithLoader
                            type="submit"
                            isPending={isPending}
                            text="Add"
                            icon={<Plus className="size-4" />}
                            loadingText="Adding..."
                            compact
                        />
                    </div>
                </div>

                {/* ERROR MESSAGE */}
                {form.formState.errors.root && (
                    <div className="rounded-md bg-destructive/10 p-3 text-sm font-medium text-destructive">
                        {form.formState.errors.root.message}
                    </div>
                )}
            </Form>
        </UIForm>
    );
}
