import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@public": "/public/",
      "@data": "/src/data",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@images": "/public/images",
      "@styles": "/src/styles",
    },
  },
});
