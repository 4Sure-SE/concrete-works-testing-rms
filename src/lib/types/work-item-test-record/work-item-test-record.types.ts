export interface WorkItemTestRecord {
    id: string;
    projectWorkItemTestId: string;
    recordIdentifier: string;
    fileName: string;
    fileSize: number;
    fileType?: string | null;
    fileUrl: string;
    uploadedAt: string;
}

export interface CreateWorkItemTestRecordDTO {
    projectWorkItemTestId: string;
    recordIdentifier: string;
    fileName: string;
    fileSize: number;
    fileType?: string | null;
    fileUrl: string;
}
