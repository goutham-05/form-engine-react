// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  clean: true,
  outDir: "dist",
  legacyOutput: false, // Disabled for modern output
  esbuildOptions(options, context) {
    if (context.format === "esm") {
      options.outExtension = { ".js": ".mjs" };
    } else {
      options.outExtension = { ".js": ".js" };
    }
  }
});
