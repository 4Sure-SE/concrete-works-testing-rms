import { fakeMaterialsData } from "./fake-data";
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table";

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

            <div className="grid w-full grid-cols-2 gap-x-4 p-8">
                <div className="flex w-full flex-col p-4">
                    <h5 className="text-black">Contract ID: {id}</h5>
                    <h5 className="mt-4 text-black">
                        Contract Name: Highways Construction
                    </h5>
                    <h5 className="mt-4 text-black">Contractor Name: </h5>
                </div>
                <div className="flex w-full flex-col p-4">
                    <h5 className="text-black">Limits:</h5>
                    <h5 className="mt-4 text-black">Location:</h5>
                </div>
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
                <Table className="border border-gray-200">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">
                                Item No.
                            </TableHead>
                            <TableHead className="text-center">
                                Description/Materials
                            </TableHead>
                            <TableHead className="text-center">
                                Quantity
                            </TableHead>
                            <TableHead className="text-center">Unit</TableHead>
                            <TableHead className="text-center">
                                Tests Required
                            </TableHead>
                            <TableHead className="text-center">
                                No. of Test On File
                            </TableHead>
                            <TableHead className="text-center">
                                Balance
                            </TableHead>
                            <TableHead className="text-center">
                                Status
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody className="text-center">
                        {fakeMaterialsData.map((item) => (
                            <TableRow key={item.itemId}>
                                <TableCell>{item.itemNo}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.unit}</TableCell>
                                <TableCell>{item.testsRequired}</TableCell>
                                <TableCell>{item.testsOnFile}</TableCell>
                                <TableCell>{item.balance}</TableCell>
                                <TableCell>{item.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
