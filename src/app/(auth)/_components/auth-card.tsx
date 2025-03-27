"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { TrafficCone } from "lucide-react";
import Link from "next/link";
import { type AuthCardProps } from "./types";

export function AuthCard({
    title,
    description,
    children,
    alternateText,
    linkText,
    linkHref,
}: AuthCardProps) {
    return (
        <Card className="w-[400px] border-primary/20">
            <CardHeader className="space-y-1">
                <TrafficCone className="text-orange-500" />
                <CardTitle className="text-xl font-semibold tracking-tight text-orange-500">
                    {title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">{children}</CardContent>
            {(alternateText ?? linkText) && (
                <CardFooter className="flex flex-col gap-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-muted" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                {alternateText}
                            </span>
                        </div>
                    </div>
                    {linkText && linkHref && (
                        <div className="text-center text-sm">
                            <Link
                                href={linkHref}
                                className="text-secondary underline underline-offset-4 hover:text-secondary/80"
                            >
                                {linkText}
                            </Link>
                        </div>
                    )}
                </CardFooter>
            )}
        </Card>
    );
}
