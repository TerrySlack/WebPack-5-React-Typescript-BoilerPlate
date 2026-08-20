import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintReact from "@eslint-react/eslint-plugin"; // Modern native ESLint 10 React engine
import hooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import storybookPlugin from "eslint-plugin-storybook";
import globals from "globals";

export default tseslint.config(
  // 1. Global Ignores (Replaces .eslintignore natively)
  {
    ignores: [
      "**/dist/**", 
      "**/build/**", 
      "**/node_modules/**", 
      "src/tailwind.css"
    ],
  },

  // 2. Base Parsers & Core Rulesets
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. Application Main Source Configuration Pass
  {
    files: ["src/**/*.{js,jsx,ts,tsx,mjs}"],
    plugins: {
      /* 
        The official prefix namespace registration required by the 
        recommended presets inside the new eslint-react plugin engine.
      */
      "@eslint-react": eslintReact,
      "react-hooks": hooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "import": importPlugin,
      "prettier": prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      // Correctly executes the recommended rules of the new engine under their true prefix namespaces
      ...eslintReact.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,
      
      "no-unused-vars": "off", 
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "import/prefer-default-export": "off",
      "prettier/prettier": "error",
    },
  },

  // 4. Dedicated Configuration Block targeting your Storybook files exclusively
  {
    files: ["**/*.stories.{ts,tsx}", "stories/**/*", ".storybook/**/*"],
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules,
      "import/no-extraneous-dependencies": "off",
    },
  },

  // 5. Prettier Formatting rule suppression block (MUST remain last)
  prettierConfig
);
