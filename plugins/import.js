// @ts-check

import { defineConfig } from "oxlint";

// The gist of how to handle imports well:
// 1. Only use ESM modules - no require() or

export default defineConfig({
  plugins: ["import"],

  rules: {
    // correctness
    "import/no-named-as-default": "off",

    // restriction
    "import/no-amd": "error",
    "import/no-commonjs": "error",
    "import/no-cycle": "error",
    "import/no-dynamic-require": ["error", { esmodule: true }],

    // style
    "import/consistent-type-specifier-style": ["error", "prefer-top-level-if-only-type-imports"],
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",

    // suspicious
    "import/no-unassigned-import": "warn",
  },
});
