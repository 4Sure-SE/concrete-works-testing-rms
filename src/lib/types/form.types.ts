import { type HTMLInputTypeAttribute } from "react";
import type { Path } from "react-hook-form";

export type FormField<T> = keyof T;

export type FieldConfig<T> = {
    name: Path<T>;
    label?: string;
    placeholder?: string;
    default?: T[keyof T];
    type?: HTMLInputTypeAttribute;
    isOptional?: boolean;
};
