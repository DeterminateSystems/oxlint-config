// @ts-check

import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["unicorn"],

  rules: {
    // restriction
    "unicorn/prefer-node-protocol": "error",

    // style
    "unicorn/prefer-structured-clone": "error",

    // suspicious
    "unicorn/no-array-sort": "off",
  },
});
