export function toCamelCase(str: string) {
    str = str.replace(/[-_\s]+(.)?/g, (_match: unknown, ch: string) =>
        ch ? ch.toUpperCase() : "",
    );

    return str.substring(0, 1).toLowerCase() + str.substring(1);
}
