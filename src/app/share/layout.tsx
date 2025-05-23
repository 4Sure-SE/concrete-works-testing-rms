import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";

export default function ShareLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="min-h-screen bg-gray-50">{children}</div>
                <Toaster richColors />
            </body>
        </html>
    );
}
