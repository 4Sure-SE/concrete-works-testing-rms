import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";
import path from "path";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/experimental-addon-test",
    ],
    framework: {
        name: "@storybook/experimental-nextjs-vite",
        options: {},
    },
    features: {
        experimentalRSC: true,
    },
    staticDirs: ["../public"],
    async viteFinal(config) {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    ".prisma/client/index-browser": require
                        .resolve("@prisma/client/index-browser")
                        .replace(
                            `@prisma${path.sep}client`,
                            `.prisma${path.sep}client`,
                        ),
                },
            },
        });
    },
};
export default config;
