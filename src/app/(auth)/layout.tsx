import "@/styles/globals.css";

import Header from "@/components/custom/header";
import { Toaster } from "@/components/ui/sonner";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./_contexts/auth-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Concrete Works Testing RMS",
    description: "Concrete Works Testing RMS",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function AuthLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className="overflow-hidden"
        >
            <body
                className={`${inter.className} ${inter.variable} overflow-hidden`}
            >
                <AuthProvider>
                    <Header title="Concrete Works Testing RMS" />
                    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-auto">
                        <main className="w-full max-w-md p-4">{children}</main>
                    </div>
                    <Toaster
                        richColors
                        closeButton
                    />
                </AuthProvider>
            </body>
        </html>
    );
}
