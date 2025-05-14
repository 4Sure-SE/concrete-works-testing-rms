"use client";

import ButtonWithLoader from "@/components/custom/button-with-loader";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface FinishSetupButtonProps {
    projectId: string;
}

export function FinishSetupButton({ projectId }: FinishSetupButtonProps) {
    const router = useRouter();
    const [isNavigating, startNavigation] = useTransition();

    const handleFinish = () => {
        startNavigation(() => {
            router.push(`/projects/${projectId}`);
        });
    };

    return (
        <ButtonWithLoader
            className="cursor-pointer"
            onClick={handleFinish}
            disabled={isNavigating}
            isPending={isNavigating}
            text={"Done"}
            loadingText="Proceeding..."
            icon={<CheckCircle className="mr-2 h-4 w-4" />}
        ></ButtonWithLoader>
    );
}
