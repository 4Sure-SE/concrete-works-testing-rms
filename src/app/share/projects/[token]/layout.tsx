export default function SharedProjectLayout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <main className="bg-gray-50 px-8 py-4">
            {children}
            {modal}
        </main>
    );
}
