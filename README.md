# `@determinate-systems/oxlint-config`

Shared configuration rules for [`oxlint`](https://oxc.rs/docs/guide/usage/linter.html) and [`oxfmt`](https://oxc.rs/docs/guide/usage/formatter.html).

## Usage

### Formatting

For using `oxfmt`, import `defineConfig` from `@determinate-systems/oxlint-config/oxfmt`:

```ts
// oxfmt.config.mts

import { defineConfig } from "@determinate-systems/oxlint-config/oxfmt";

export default defineConfig();
```

This function merges any passed-in configuration, so per-project overrides will still work as expected.

### Linting

There are currently two rule sets that can be imported: `default` and `typed`.
The typed rules require `oxlint-tsgolint` and extend the default rules, so any TypeScript-based project can extend the typed rules.

```ts
// oxlint.config.mts

import config from "@determinate-systems/oxlint-config/typed";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [config],
});
```
