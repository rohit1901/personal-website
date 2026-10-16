import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vitest/config";

/**
 * Lets Vitest import `.graphql` files the same way the Next.js GraphQL loader
 * does, by wrapping their contents in `gql` from `graphql-tag`.
 */
const graphqlPlugin: Plugin = {
  name: "graphql-raw",
  enforce: "pre",
  transform(code, id) {
    if (!id.endsWith(".graphql")) {
      return null;
    }
    const escaped = code
      .replace(/\\/g, "\\\\")
      .replace(/`/g, "\\`")
      .replace(/\$\{/g, "\\${");
    return {
      code: `import gql from "graphql-tag";\nexport default gql\`${escaped}\`;`,
      map: null,
    };
  },
};

export default defineConfig({
  plugins: [graphqlPlugin],
  resolve: {
    alias: {
      "@website": fileURLToPath(new URL("./src", import.meta.url)),
      "server-only": fileURLToPath(
        new URL("./test/server-only.stub.ts", import.meta.url),
      ),
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
