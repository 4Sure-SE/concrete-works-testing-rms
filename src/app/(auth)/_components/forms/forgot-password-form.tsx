"use client";

import { Mail } from "lucide-react";
import Form from "next/form";
import { useState } from "react";
import { SubmitButton } from "../actions/submit-button";
import { AuthCard } from "../layout/auth-card";
import type { AuthState } from "../types";
import { FormInput } from "./form-input";

interface ForgotPasswordFormProps {
    action: (formData: FormData) => Promise<void>;
    state?: AuthState;
}

export function ForgotPasswordForm({
    action,
    state = {},
}: ForgotPasswordFormProps) {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        try {
            await action(formData);
        } finally {
            setIsSubmitting(false);
        }
    };

    const ForgotPasswordFormContent = (
        <Form
            action={handleSubmit}
            className="flex flex-col gap-6"
        >
            <FormInput
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                Icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <SubmitButton
                mode="reset-request"
                isDisabled={!email || isSubmitting}
            />

            {state?.error && (
                <div className="relative mt-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
                    <span className="block sm:inline">{state.error}</span>
                </div>
            )}
        </Form>
    );

    return (
        <AuthCard
            title="Forgot Password"
            description="Enter your email to receive a password reset link."
            alternateText="Remember your password?"
            linkText="Back to Login"
            linkHref="/log-in"
        >
            {ForgotPasswordFormContent}
        </AuthCard>
    );
}
