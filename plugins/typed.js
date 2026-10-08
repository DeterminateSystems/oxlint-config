// @ts-check

import { defineConfig } from "oxlint";

// Typed configuration rules only; this

export default defineConfig({
  plugins: ["typescript"],
  options: {
    typeAware: true,
  },

  rules: {
    // correctness
    "typescript/no-unsafe-type-assertion": "warn",

    // pedantic
    "typescript/no-misused-promises": "error",
    "typescript/no-unsafe-argument": "warn",
    "typescript/no-unsafe-assignment": "error",
    "typescript/no-unsafe-member-access": "error",
    "typescript/no-unsafe-return": "error",
    "typescript/prefer-includes": "error",
    "typescript/return-await": ["error", "in-try-catch"],

    // restriction
    "typescript/non-nullable-type-assertion-style": "error",
    "typescript/promise-function-async": "warn",
    "typescript/use-unknown-in-catch-callback-variable": "error",

    // style
    "typescript/consistent-type-exports": "error",
    "typescript/dot-notation": "error",
    "typescript/prefer-return-this-type": "error",
    "typescript/prefer-string-starts-ends-with": "error",

    // suspicious
  },
});
