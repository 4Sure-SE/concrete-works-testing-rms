"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState } from "react";
import { useForm, type UseFormProps } from "react-hook-form";
import { type z } from "zod";

import type { ActionErrors, ActionState } from "@/lib/types/actions.types";

interface UseFormActionProps<
    Args extends unknown[],
    TForm extends z.ZodTypeAny, // form schema
    TData, // data returned from action
    TError = ActionErrors<z.infer<TForm>>, // error returned from action
> {
    action: (...args: Args) => Promise<ActionState<TData | null, TError>>;
    schema: TForm;
    defaultValues: z.infer<TForm>; // default values for the form
    formOptions?: Omit<
        UseFormProps<z.infer<TForm>>,
        "resolver" | "defaultValues"
    >;
}

export function useFormAction<
    TForm extends z.ZodTypeAny,
    TData,
    TError = ActionErrors<z.infer<TForm>>,
>({
    action,
    schema,
    defaultValues,
    formOptions,
}: UseFormActionProps<
    // action arguments, form schema, data returned from action, error returned from action
    [ActionState<TData | null, TError>, FormData],
    TForm,
    TData,
    TError
>) {
    type TFormData = z.infer<TForm>;

    const initialActionState: ActionState<TData | null, TError> = {
        // initial action state
        success: true,
        data: null,
    };

    // use action state to handle the server action state
    const [actionState, submitAction, isPending] = useActionState<
        ActionState<TData | null, TError>,
        FormData
    >(action, initialActionState);

    // react hoook form
    const form = useForm<TFormData>({
        resolver: zodResolver(schema),
        mode: "onBlur",
        ...formOptions,
        defaultValues,
    });

    return {
        form,
        actionState,
        submitAction,
        isPending,
    };
}
