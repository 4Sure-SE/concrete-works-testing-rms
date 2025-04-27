"use client";

import type { Control } from "react-hook-form";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FieldConfig } from "@/lib/types/form.types";
import type { CreateProjectDTO } from "@/lib/types/project";
import type { UpdateProjectDTO } from "@/lib/types/project/project.types";
import { formatDate } from "@/lib/utils";

interface FormFieldProps<T extends CreateProjectDTO | UpdateProjectDTO> {
    control: Control<T>;
    fieldDetails: FieldConfig<T>;
}

export function ProjectFormField<
    T extends CreateProjectDTO | UpdateProjectDTO,
>({ control, fieldDetails }: FormFieldProps<T>) {
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
                        {/* if the field is a date input */}
                        {field.value instanceof Date ? (
                            <Input
                                type={type}
                                placeholder={placeholder}
                                {...field}
                                value={formatDate(field.value)}
                            />
                        ) : (
                            // if it is a text or number input
                            <Input
                                type={type}
                                placeholder={placeholder}
                                {...field}
                                value={field.value ?? ""}
                            />
                        )}
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
