import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Projects } from "@/lib/types/project";
import { BarChart2, ClipboardCheck, FileText } from "lucide-react";
import downloadQCP from "../export-pdf/qcp-report";

export function ExportPdfButton({ project }: { project: Projects }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="default"
                    className="flex w-[110px] items-center gap-1 px-2 py-1 text-xs text-gray-700 sm:w-[142px] sm:gap-2 sm:text-sm md:text-sm"
                >
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    Export Report
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="min-w-[180px] rounded-md border border-gray-200 bg-white p-1 shadow-lg">
                <DropdownMenuItem
                    onClick={() => downloadQCP(project)}
                    className="flex cursor-pointer items-center rounded-sm px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                >
                    <ClipboardCheck className="mr-2 h-4 w-4 text-orange-500" />
                    Quality Control Program
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => console.log("Exporting Status of Test")}
                    className="flex cursor-pointer items-center rounded-sm px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                >
                    <BarChart2 className="mr-2 h-4 w-4 text-blue-500" />
                    Status of Test
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
