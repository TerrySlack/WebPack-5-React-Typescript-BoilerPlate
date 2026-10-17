import { defineConfig } from "vite";
import react, { Options as ReactOptions } from "@vitejs/plugin-react";
import path from "path";
import fs from "fs"; // 1. IMPORT NODE'S FS PACKAGE

const reactCompilerConfig: ReactOptions = {
  compiler: true,
};

// 2. DYNAMICALLY RESOLVE THE REAL PATH OF YOUR SYMLINK REGARDLESS OF OS WINDOWS/MAC SLASHES
// const timerPackageRealPath = fs.realpathSync(
//   path.resolve(import.meta.dirname, "../../done/mainframework-timer")
// );

const timerPackageRealPath = fs.realpathSync(
  path.resolve(import.meta.dirname, "../done/mainframework-timer")
);

export default defineConfig({
  root: "./src",
  plugins: [
    react(reactCompilerConfig),

    // Custom inline plugin to handle your dynamic script tag injection
    {
      name: "html-script-injector",
      transformIndexHtml(html) {
        return {
          html,
          tags: [
            {
              tag: "script",
              attrs: {
                type: "module",
                src: "/index.tsx",
              },
              injectTo: "body",
            },
          ],
        };
      },
    },
  ],
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },

  worker: {
    format: "es",
    plugins: () => [react(reactCompilerConfig)],
  },

  optimizeDeps: {
    include: ["scheduler"],
  },

  resolve: {
    preserveSymlinks: false,
    dedupe: ["react", "react-dom"],
    alias: {
      Assets: path.resolve(import.meta.dirname, "./src/shared/assets"),
      Components: path.resolve(import.meta.dirname, "./src/shared/components"),
      Containers: path.resolve(import.meta.dirname, "./src/shared/containers"),
      Hooks: path.resolve(import.meta.dirname, "./src/shared/hooks"),
      Providers: path.resolve(import.meta.dirname, "./src/shared/providers"),
      Selectors: path.resolve(import.meta.dirname, "./src/shared/selectors"),
      Store: path.resolve(import.meta.dirname, "./src/shared/store"),
      Utils: path.resolve(import.meta.dirname, "./src/shared/utils"),
    },
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: [
        path.resolve(import.meta.dirname, "./src"),
        path.resolve(import.meta.dirname, "../public"),
        // 3. PASS THE RAW RESOLVED PHYSICAL DISK PATH STRAIGHT TO VITE'S ALLOW LIST
        timerPackageRealPath,
      ],
    },
  },
});
