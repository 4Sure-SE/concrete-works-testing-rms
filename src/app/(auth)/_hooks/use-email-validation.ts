"use client";

import { validateEmail } from "@/server/actions/auth";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function useEmailValidation() {
    const [email, setEmail] = useState("");
    const [isValidating, setIsValidating] = useState(false);
    const [emailError, setEmailError] = useState("");

    const validateEmailDebounced = useDebouncedCallback(
        async (value: string) => {
            if (!value || value.length < 5 || !value.includes("@")) {
                setIsValidating(false);
                return;
            }

            setIsValidating(true);

            try {
                const result = await validateEmail(value);
                if (!result.isValid && result.error) {
                    setEmailError(result.error);
                } else {
                    setEmailError("");
                }
            } catch (error) {
                console.error("Email validation error:", error);
            } finally {
                setIsValidating(false);
            }
        },
        600,
    );

    useEffect(() => {
        if (email) {
            void validateEmailDebounced(email);
        } else {
            setEmailError("");
        }
    }, [email, validateEmailDebounced]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        if (!value) {
            setEmailError("");
        }
    };

    return {
        email,
        emailError,
        isValidating,
        handleEmailChange,
        setEmailError,
    };
}
