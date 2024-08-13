import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tailwind from "eslint-plugin-tailwindcss";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginUnicorn.configs["flat/recommended"],
    ...tailwind.configs["flat/recommended"],
    eslintConfigPrettier,
  ],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist", "src/vite-env.d.ts"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    "unused-imports": unusedImports,
  },

  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    "unused-imports/no-unused-imports": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: false,
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-console": "error",
    "arrow-body-style": ["error", "as-needed"],
    eqeqeq: ["error", "always"],
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-self-compare": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: true,
        classes: true,
        variables: true,
        allowNamedExports: true,
      },
    ],
    "no-else-return": "error",
    "no-lonely-if": "error",
    "no-negated-condition": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "operator-assignment": ["error", "always"],
    "prefer-arrow-callback": "error",
    "unicorn/no-array-reduce": "off",
  },
});
