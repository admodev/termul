import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const projectRoot = process.cwd();

export default defineConfig({
  root: path.resolve(projectRoot, "src/renderer"),
  base: "./",
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: path.resolve(projectRoot, "dist/renderer"),
    emptyOutDir: true,
  },
});
