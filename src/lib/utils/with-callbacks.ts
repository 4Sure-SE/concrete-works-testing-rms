import type { Callbacks, Result } from "../types/actions.types";

// wrapper for server actions to call functions on success or error
export const withCallbacks = <Args extends unknown[], T, E>(
    fn: (...args: Args) => Promise<Result<T, E>>,
    callbacks: Callbacks<T, E>,
) => {
    return async (...args: Args) => {
        const promise = fn(...args);

        const res = await promise;

        if (res.data) {
            callbacks.onSuccess?.(res.data);
        }

        if (res.error) {
            callbacks.onError?.(res.error);
        }

        return res;
    };
};
