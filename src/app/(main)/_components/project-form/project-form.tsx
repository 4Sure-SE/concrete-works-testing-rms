"use client";

import FormRow from "@/components/custom/form-row";
import { Button } from "@/components/ui/button";
import { Form as UIForm } from "@/components/ui/form";
import { type Callbacks } from "@/lib/definitions/actions.types";
import {
    type ProjectActionErrors,
    type ProjectActionState,
    projectFormConfig,
    type ProjectFormData,
    projectFormSchema,
} from "@/lib/definitions/project/";
import { withCallbacks } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useActionState, useTransition } from "react";
import { useForm } from "react-hook-form";
import ProjectFormField from "./project-form-field";

// grid layout of the form
const formLayout = [
    ["contractId", "contractName"],
    ["contractor", "location"],
    ["dateStarted", "materialsEngineer"],
    ["limits"],
] as const;

interface ProjectFormProps {
    action: (
        initialState: ProjectActionState,
        formData: FormData,
    ) => Promise<ProjectActionState>;
    initialState: ProjectActionState;
}

export default function ProjectForm({
    action,
    initialState,
}: ProjectFormProps) {
    // server action callbacks on success or error
    const callbacks: Callbacks<ProjectFormData, ProjectActionErrors> = {
        onSuccess: (data) => {
            router.push(`/projects/${data?.contractId}`);
        },
        onError: (error) => {
            console.warn(error);
        },
    };

    const [actionState, submitAction, isPending] = useActionState<
        ProjectActionState,
        FormData
    >(withCallbacks(action, callbacks), initialState);
    const [, startTransition] = useTransition();
    const router = useRouter();

    const form = useForm<ProjectFormData>({
        resolver: zodResolver(projectFormSchema),
        mode: "onBlur",
        defaultValues: actionState.data!,
        values: actionState.data!,
    });

    return (
        <div className="mx-auto max-w-7xl py-2 md:py-4">
            <div className="mb-6">
                <h1 className="text-lg font-bold md:text-2xl">
                    Project Information
                </h1>
                <p className="text-sm text-muted-foreground">
                    Provide information about the project
                </p>
            </div>

            <UIForm {...form}>
                <Form
                    action={submitAction}
                    onSubmit={form.handleSubmit((_, e) => {
                        startTransition(() => {
                            const formData = new FormData(
                                e?.target as HTMLFormElement,
                            );
                            submitAction(formData);
                        });
                    })}
                    noValidate
                    // onSubmit={form.handleSubmit((data: ProjectFormData) => {
                    //     formAction(data);
                    // })}
                    className="space-y-8"
                >
                    <div className="space-y-6">
                        {/* render each row based on the layout in config */}
                        {formLayout.map((row, rowIndex) => (
                            <FormRow
                                className="gap-4 md:gap-10"
                                key={`row-${rowIndex}`}
                            >
                                {/* render each field on the row*/}
                                {row.map((fieldName) => (
                                    <ProjectFormField
                                        key={fieldName}
                                        control={form.control}
                                        fieldDetails={
                                            projectFormConfig[fieldName]
                                        }
                                    />
                                ))}
                            </FormRow>
                        ))}
                    </div>
                    {/* display general server error */}
                    {actionState.error?.general ? (
                        <span className="font-medium text-destructive">
                            {actionState.error.general}
                        </span>
                    ) : null}

                    <div className="flex justify-end">
                        <Button
                            className="min-w-48 cursor-pointer"
                            type="submit"
                            disabled={isPending}
                        >
                            {isPending ? (
                                <Loader className="animate-spin" />
                            ) : (
                                "Add"
                            )}
                        </Button>
                    </div>
                </Form>
            </UIForm>
        </div>
    );
}
