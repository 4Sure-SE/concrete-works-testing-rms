import "@/styles/globals.css";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { AppHeader, AppSidebar } from "./_components/";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Concrete Works Testing RMS",
    description: "Concrete Works Testing RMS",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function MainLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${inter.className} ${inter.variable}`}
        >
            <body>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <AppHeader />
                        <main className="flex-1 overflow-auto p-4">
                            {children}
                        </main>
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    );
}
