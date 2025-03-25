"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { signUp } from "@/server/actions/auth";
import Link from "next/link";
import { useActionState } from "react";
import { AuthForm } from "./auth-form";

type SignUpResponse = {
    error?: string | null;
    success?: boolean;
    message?: string;
};

export function SignUpForm() {
    const [state, action] = useActionState<SignUpResponse, FormData>(
        (_state: SignUpResponse, formData: FormData) => signUp(formData),
        { error: null },
    );

    if (state?.success) {
        return (
            <Card className="w-[350px] border-primary/20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-semibold tracking-tight text-primary">
                        Check your email
                    </CardTitle>
                    <CardDescription>{state.message}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-center text-sm">
                        <Link
                            href="/log-in"
                            className="text-secondary underline underline-offset-4 hover:text-secondary/80"
                        >
                            Back to login
                        </Link>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-[350px] border-primary/20">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-semibold tracking-tight text-primary">
                    Create an account
                </CardTitle>
                <CardDescription>
                    Enter your email below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <AuthForm
                    mode="signup"
                    error={state?.error}
                    action={action}
                />

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-muted" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Already registered?
                        </span>
                    </div>
                </div>

                <div className="text-center text-sm">
                    <Link
                        href="/log-in"
                        className="text-secondary underline underline-offset-4 hover:text-secondary/80"
                    >
                        Sign in to your account
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
