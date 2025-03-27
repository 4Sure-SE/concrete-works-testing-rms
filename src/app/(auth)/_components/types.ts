export type AuthFormMode = "login" | "signup";

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
