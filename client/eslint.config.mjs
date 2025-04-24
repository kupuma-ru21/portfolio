import path from "node:path";
 import {fileURLToPath} from "node:url";
import {fixupConfigRules, fixupPluginRules} from "@eslint/compat";
import {FlatCompat} from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import _import from "eslint-plugin-import";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["!**/.server", "!**/.client", ".gitignore", "build"],
  },
  ...fixupConfigRules(
    compat.extends(
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
    ),
  ),
  {
    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      react: fixupPluginRules(react),
      "react-hooks": fixupPluginRules(reactHooks),
      "jsx-a11y": jsxA11Y,
      import: fixupPluginRules(_import),
    },
    languageOptions: {
      globals: {...globals.browser, ...globals.es2022},
      parser: tsParser,
    },
    settings: {react: {version: "detect"}},
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {fixStyle: "inline-type-imports"},
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "{react,react-dom/**,react-router-dom}",
              group: "builtin",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {order: "asc"},
        },
      ],
      "no-console": ["error", {allow: ["warn", "error"]}],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@remix-run/react",
              importNames: ["Link"],
              message:
                "Use the custom Link component from 'app/components/link.tsx' instead.",
            },
          ],
        },
      ],
      "react/react-in-jsx-scope": "off",
    },
  },
];
