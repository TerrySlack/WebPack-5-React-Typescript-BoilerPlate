import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "./src", // Keeps Vite focused on your src directory
  plugins: [
    /* 
      NATIVE RUST COMPILER: Passes 'compiler: true' to invoke oxc-transform-react.
      The object configuration is explicitly type-cast to suppress the local 
      plugin property declaration mismatch error from your IDE.
    */
    react({ 
      compiler: true 
    } as Parameters<typeof react>[0]),
    
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
                src: "/index.tsx", // Points to your React entry file inside src/
              },
              injectTo: "body", // Injects the tag right before </body>
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
  resolve: {
    alias: {
      /* Swapped __dirname with import.meta.dirname to support Vite's modern native ESM loader */
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
  },
});
