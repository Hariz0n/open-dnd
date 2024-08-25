import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es6',
    rollupOptions: {
      input: {
        'open-dnd': 'index.html',
        initConfig: 'src/app/initConfig.ts'
      },
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]"
      },
    },
  },
});
