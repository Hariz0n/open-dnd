import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const taskName = env.TASK_NAME;
  const openeduUrl = env.OPENEDU_URL;
  console.log(taskName, openeduUrl)

  return {
    plugins: [
      react(),
      {
        name: "transformToOpenEdu",
        transformIndexHtml: {
          order: "post",
          handler: async (htmlString) => {
            if (!taskName || !openeduUrl) {
              throw new Error('Bad env config')
            }

            let result = htmlString;
            result = result.replace('/open-dnd.js', openeduUrl + 'open-dnd.js')
            result = result.replace('/open-dnd.css', openeduUrl + 'open-dnd.css')
            result = result.replace('/src/app/initConfig.ts', openeduUrl + taskName + '.js')
            return result
          },
        },
      },
      {
        name: 'rename index.html',
        enforce: 'post',
        generateBundle: (_options, bundle) => {
          bundle['initConfig.js'].fileName = taskName + '.js'
          bundle['index.html'].fileName = taskName + '.html'
        }
      }
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      target: "es6",
      rollupOptions: {
        input: {
          "open-dnd": "index.html",
          initConfig: "src/app/initConfig.ts",
        },
        output: {
          entryFileNames: "[name].js",
          assetFileNames: "[name][extname]",
        },
      },
    },
  };
});
