export default async function ProjectEditPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return <div>Edit Project: {id}</div>;
}
