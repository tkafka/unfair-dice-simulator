import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Function to generate a random suffix
const generateRandomSuffix = () => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `${timestamp}-${random}`;
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/unfair-dice-simulator/",
  build: {
    rollupOptions: {
      output: {
        // Add random suffix to chunk files (JS)
        chunkFileNames: () => {
          const suffix = generateRandomSuffix();
          return `assets/[name]-${suffix}.js`;
        },
        // Add random suffix to asset files (CSS, images, etc)
        assetFileNames: () => {
          const suffix = generateRandomSuffix();
          return `assets/[name]-${suffix}.[ext]`;
        },
      },
    },
  },
});
