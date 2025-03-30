import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import type { AuthFormMode } from "../types";

interface SubmitButtonProps {
    mode: AuthFormMode;
    isDisabled?: boolean;
}

export function SubmitButton({ mode, isDisabled }: SubmitButtonProps) {
    const { pending } = useFormStatus();

    const buttonText = {
        login: "Log In",
        signup: "Sign Up",
        "reset-request": "Send Reset Link",
        "reset-password": "Reset Password",
    }[mode];

    return (
        <Button
            type="submit"
            disabled={pending || isDisabled}
            className="w-full bg-orange-500 text-white hover:bg-orange-400"
        >
            {buttonText}
        </Button>
    );
}
