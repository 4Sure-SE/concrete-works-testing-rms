import { FileText } from "lucide-react";

interface EmptyMessageProps {
    title: string;
    description: string;
}

function EmptyMessage({ title, description }: EmptyMessageProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
            <FileText className="mb-2 h-10 w-10 text-muted-foreground" />
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}

export default EmptyMessage;
