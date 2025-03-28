"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, User } from "lucide-react";
import Form from "next/form";
import { useFormStatus } from "react-dom";
interface AuthFormProps {
    mode: "login" | "signup";
    action: (formData: FormData) => void | Promise<void>;
}

function SubmitButton({ mode }: { mode: AuthFormProps["mode"] }) {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full bg-orange-500 text-white hover:bg-orange-400"
        >
            {mode === "login" ? "Log In" : "Sign Up"}
        </Button>
    );
}

export function AuthForm({ mode, action }: AuthFormProps) {
    return (
        <Form
            action={action}
            className="flex flex-col gap-6"
        >
            {mode === "signup" && (
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                        <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                        <Input
                            required
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            className="pl-10"
                        />
                    </div>
                </div>
            )}
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                    <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                    <Input
                        required
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                    />
                </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                    <Input
                        required
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10"
                    />
                </div>
            </div>
            {mode === "signup" && (
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                        <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                        <Input
                            required
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            className="pl-10"
                        />
                    </div>
                </div>
            )}
            <SubmitButton mode={mode} />
        </Form>
    );
}
