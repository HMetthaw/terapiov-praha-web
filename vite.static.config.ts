import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/terapiov-praha-web/",
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
    rollupOptions: {
      input: "index.static.html",
    },
  },
});
