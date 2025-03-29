import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
    mode: "login" | "signup";
    isDisabled?: boolean;
}

export function SubmitButton({ mode, isDisabled }: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending || isDisabled}
            className="w-full bg-orange-500 text-white hover:bg-orange-400"
        >
            {mode === "login" ? "Log In" : "Sign Up"}
        </Button>
    );
}
