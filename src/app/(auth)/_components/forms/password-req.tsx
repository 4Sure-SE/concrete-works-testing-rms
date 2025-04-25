interface PasswordRequirementsProps {
    password: string;
}

export default function PasswordRequirements({
    password,
}: PasswordRequirementsProps) {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);

    return (
        <div className="mt-2 space-y-1 text-xs">
            <p className={hasMinLength ? "text-green-600" : "text-gray-500"}>
                • At least 8 characters
            </p>
            <p className={hasUpperCase ? "text-green-600" : "text-gray-500"}>
                • At least one uppercase letter
            </p>
        </div>
    );
}
