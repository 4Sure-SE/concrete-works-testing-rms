"use client";

import { useActionState } from "react";
import type { AuthState } from "../_components/types";

export function useAuthAction(
    action: (formData: FormData) => Promise<AuthState>,
) {
    return useActionState<AuthState, FormData>(
        (_prevState: AuthState, formData: FormData) => action(formData),
        { error: null },
    );
}
