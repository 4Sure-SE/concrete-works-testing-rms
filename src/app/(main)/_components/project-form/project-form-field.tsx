"use client";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FieldConfig } from "@/lib/definitions/form.types";
import type { ProjectFormData } from "@/lib/definitions/project/project.types";
import type { Control } from "react-hook-form";

interface FormFieldProps {
    control: Control<ProjectFormData>;
    fieldDetails: FieldConfig<ProjectFormData>;
}

function ProjectFormField({ control, fieldDetails }: FormFieldProps) {
    const {
        name,
        label,
        placeholder,
        type = "text",
        isOptional,
    } = fieldDetails;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {label} <span>{isOptional ? "(Optional)" : "*"}</span>
                    </FormLabel>
                    <FormControl>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            {...field}
                            value={field.value ?? ""}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export default ProjectFormField;
