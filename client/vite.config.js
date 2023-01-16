import { defineConfig, loadEnv } from "vite";

import macrosPlugin from "vite-plugin-babel-macros";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), macrosPlugin()],
    root: "./",
    build: {
      target: "es2020",
      outDir: "dist",
    },
    publicDir: "src",
    server: {
      fs: {
        allow: [".."],
      },
    },
    define: {
      "process.env": env,
    },
  };
});
