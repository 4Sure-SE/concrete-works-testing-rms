import { Button } from "@/components/ui/button";
import { fakeMaterialsData } from "./fake-data";
import ProjectDetailsTable from "./prject-details-table";

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

            <ProjectDetailsTable projectDetails={fakeMaterialsData} />
        </div>
    );
}
