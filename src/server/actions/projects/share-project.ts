"use server";

import { errorHandler } from "@/lib/utils/error-handler";
import { createProjectShareLink } from "@/server/data-access/project-share-link/project-share-link";
import { revalidatePath } from "next/cache";

export async function generateProjectShareLink(
    projectId: string,
): Promise<string> {
    try {
        if (!projectId) {
            throw new Error("Project ID is required");
        }

        const { token } = await createProjectShareLink({
            projectId,
        });

        const baseUrl =
            process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
        const shareableUrl = `${baseUrl}/share/projects/${token}`;

        revalidatePath(`/projects/${projectId}`);

        return shareableUrl;
    } catch (error) {
        const handledError = errorHandler(
            error instanceof Error
                ? error
                : new Error("Failed to generate shareable link"),
        );
        throw new Error(handledError.message);
    }
}
