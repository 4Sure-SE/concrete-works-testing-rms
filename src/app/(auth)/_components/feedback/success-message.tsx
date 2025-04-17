"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

interface SuccessMessageProps {
    title: string;
    message: string;
    linkText?: string;
    linkHref?: string;
}

export function SuccessMessage({
    title,
    message,
    linkText,
    linkHref,
}: SuccessMessageProps) {
    return (
        <Card className="w-full max-w-md">
            <CardHeader className="text-center">
                <div className="mb-4 flex justify-center">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{message}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                {linkText && linkHref && (
                    <Button
                        asChild
                        className="bg-orange-500 text-white hover:bg-orange-400"
                    >
                        <Link href={linkHref}>{linkText}</Link>
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}
