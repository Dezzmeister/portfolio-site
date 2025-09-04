/// <reference types="node" />
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), svgr()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        attributions: resolve(__dirname, "attributions.html")
      }
    }
  }
})
