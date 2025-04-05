import { type HTMLInputTypeAttribute } from "react";

export type FormField<T> = keyof T;

export type FieldConfig<T> = {
    name: FormField<T>;
    label: string;
    placeholder: string;
    default: T[keyof T];
    type?: HTMLInputTypeAttribute;
    isOptional?: boolean;
};
