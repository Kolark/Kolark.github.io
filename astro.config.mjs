// @ts-check
import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [glsl()],
    },
    markdown: {
        rehypePlugins: [
            [
                rehypeExternalLinks,
                { target: "_blank", rel: ["noopener", "noreferrer"] },
            ],
        ],
    },
});
