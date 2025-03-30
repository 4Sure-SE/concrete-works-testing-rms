export type AuthFormMode =
    | "login"
    | "signup"
    | "reset-request"
    | "reset-password";

export type AuthState = {
    error?: string | null;
    success?: boolean;
    message?: string;
};

export type AuthCardProps = {
    title: string;
    description: string;
    children: React.ReactNode;
    alternateText?: string;
    linkText?: string;
    linkHref?: string;
};
