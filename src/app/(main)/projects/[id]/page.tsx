export default async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div>
            <div className="flex justify-between bg-white p-8 shadow-md">
                <div>#</div>
                <h3 className="font-semibold text-blue-700">
                    Concrete Works RMS
                </h3>
                <div>@</div>
            </div>

            <div className="p-8">
                <h2 className="font-bold">Manila Bridge</h2>
                <h5 className="text-gray-500">Project Description</h5>
                <h5 className="text-gray-500">Contractor: Contractor Name</h5>
                <p>{id}</p>
            </div>

            <div className="flex flex-row px-8">
                <button className="mr-5 h-[42px] w-[142px] rounded-md border border-gray-200 bg-white text-xs text-gray-800">
                    Share Link
                </button>

                <button className="mr-5 h-[42px] w-[169px] rounded-md border border-gray-200 bg-white text-xs text-gray-800">
                    Export Report
                </button>

                <button className="mr-5 h-[42px] w-[169px] rounded-md border border-gray-200 bg-blue-700 text-xs text-white hover:bg-blue-600">
                    + Add Item of Work
                </button>
            </div>

            <div className="overflow-y-auto p-8">
                <table className="w-full min-w-[600px] border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">
                                Item No.
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Description/Materials
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Quantity
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Unit
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Tests Required
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                No. of Test On File
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Balance
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    );
}
