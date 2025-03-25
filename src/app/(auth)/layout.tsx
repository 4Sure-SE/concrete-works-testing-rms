import "@/styles/globals.css";

import Header from "@/components/custom/header";
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
        <html lang="en">
            <body className={`${inter.className} ${inter.variable}`}>
                <AuthProvider>
                    <Header title="Concrete Works Testing RMS" />
                    <div className="flex min-h-screen flex-col items-center justify-center">
                        <main className="flex min-h-screen w-full max-w-md flex-col items-center justify-center p-4">
                            {children}
                        </main>
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}
