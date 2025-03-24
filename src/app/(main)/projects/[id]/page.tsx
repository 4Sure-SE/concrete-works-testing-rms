import { Button } from "@/components/ui/button";
import { FileText, Plus, Share2 } from "lucide-react";
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
            <div className="grid w-full grid-cols-2 gap-x-4 p-8">
                <div className="flex w-full flex-col">
                    <h5 className="font-medium text-gray-700">
                        Contract ID: {id}
                    </h5>
                    <h5 className="mt-4 font-medium text-gray-700">
                        Contract Name: Highways Construction
                    </h5>
                    <h5 className="mt-4 font-medium text-gray-700">
                        Contractor Name: ABC Infrastructure Ltd.
                    </h5>
                </div>
                <div className="flex w-full flex-col">
                    <h5 className="font-medium text-gray-700">
                        Limits: 5 km from Main St. to Elm Rd.
                    </h5>
                    <h5 className="mt-4 font-medium text-gray-700">
                        Location: Springfield, IL
                    </h5>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 px-8 sm:justify-start">
                <Button
                    variant="outline"
                    size="default"
                    className="flex w-[110px] items-center gap-1 px-2 py-1 text-xs text-gray-700 sm:w-[142px] sm:gap-2 sm:text-sm md:text-sm"
                >
                    <Share2 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    <span className="xs:inline">Share</span>
                </Button>

                <Button
                    variant="outline"
                    size="default"
                    className="flex w-[110px] items-center gap-1 px-2 py-1 text-xs text-gray-700 sm:w-[142px] sm:gap-2 sm:text-sm md:text-sm"
                >
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    Export Report
                </Button>

                <Button
                    variant="default"
                    size="default"
                    className="flex w-[137px] items-center gap-1 bg-blue-700 px-2 py-1 text-xs text-white hover:bg-blue-800 sm:w-[169px] sm:gap-2 sm:text-sm md:text-sm"
                >
                    <Plus className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    <span className="xs:inline">Add Item of Work</span>
                </Button>
            </div>

            <ProjectDetailsTable projectDetails={fakeMaterialsData} />
        </div>
    );
}
