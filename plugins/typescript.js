// @ts-check

import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript"],

  rules: {
    // correctness
    "typescript/consistent-return": "off",

    // pedantic
    "typescript/ban-ts-comment": [
      "error",
      {
        // Allow @ts-expect-error if you say why
        "ts-expect-error": "allow-with-description",
        // Fine for pure JS projects
        "ts-check": false,
        // Don't use this one
        "ts-ignore": true,
      },
    ],

    "typescript/no-unsafe-function-type": "error",
    "typescript/prefer-ts-expect-error": "error",

    // restriction
    "typescript/no-dynamic-delete": "error",
    "typescript/no-explicit-any": ["error", { fixToUnknown: true }],
    "typescript/prefer-literal-enum-member": "error",
    "typescript/explicit-module-boundary-types": "error",
    "typescript/unified-signatures": "error",

    // style
    "typescript/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        arrayLiteralTypeAssertions: "allow-as-parameter",
        objectLiteralTypeAssertions: "allow",
      },
    ],
    "typescript/consistent-type-definitions": ["error", "interface"],
    "typescript/consistent-type-imports": [
      "error",
      { disallowTypeAnnotations: true, fixStyle: "inline-type-imports", prefer: "type-imports" },
    ],
    "typescript/no-inferrable-types": "error",
    "typescript/prefer-for-of": "error",
    "typescript/prefer-function-type": "error",
  },
});
