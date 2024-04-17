import { UserConfig, defineConfig } from "vite";
import type { InlineConfig } from "vitest";
import react from "@vitejs/plugin-react";

interface ViteConfig extends UserConfig {
  test: InlineConfig;
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
  coverage: {
    reporter: ["text", "json", "html"],
  },
} as ViteConfig);
