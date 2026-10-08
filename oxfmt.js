// @ts-check

/** @type {import("oxfmt").JsdocConfig} */
const defaultJsDoc = {
  addDefaultToDescription: false,
  bracketSpacing: false,
  capitalizeDescriptions: true,
  commentLineStrategy: "singleLine",
  descriptionTag: false,
  descriptionWithDot: true,
  keepUnparsableExampleIndent: false,
  lineWrappingStyle: "balance",
  preferCodeFences: true,
  separateReturnsFromParam: false,
  separateTagGroups: false,
};

/** @type {import("oxfmt").SortImportsConfig} */
const defaultSortImports = {
  ignoreCase: true,
  order: "asc",
  partitionByComment: false,
  partitionByNewline: false,
  sortSideEffects: false,
};

/** @type {import("oxfmt").OxfmtConfig} */
const defaultConfig = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  insertFinalNewline: true,
  jsxSingleQuote: false,
  objectWrap: "preserve",
  printWidth: 100,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  semi: true,
  singleAttributePerLine: false,
  singleQuote: false,
  sortPackageJson: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
};

/**
 * @param {import("oxfmt").OxfmtConfig} [config]
 * @returns {typeof config}
 */
export function defineConfig(config = {}) {
  const { jsdoc, sortImports, ...rest } = config;

  return {
    ...defaultConfig,
    jsdoc:
      typeof jsdoc === "boolean"
        ? jsdoc
        : {
            ...defaultJsDoc,
            ...jsdoc,
          },
    sortImports:
      typeof sortImports === "boolean"
        ? sortImports
        : {
            ...defaultSortImports,
            ...sortImports,
          },
    ...rest,
  };
}
