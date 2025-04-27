import { Loader } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type ButtonWithLoaderProps = React.ComponentProps<typeof Button> & {
    isPending: boolean;
    text: string;
};

function ButtonWithLoader({
    isPending,
    text,
    ...props
}: ButtonWithLoaderProps) {
    return (
        <Button
            {...props}
            className={`min-w-48 cursor-pointer ${props.className ?? ""}`}
            type={props.type ?? "button"}
            disabled={isPending}
            onClick={props.onClick}
        >
            {isPending ? <Loader className="animate-spin" /> : text}
        </Button>
    );
}

export default ButtonWithLoader;
