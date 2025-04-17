import { Badge } from "@/components/ui/badge";

export const TestStatus = ({
    testsOnFile,
    balance,
}: {
    testsOnFile: number;
    balance: number;
}) => {
    return (
        <div className="">
            {balance === 0 ? (
                <Badge
                    variant="default"
                    className="bg-green-50 px-5 py-1 text-green-700"
                >
                    COMPLETE
                </Badge>
            ) : testsOnFile === 0 ? (
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
        </div>
    );
};
