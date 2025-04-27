import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Projects } from "@/lib/types/project";
import { FileText } from "lucide-react";
import downloadQCP from "./qcp-report";

export default function ExportPdfButton({ project }: { project: Projects }) {
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

            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => downloadQCP(project)}>
                    Quality Control Program
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => console.log("Exporting Status of Test")}
                >
                    Status of Test
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
