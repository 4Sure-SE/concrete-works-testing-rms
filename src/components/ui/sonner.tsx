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
            toastOptions={{
                unstyled: true,
                classNames: {
                    toast: "group font-sans text-sm border rounded-md shadow-lg p-4 flex gap-3",
                    success: "bg-green-600 border-green-700 text-white",
                    error: "bg-red-600 border-red-700 text-white",
                    warning: "bg-amber-500 border-amber-600 text-white",
                    info: "bg-blue-500 border-blue-600 text-white",
                    default:
                        "bg-gray-700 border-gray-800 text-white dark:bg-gray-800 dark:border-gray-700",
                    title: "font-medium text-base",
                    description: "text-sm opacity-90",
                },
            }}
            {...props}
        />
    );
};

export { Toaster };