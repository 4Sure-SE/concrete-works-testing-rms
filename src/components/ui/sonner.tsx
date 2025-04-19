"use client";

import { useTheme } from "next-themes";
import type { ToasterProps } from "sonner";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            style={
                {
                    "--normal-bg": "#f97316",
                    "--normal-text": "#ffffff",
                    "--normal-border": "#ea580c",
                } as React.CSSProperties
            }
            {...props}
        />
    );
};

export { Toaster };
