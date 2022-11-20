import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";

const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: {
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
      find: 'hello', replacement: path.resolve(__dirname,'/src/components/')
      // entries: [
      //   // { find: 'springlib', replacement: '../../index' },
      // ]
    },
  },
});
