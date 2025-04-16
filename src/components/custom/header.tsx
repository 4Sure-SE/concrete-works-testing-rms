"use client";

import type { ReactNode } from "react";

export type HeaderProps = {
    title: string;
    leftControls?: ReactNode;
};

function Header({ title, leftControls }: HeaderProps) {
    // const { fullName } = useAuth();

    // const capitalizeFirstLetter = (text: string | null): string | null => {
    //     if (!text) return null;
    //     return text.charAt(0).toUpperCase() + text.slice(1);
    // };

    // Usample usage
    // const welcomeMessage = fullName ? (
    //     <div className="text-sm font-medium">
    //         Welcome, {capitalizeFirstLetter(fullName)}
    //     </div>
    // ) : null;

    return (
        <header className="flex h-16 items-center gap-4 border-b px-4">
            <div className="flex flex-1 items-center gap-4">
                {leftControls}
                <h1 className="text-sm font-semibold md:text-base lg:text-lg">
                    {title}
                </h1>
            </div>
            {/* <div className="flex items-center">{welcomeMessage}</div> */}
        </header>
    );
}

export default Header;
