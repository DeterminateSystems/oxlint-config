// @ts-check

import { defineConfig } from "oxlint";

import defaultConfig from "./default.js";
import typed from "./plugins/typed.js";

export default defineConfig({
  extends: [defaultConfig, typed],
});
