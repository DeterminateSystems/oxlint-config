// @ts-check

import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["promise"],

  rules: {
    // nursery
    "promise/no-return-in-finally": "error",

    // restriction
    "promise/catch-or-return": ["error", { allowFinally: true }],

    // suspicious
    "promise/prefer-await-to-then": "off",
    "promise/prefer-await-to-callbacks": "off",
    "promise/always-return": ["error", { ignoreLastCallback: true }],
  },
});
