import type { CustomError } from "@/lib/types/custom-error";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { snakeToCamelCase } from "./snake-to-camelcase";
import { snakeToTitleCase } from "./snake-to-titlecase";

const handlePrismaError = (err: PrismaClientKnownRequestError): CustomError => {
    const { code, meta, message: prismaMessage } = err;
    let userMessage = "An unexpected database error occurred.";
    let statusCode = 500; // default error code

    console.error(`Prisma Error ${code}:`, err);

    switch (code) {
        case "P2002": {
            // duplicate value existing in db
            userMessage = `The value provided for ${snakeToTitleCase(String(meta?.target))} is already in use. Please choose a different value.`;
            statusCode = 409;
            break;
        }
        case "P2023": {
            // invalid input type
            userMessage =
                "The format or type of data provided for one or more fields is invalid.";
            statusCode = 400;
            break;
        }
        case "P2025": {
            // not foound
            userMessage =
                "The item you are trying to modify or delete could not be found.";
            statusCode = 404;
            break;
        }

        default:
            console.error(
                `Unhandled Prisma Error Code ${code}: ${prismaMessage}`,
            );
            userMessage = "An unexpected error occurred. Please try again.";
            statusCode = 500;
            break;
    }

    return {
        message: userMessage,
        statusCode: statusCode,
        target: snakeToCamelCase(String(meta?.target)),
    };
};

export function errorHandler(error: Error): CustomError {
    if (error instanceof PrismaClientKnownRequestError) {
        return handlePrismaError(error);
    } else {
        return {
            message: error.message || "An unexpected error occurred.",
            statusCode: 500,
        };
    }
}
