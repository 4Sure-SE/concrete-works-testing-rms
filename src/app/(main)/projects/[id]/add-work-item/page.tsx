export default async function AddWorkItemPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return <div>Add Work Item to Project: {id}</div>;
}
