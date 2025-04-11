import { type ReactNode } from "react";

type FormRowProps = {
    children: ReactNode;
    className?: string;
};

function FormRow({ children, className = "" }: FormRowProps) {
    return (
        <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${className}`}>
            {children}
        </div>
    );
}

export default FormRow;
