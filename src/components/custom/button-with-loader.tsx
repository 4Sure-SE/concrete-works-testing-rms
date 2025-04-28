import { Loader } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type ButtonWithLoaderProps = React.ComponentProps<typeof Button> & {
    isPending: boolean;
    text: string;
    loadingText?: string;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    compact?: boolean;
};

function ButtonWithLoader({
    isPending,
    text,
    loadingText = "Loading...",
    icon,
    iconPosition = "left",
    compact = false,
    ...props
}: ButtonWithLoaderProps) {
    return (
        <Button
            {...props}
            className={`${compact ? "min-w-24" : "min-w-32"} flex cursor-pointer items-center gap-2 ${props.className ?? ""}`}
            type={props.type ?? "button"}
            disabled={isPending}
            onClick={props.onClick}
        >
            {isPending ? (
                <>
                    <Loader className="size-4 animate-spin" />
                    <span>{loadingText}</span>
                </>
            ) : (
                <>
                    {iconPosition === "left" && icon}
                    <span>{text}</span>
                    {iconPosition === "right" && icon}
                </>
            )}
        </Button>
    );
}

export default ButtonWithLoader;
