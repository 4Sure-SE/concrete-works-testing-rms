"use client";

import { SuccessMessage } from "..";

interface ResetPasswordSuccessProps {
    message?: string;
}

export function ResetPasswordSuccess({ message }: ResetPasswordSuccessProps) {
    return (
        <SuccessMessage
            title="Password Reset Successful"
            message={message ?? "Your password has been reset successfully."}
            linkText="Log In"
            linkHref="/log-in"
        />
    );
}
