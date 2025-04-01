import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function ExportPdfButton() {
    return (
        <Button
            variant="outline"
            size="default"
            className="flex w-[110px] items-center gap-1 px-2 py-1 text-xs text-gray-700 sm:w-[142px] sm:gap-2 sm:text-sm md:text-sm"
        >
            <FileText className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            Export Report
        </Button>
    );
}
