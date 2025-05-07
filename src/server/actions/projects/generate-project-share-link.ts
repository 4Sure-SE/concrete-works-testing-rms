"use server";

import type { ActionState } from "@/lib/types/actions.types";
import { errorHandler } from "@/lib/utils/error-handler";
import { tryCatch } from "@/lib/utils/try-catch";
import { ProjectService } from "@/server/services/project.service";

export async function generateProjectShareLink(
    projectId: string,
): Promise<ActionState<string, string>> {
    const { data: token, error } = await tryCatch(
        ProjectService.generateShareLink(projectId),
    );

    if (error) {
        const handledError = errorHandler(
            error instanceof Error
                ? error
                : new Error("Failed to generate shareable link"),
        );
        return { success: false, error: handledError.message };
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const shareableUrl = `${baseUrl}/share/projects/${token}`;

    return {
        success: true,
        data: shareableUrl,
    };
}
