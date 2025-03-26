import { Minus, Plus } from "lucide-react";

export const TestCounter = ({ value }: { value: number }) => {
    return (
        <div className="flex items-center justify-center gap-2 py-1">
            <button className="rounded-sm bg-red-500 px-0.5 py-0.5 text-white hover:bg-red-600">
                <Minus />
            </button>
            <div className="flex h-8.5 w-11 items-center justify-center rounded-sm border border-gray-200 bg-white">
                {value}
            </div>
            <button className="rounded-sm bg-green-500 px-0.5 py-0.5 text-white hover:bg-green-600">
                <Plus />
            </button>
        </div>
    );
};
