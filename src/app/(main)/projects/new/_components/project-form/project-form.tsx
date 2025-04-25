"use client";

import FormRow from "@/components/custom/form-row";
import { Button } from "@/components/ui/button";
import { Form as UIForm } from "@/components/ui/form";
import { type Callbacks } from "@/lib/types/actions.types";
import { type CreateProjectDTO } from "@/lib/types/project";
import type {
    ProjectActionErrors,
    ProjectActionState,
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
        previousState: ProjectActionState,
        formData: FormData,
    ) => Promise<ProjectActionState>;
    defaultValues: CreateProjectDTO;
}

export default function ProjectForm({
    action,
    defaultValues,
}: ProjectFormProps) {
    // server action callbacks on success or error
    const callbacks: Callbacks<ProjectDTO | null, ProjectActionErrors> = {
        // on server action success
        onSuccess: (data) => {
            form.reset();
            router.push(`/projects/${data?.id}/work-items`);
        },
        // on server action error
        onError: (error) => {
            if (error.general)
                form.setError("root", { message: error.general[0] });
            if (error.contractId)
                form.setError("contractId", { message: error.contractId[0] });
        },
    };

    // to handle the server action state
    // submitAction will be called when the form is submitted
    const [, submitAction, isPending] = useActionState<
        ProjectActionState,
        FormData
    >(withCallbacks(action, callbacks), { success: true, data: null });

    // use transition to prevent blocking the UI while the form is submitting
    const [, startTransition] = useTransition();
    const router = useRouter();

    const form = useForm<CreateProjectDTO>({
        resolver: zodResolver(createProjectSchema),
        // validate form on blur
        mode: "onBlur",
        defaultValues,
    });

    // handle form submission and call the server action with the form data
    const handleSubmit = form.handleSubmit((_, e) => {
        startTransition(() => {
            const formData = new FormData(e?.target as HTMLFormElement);
            submitAction(formData);
        });
    });

    return (
        // shadcn form component to handle form state and validation
        <UIForm {...form}>
            {/* next/form to handle form submission */}
            <Form
                action={submitAction}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-8"
            >
                {/* form fields */}
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
                                    fieldDetails={projectFormConfig[fieldName]}
                                />
                            ))}
                        </FormRow>
                    ))}
                </div>

                {/* display general server error */}
                {form.formState.errors.root ? (
                    <span className="font-medium text-destructive">
                        {form.formState.errors.root.message}
                    </span>
                ) : null}

                {/* submit button */}
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
    );
}
