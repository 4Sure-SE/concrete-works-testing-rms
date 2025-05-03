import "@/styles/globals.css";
import type { Preview } from "@storybook/react";
// Import the mock here for global application
import { action } from "@storybook/addon-actions"; // Import action
import {} from "@storybook/experimental-nextjs-vite/navigation.mock";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
            nextjs: {
                appDirectory: true,
            },
        },
        nextjs: {
            appDirectory: true,
            navigation: {
                push: action("nextNavigation.push"),
                replace: action("nextNavigation.replace"),
                forward: action("nextNavigation.forward"),
                back: action("nextNavigation.back"),
                prefetch: action("nextNavigation.prefetch"),
                refresh: action("nextNavigation.refresh"),
            },
        },
    },
    tags: ["autodocs"],
};

export default preview;
