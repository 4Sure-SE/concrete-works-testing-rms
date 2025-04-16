type Success<T> = { data: T; error: null };
type Failure<E> = { data: null; error: E };

export type Result<T, E = Error> = Success<T> | Failure<E>;

export type Callbacks<T, E> = {
    onSuccess?: (data: T) => void;
    onError?: (error: E) => void;
};
