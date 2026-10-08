// @ts-check

import { defineConfig } from "oxlint";

import eslint from "./plugins/eslint.js";
import importConfig from "./plugins/import.js";
import oxc from "./plugins/oxc.js";
import promise from "./plugins/promise.js";
import typescript from "./plugins/typescript.js";
import unicorn from "./plugins/unicorn.js";

export default defineConfig({
  extends: [eslint, importConfig, oxc, promise, typescript, unicorn],

  categories: {
    suspicious: "error",
  },
});
