"use client";

import Link from "next/link";
import { AuthCard } from "./auth-card";

type AuthLoadingCardProps = {
    title: string;
    message: string;
    backUrl: string;
    backText: string;
};

export function AuthLoadingCard({
    title,
    message,
    backUrl,
    backText,
}: AuthLoadingCardProps) {
    return (
        <AuthCard
            title={title}
            description={message}
        >
            <div className="text-center text-sm">
                <Link
                    href={backUrl}
                    className="text-secondary underline underline-offset-4 hover:text-secondary/80"
                >
                    {backText}
                </Link>
            </div>
        </AuthCard>
    );
}
