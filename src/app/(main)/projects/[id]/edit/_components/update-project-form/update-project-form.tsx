"use client";

import Form from "next/form";
import { useRouter } from "next/navigation";

import FormRow from "@/components/custom/form-row";
import { Form as UIForm } from "@/components/ui/form";
import { useFormAction } from "@/hooks/use-form-action";
import { type Callbacks } from "@/lib/types/actions.types";
import type {
    ProjectActionErrors,
    ProjectActionState,
    ProjectDTO,
    UpdateProjectDTO,
} from "@/lib/types/project/project.types";
import { withCallbacks } from "@/lib/utils";

import { ProjectFormField } from "@/app/(main)/projects/_components/project-form";
import { formLayout } from "@/app/(main)/projects/_components/project-form/project-form.config";
import ButtonWithLoader from "@/components/custom/button-with-loader";
import { updateProjectFormConfig } from "./update-project-form.config";
import { updateProjectSchema } from "./update-project-form.schema";

interface UpdateProjectFormProps {
    projectId: string;
    action: (
        projectId: string,
        previousState: ProjectActionState,
        formData: FormData,
    ) => Promise<ProjectActionState>;
    defaultValues: UpdateProjectDTO;
}

export default function UpdateProjectForm({
    projectId,
    action,
    defaultValues,
}: UpdateProjectFormProps) {
    const router = useRouter();

    // server action callbacks on success or error
    const callbacks: Callbacks<ProjectDTO | null, ProjectActionErrors> = {
        // on server action success
        onSuccess: (_data) => {
            router.back();
            form.reset();
        },
        // on server action error
        onError: (error) => {
            if (error.general)
                form.setError("root", { message: error.general[0] });
            if (error.contractId)
                form.setError("contractId", { message: error.contractId[0] });
        },
    };

    const { form, isPending, startAction, submitAction } = useFormAction({
        action: withCallbacks(action.bind(null, projectId), callbacks),
        schema: updateProjectSchema,
        defaultValues,
    });

    // handle form submission and call the server action with the form data
    const handleSubmit = form.handleSubmit((_, e) => {
        startAction(() => {
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
                                <ProjectFormField<UpdateProjectDTO>
                                    key={fieldName}
                                    control={form.control}
                                    fieldDetails={
                                        updateProjectFormConfig[fieldName]
                                    }
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
                    <ButtonWithLoader
                        isPending={isPending}
                        text="Add"
                        type="submit"
                    />
                </div>
            </Form>
        </UIForm>
    );
}
