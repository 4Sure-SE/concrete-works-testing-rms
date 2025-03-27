import "@/styles/globals.css";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "../(auth)/_contexts/auth-provider";
import { AppSidebar, HeaderWithSidebarState } from "./_components/";

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
        <html lang="en">
            <body className={`${inter.className} ${inter.variable}`}>
                <AuthProvider>
                    <div className="min-h-screen">
                        <SidebarProvider>
                            <AppSidebar />
                            <SidebarInset>
                                <HeaderWithSidebarState
                                    withSidebarTrigger
                                    title="Concrete Works Testing RMS"
                                />
                                <main className="flex-1 overflow-auto p-4">
                                    {children}
                                </main>
                            </SidebarInset>
                        </SidebarProvider>
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
