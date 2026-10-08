// @ts-check

import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["eslint"],

  rules: {
    // pedantic
    eqeqeq: ["error", "always"],
    "no-array-constructor": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-else-return": "warn",
    "no-fallthrough": [
      "error",
      { commentPattern: "fallthrough", reportUnusedFallthroughComment: true },
    ],
    "no-lonely-if": "error",
    "no-negated-condition": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-useless-return": "error",

    // restriction
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-eq-null": "error",
    "default-case": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-sequences": "error",
    "no-var": "error",
    "no-void": "error",

    // style
    curly: "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "grouped-accessor-pairs": "error",
    "new-cap": "error",
    "no-duplicate-imports": "error",
    "no-extra-label": "error",
    "no-implicit-coercion": "error",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-return-assign": ["error", "except-parens"],
    "no-template-curly-in-string": "error",
    "no-useless-computed-key": "error",
    "object-shorthand": "error",
    "operator-assignment": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    yoda: ["error", "never"],

    // suspicious
    "no-underscore-dangle": "off", // This should be fine
    "no-shadow": "off",
  },
});
