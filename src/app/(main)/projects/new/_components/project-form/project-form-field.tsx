"use client";

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
import { formatDate } from "@/lib/utils";
import type { Control } from "react-hook-form";

interface FormFieldProps {
    control: Control<CreateProjectDTO>;
    fieldDetails: FieldConfig<CreateProjectDTO>;
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

export default ProjectFormField;
