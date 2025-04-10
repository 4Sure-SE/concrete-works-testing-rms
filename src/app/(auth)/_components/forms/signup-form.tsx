"use client";

import { Lock, Mail, User } from "lucide-react";
import Form from "next/form";
import { useEffect, useState } from "react";
import { SubmitButton } from "../actions/submit-button";
import { AuthCard } from "../layout/auth-card";
import { FormInput } from "./form-input";
import PasswordRequirements from "./password-req";

interface SignupFormProps {
    action: (
        formData: FormData,
    ) => void | Promise<void | { error?: string | null; field?: string }>;
    initialError?: {
        error?: string | null;
        field?: string;
    } | null;
}

export function SignupForm({ action, initialError = null }: SignupFormProps) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (
            initialError &&
            initialError.field === "email" &&
            initialError.error
        ) {
            setEmailError(initialError.error);
        }
    }, [initialError]);

    useEffect(() => {
        setEmailError("");
    }, [email]);

    const passwordsMatch = password === confirmPassword;

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        try {
            const result = await action(formData);
            if (result && "error" in result && result.field === "email") {
                setEmailError(result.error ?? "");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const SignupFormContent = (
        <Form
            action={handleSubmit}
            className="flex flex-col gap-6"
        >
            <FormInput
                id="fullName"
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                Icon={User}
            />

            <FormInput
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                Icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                errorMessage={emailError}
            />

            <div className="relative grid w-full items-center gap-1.5">
                <FormInput
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    Icon={Lock}
                />
                {password.length > 0 && (
                    <PasswordRequirements password={password} />
                )}
            </div>

            <div className="grid w-full items-center gap-1.5">
                <FormInput
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    Icon={Lock}
                    error={!passwordsMatch && confirmPassword !== ""}
                />
                {!passwordsMatch && confirmPassword && (
                    <p className="mt-1 text-xs text-red-600">
                        Passwords do not match
                    </p>
                )}
            </div>

            <SubmitButton
                mode="signup"
                isDisabled={isSubmitting || !passwordsMatch}
            />
        </Form>
    );

    return (
        <AuthCard
            title="Create an account"
            description="Enter your details to create an account"
            alternateText="Already have an account?"
            linkText="Log in"
            linkHref="/log-in"
        >
            {SignupFormContent}
        </AuthCard>
    );
}
