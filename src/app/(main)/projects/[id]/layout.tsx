export default function ProjectDetailLayout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}
