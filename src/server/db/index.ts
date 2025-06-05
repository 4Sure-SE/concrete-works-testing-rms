import { PrismaClient } from "@prisma/client";

const createPrismaClient = () => {
    if (typeof window !== "undefined") {
        throw new Error("PrismaClient should only be used on server side");
    }

    // Use process.env directly for NODE_ENV
    return new PrismaClient({
        log:
            process.env.NODE_ENV === "development"
                ? ["query", "error", "warn"]
                : ["error"],
    });
};

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (typeof window === "undefined" && process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = db;
}
