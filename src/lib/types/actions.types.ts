import type { FormField } from "./form.types";

type Success<T> = { data: T; error: null };
type Failure<E> = { data: null; error: E };

type ActionSuccess<T = null> = {
    success: true;
    data: T;
};

type ActionError<E> = {
    success: false;
    error: E;
};

export type ActionState<T, E = Error> = ActionSuccess<T> | ActionError<E>;

export type ActionErrors<T> = Partial<
    Record<FormField<T> | "general", string[]>
>;

export type Result<T, E = Error> = Success<T> | Failure<E>;

export type Callbacks<T, E> = {
    onSuccess?: (data: T) => void;
    onError?: (error: E) => void;
};
