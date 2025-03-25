"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { logIn } from "@/server/actions/auth";
import Link from "next/link";
import { useActionState } from "react";
import { AuthForm } from "./auth-form";

type State = { error: string | null };

export function LoginForm() {
    const [state, action] = useActionState<State, FormData>(
        (prevState: State, formData: FormData) => logIn(formData),
        { error: null },
    );

    return (
        <Card className="w-[350px] border-primary/20">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-semibold tracking-tight text-primary">
                    Welcome back
                </CardTitle>
                <CardDescription>
                    Enter your email to sign in to your account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <AuthForm
                    mode="login"
                    error={state?.error}
                    action={action}
                />

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-muted" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            New here?
                        </span>
                    </div>
                </div>

                <div className="text-center text-sm">
                    <Link
                        href="/sign-up"
                        className="text-secondary underline underline-offset-4 hover:text-secondary/80"
                    >
                        Create an account
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
