"use client";

import { Lock, Mail } from "lucide-react";
import Form from "next/form";
import Link from "next/link";
import { useState } from "react";
import { SubmitButton } from "../actions/submit-button";
import { AuthCard } from "../layout/auth-card";
import { FormInput } from "./form-input";

interface LoginFormProps {
    action: (
        formData: FormData,
    ) => void | Promise<void | { error?: string | null; field?: string }>;
}

export function LoginForm({ action }: LoginFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const LoginFormContent = (
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
                onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                }}
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
                <div className="absolute top-0 right-0 text-xs">
                    <Link
                        href="/forgot-password"
                        className="text-blue-600 hover:underline"
                    >
                        Forgot password?
                    </Link>
                </div>
            </div>

            <SubmitButton
                mode="login"
                isDisabled={isSubmitting}
            />
        </Form>
    );

    return (
        <AuthCard
            title="Welcome back"
            description="Enter your email to sign in to your account"
            alternateText="Don't have an account?"
            linkText="Create an account"
            linkHref="/sign-up"
        >
            {LoginFormContent}
        </AuthCard>
    );
}
