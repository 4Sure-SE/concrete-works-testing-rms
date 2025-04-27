export function snakeToTitleCase(str: string): string {
    let title = str.replace(/[-_]/g, " ");

    title = title.replace(/\s+/g, " ").trim();

    title = title.replace(/\b\w/g, (char) => char.toUpperCase());

    return title;
}
