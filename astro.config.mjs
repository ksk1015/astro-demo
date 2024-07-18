import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import vue from "@astrojs/vue";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify({
    edgeMiddleware: true
  }),
  integrations: [react(), vue(), svelte()]
});