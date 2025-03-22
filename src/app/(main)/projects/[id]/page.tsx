import { fakeMaterialsData } from "./fake-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
            <div className="flex justify-between bg-white px-8 py-5 shadow-sm">
                <div className="flex items-center justify-center">
                    #
                    <h3 className="ml-4 font-semibold text-blue-700">
                        Concrete Works Testing RMS
                    </h3>
                </div>
                <div>@</div>
            </div>

            <div className="grid w-full grid-cols-2 gap-x-4 p-8">
                <div className="flex w-full flex-col">
                    <h5 className="font-medium text-gray-700">
                        Contract ID: {id}
                    </h5>
                    <h5 className="mt-4 font-medium text-gray-700">
                        Contract Name: Highways Construction
                    </h5>
                    <h5 className="mt-4 font-medium text-gray-700">
                        Contractor Name:{" "}
                    </h5>
                </div>
                <div className="flex w-full flex-col">
                    <h5 className="font-medium text-gray-700">Limits:</h5>
                    <h5 className="mt-4 font-medium text-gray-700">
                        Location:
                    </h5>
                </div>
            </div>

            <div className="flex flex-row px-8">
                <Button
                    variant="outline"
                    size="default"
                    className="mr-5 w-[142px] text-gray-700"
                >
                    Share Link
                </Button>

                <Button
                    variant="outline"
                    size="default"
                    className="mr-5 w-[142px] text-gray-700"
                >
                    Export Report
                </Button>

                <Button
                    variant="default"
                    size="default"
                    className="mr-5 w-[169px] bg-blue-700 text-white hover:bg-blue-800"
                >
                    + Add Item of Work
                </Button>
            </div>

            <div className="overflow-y-auto p-8">
                <Table className="border border-gray-200">
                    <TableHeader className="bg-gray-50">
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
                                <TableCell>
                                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                                        <button className="rounded-sm bg-red-500 px-2 py-1 text-white hover:bg-red-600">
                                            −
                                        </button>
                                        <div className="mx-1 inline-block rounded-sm border border-gray-200 bg-white px-3.5 py-1">
                                            {item.testsOnFile}
                                        </div>
                                        <button className="rounded-sm bg-green-500 px-2.5 py-1 text-white hover:bg-green-600">
                                            +
                                        </button>
                                    </div>
                                </TableCell>
                                <TableCell>{item.balance}</TableCell>
                                <TableCell>
                                    {item.balance === 0 ? (
                                        <Badge
                                            variant="default"
                                            className="bg-green-50 px-5 py-1 text-green-700"
                                        >
                                            COMPLETE
                                        </Badge>
                                    ) : item.testsOnFile === 0 ? (
                                        <Badge
                                            variant="default"
                                            className="bg-red-200 px-2.5 py-1 text-red-600"
                                        >
                                            NOT STARTED
                                        </Badge>
                                    ) : (
                                        <Badge
                                            variant="default"
                                            className="bg-yellow-100 px-6 py-1 text-amber-600"
                                        >
                                            ONGOING
                                        </Badge>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
