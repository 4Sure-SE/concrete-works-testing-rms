export default function SharedProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="container mx-auto max-w-7xl p-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                {children}
            </div>
        </main>
    );
}
