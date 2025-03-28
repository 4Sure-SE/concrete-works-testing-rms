"use client";

import { useTheme } from "next-themes";
import type { ToasterProps } from "sonner";
import { Toaster as Sonner } from "sonner";

type CSSPropertiesWithVars = React.CSSProperties & {
    "--normal-bg": string;
    "--normal-text": string;
    "--normal-border": string;
    "--success-bg": string;
    "--success-text": string;
    "--success-border": string;
};

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            theme={
                typeof theme === "string"
                    ? (theme as ToasterProps["theme"])
                    : "light"
            }
            className="toaster group"
            style={
                {
                    "--normal-bg": "var(--popover)",
                    "--normal-text": "var(--popover-foreground)",
                    "--normal-border": "var(--border)",
                    "--success-bg": "var(--secondary)",
                    "--success-text": "var(--secondary-foreground)",
                    "--success-border": "var(--secondary)",
                } as CSSPropertiesWithVars
            }
            {...props}
        />
    );
};

export { Toaster };
