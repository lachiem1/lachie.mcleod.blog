import { defineConfig } from "astro/config";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://lachiem1.github.io",
  base: isProd ? "/lachie.mcleod.blog/" : "/"
});
