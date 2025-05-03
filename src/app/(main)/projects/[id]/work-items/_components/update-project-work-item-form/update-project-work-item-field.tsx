"use client";

import type { Control } from "react-hook-form";

import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FieldConfig } from "@/lib/types/form.types";
import { type UpdateProjectWorkItemDTO } from "@/lib/types/project-work-item/project-work-item.types";

interface FormFieldProps<T extends UpdateProjectWorkItemDTO> {
    control: Control<T>;
    fieldDetails: FieldConfig<T>;
    isDisabled?: boolean;
}

export function UpdateProjectWorkItemField<T extends UpdateProjectWorkItemDTO>({
    control,
    fieldDetails,
    isDisabled = false,
}: FormFieldProps<T>) {
    const { name, placeholder, type = "text" } = fieldDetails;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-grow">
                    <FormControl>
                        <Input
                            className="h-8"
                            type={type}
                            placeholder={placeholder}
                            {...field}
                            value={field.value}
                            autoFocus
                            disabled={isDisabled}
                        />
                    </FormControl>
                    <FormMessage className="text-xs" />
                </FormItem>
            )}
        />
    );
}
