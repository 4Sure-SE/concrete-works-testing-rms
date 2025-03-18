/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

const prettierConfig = {
    plugins: ["prettier-plugin-tailwindcss"],
    jsxSingleQuote: false,
    arrowParens: "always",
    bracketSpacing: true,
    singleAttributePerLine: true,
    bracketSameLine: false,
    jsxBracketSameLine: false,
    printWidth: 80,
    quoteProps: "as-needed",
    semi: true,
    singleQuote: false,
    tabWidth: 4,
};

export default prettierConfig;
