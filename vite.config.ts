import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  nitro: {
    vercel: {
      functions: {
        runtime: "nodejs22.x",
      },
    },
  },
  plugins: [tanstackStart(), nitro(), viteReact(), tailwindcss(), tsConfigPaths()],
});
