import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { type Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Concrete Works Testing RMS",
    description: "Concrete Works Testing RMS",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${inter.className} ${inter.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
