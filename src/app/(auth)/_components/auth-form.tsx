"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStatus } from "react-dom";

interface AuthFormProps {
    mode: "login" | "signup";
    error?: string | null;
    action: (formData: FormData) => void | Promise<void>;
}

function SubmitButton({ mode }: { mode: AuthFormProps["mode"] }) {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full"
        >
            {mode === "login" ? "Log In" : "Sign Up"}
        </Button>
    );
}

export function AuthForm({ mode, error, action }: AuthFormProps) {
    return (
        <form
            action={action}
            className="flex flex-col gap-4"
        >
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                    required
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <SubmitButton mode={mode} />
        </form>
    );
}
