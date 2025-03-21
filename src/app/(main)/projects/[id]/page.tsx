import { fakeMaterialsData } from "./fake-data";
import { Button } from "@/components/ui/button";
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
                <Button
                    variant="outline"
                    size="default"
                    className="mr-5 w-[142px]"
                >
                    Share Link
                </Button>

                <Button
                    variant="outline"
                    size="default"
                    className="mr-5 w-[142px]"
                >
                    Export Report
                </Button>

                <Button
                    variant="default"
                    size="default"
                    className="mr-5 w-[169px] bg-blue-700 text-white hover:bg-blue-600"
                >
                    + Add Item of Work
                </Button>
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
