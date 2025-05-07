import path from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";
import { storybookNextJsPlugin } from "@storybook/experimental-nextjs-vite/vite-plugin";
import { defineConfig } from "vitest/config";

const dirname =
    typeof __dirname !== "undefined"
        ? __dirname
        : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        globals: true,
        workspace: [
            {
                extends: true,
                plugins: [storybookTest(), storybookNextJsPlugin()],
                test: {
                    name: "storybook",
                    browser: {
                        enabled: true,
                        headless: true,
                        name: "chromium",
                        provider: "playwright",
                    },
                    setupFiles: [".storybook/vitest.setup.ts"],
                },
                optimizeDeps: {
                    exclude: ["node_modules/.cache/storybook"],
                    include: [
                        "@storybook/test",
                        "lucide-react",
                        "react",
                        "react-dom",
                        "react-dom/client",
                        "next/form",
                        "next/link",
                        "next/navigation",
                        "use-debounce",
                        "@radix-ui/react-label",
                        "class-variance-authority",
                        "@radix-ui/react-slot",
                        "zod",
                        "react-hook-form",
                        "@hookform/resolvers/zod",
                        "clsx",
                        "tailwind-merge",
                        "next/headers",
                        "@supabase/ssr",
                        "@radix-ui/react-dropdown-menu",
                        "@ag-media/react-pdf-table",
                        "@react-pdf/renderer",
                        "@storybook/addon-actions",
                        "@radix-ui/react-dialog",
                        "@radix-ui/react-separator",
                        "@radix-ui/react-tooltip",
                        "sonner",
                        "@t3-oss/env-nextjs",
                    ],
                },
            },
            {
                plugins: [react()],
                test: {
                    name: "unit",
                    environment: "jsdom",
                },
            },
        ],
    },
});
