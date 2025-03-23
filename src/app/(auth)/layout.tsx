import "@/styles/globals.css";

import Header from "@/components/custom/header";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

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
            className={`${inter.className} ${inter.variable}`}
        >
            <body>
                <div className="w-full">
                    <Header title="Concrete Works Testing RMS" />
                    <main className="flex-1 overflow-auto p-4">{children}</main>
                </div>
            </body>
        </html>
    );
}
