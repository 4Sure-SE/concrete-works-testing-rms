"use client";
import {
    updateProjectMaterialTestOnFile,
    updateProjectWorkItemTestOnFile,
} from "@/server/actions/projects/update-test-on-file";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type TestType = "material" | "workItem";

export const TestCounter = ({
    id,
    value,
    onUpdate,
    type,
}: {
    id: string | undefined;
    value: number;
    onUpdate: (id: string | undefined, amount: number, type: TestType) => void;
    type: TestType;
}) => {
    const [testsOnFile, setTestsOnFile] = useState(value);
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (amount: number) => {
        setLoading(true);

        let response;
        if (type === "material") {
            response = await updateProjectMaterialTestOnFile(id, amount);
        } else {
            response = await updateProjectWorkItemTestOnFile(id, amount);
        }

        const { data, error } = response;

        if (error) {
            console.log(error);
        } else {
            const updatedTestsOnFile = data?.onFile ?? 0;
            setTestsOnFile(updatedTestsOnFile);

            onUpdate(id, amount, type);
        }

        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center gap-2 py-1">
            <button
                onClick={() => handleUpdate(-1)}
                disabled={loading || testsOnFile <= 0}
                className="rounded-sm bg-red-500 px-0.5 py-0.5 text-white hover:bg-red-600"
            >
                <Minus />
            </button>
            <div className="flex h-8.5 w-11 items-center justify-center rounded-sm border border-gray-200 bg-white">
                {testsOnFile}
            </div>
            <button
                onClick={() => handleUpdate(1)}
                disabled={loading}
                className="rounded-sm bg-green-500 px-0.5 py-0.5 text-white hover:bg-green-600"
            >
                <Plus />
            </button>
        </div>
    );
};
