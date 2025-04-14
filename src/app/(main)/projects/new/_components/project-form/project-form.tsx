"use client";

import FormRow from "@/components/custom/form-row";
import { Button } from "@/components/ui/button";
import { Form as UIForm } from "@/components/ui/form";
import { type Callbacks } from "@/lib/types/actions.types";
import { type CreateProjectDTO } from "@/lib/types/project";
import type {
    CreateProjectInitialState,
    CreateProjectReturnState,
    ProjectActionErrors,
    ProjectDTO,
} from "@/lib/types/project/project.types";
import { withCallbacks } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useActionState, useTransition } from "react";
import { useForm } from "react-hook-form";
import ProjectFormField from "./project-form-field";
import { formLayout, projectFormConfig } from "./project-form.config";
import { createProjectSchema } from "./project-form.schema";

interface ProjectFormProps {
    action: (
        initialState: CreateProjectInitialState,
        formData: FormData,
    ) => Promise<CreateProjectReturnState>;
    initialState: CreateProjectInitialState;
}

export default function ProjectForm({
    action,
    initialState,
}: ProjectFormProps) {
    // server action callbacks on success or error
    const callbacks: Callbacks<ProjectDTO, ProjectActionErrors> = {
        // on server action success
        onSuccess: (data) => {
            router.push(`/projects/${data?.id}`);
        },
        // on server action error
        onError: (error) => {
            console.warn(error);
        },
    };

    const [actionState, submitAction, isPending] = useActionState<
        CreateProjectInitialState,
        FormData
    >(withCallbacks(action, callbacks), initialState);

    const [, startTransition] = useTransition();
    const router = useRouter();

    const form = useForm<CreateProjectDTO>({
        resolver: zodResolver(createProjectSchema),
        mode: "onBlur",
        defaultValues: actionState.data!,
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
