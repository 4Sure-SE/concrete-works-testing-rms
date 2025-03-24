import { Button } from "@/components/ui/button";
import { FileText, Plus, Share2 } from "lucide-react";

export default function ProjectDetailsActionButtons() {
    return (
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
    );
}
