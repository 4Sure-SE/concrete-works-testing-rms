import "@/styles/globals.css";

import Header from "@/components/custom/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { AppSidebar } from "./_components/app-sidebar";

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
                    <div className="w-full">
                        <Header
                            withSidebarTrigger
                            title="Concrete Works Testing RMS"
                        />
                        <main className="flex-1 overflow-auto p-4">
                            {children}
                        </main>
                    </div>
                </SidebarProvider>
            </body>
        </html>
    );
}
