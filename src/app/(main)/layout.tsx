import "@/styles/globals.css";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
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
        <html
            lang="en"
            className="overflow-hidden"
        >
            <body
                className={`${inter.className} ${inter.variable} overflow-hidden`}
            >
                <AuthProvider>
                    <div className="h-screen overflow-hidden">
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
                </AuthProvider>
            </body>
        </html>
    );
}
