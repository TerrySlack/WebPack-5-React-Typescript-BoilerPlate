import type { Config } from "jest";

const config: Config = {
  // Configures Jest to use jsdom for mounting and testing React components
  testEnvironment: "jest-environment-jsdom",

  // Compiles TypeScript files natively via ts-jest
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  // Tells Jest where your setup files live (updated to point to your stories folder if needed)
  setupFilesAfterEnv: ["<rootDir>/stories/setupTests.js"],

  // Scans the main project directory tree
  roots: ["<rootDir>"],

  // Updated absolute path aliases to exactly match your active project structure
  moduleNameMapper: {
    "^Assets/(.*)$": "<rootDir>/src/shared/assets/$1",
    "^Components/(.*)$": "<rootDir>/src/shared/components/$1",
    "^Containers/(.*)$": "<rootDir>/src/shared/containers/$1",
    "^Hooks/(.*)$": "<rootDir>/src/shared/hooks/$1",
    "^Providers/(.*)$": "<rootDir>/src/shared/providers/$1",
    "^Selectors/(.*)$": "<rootDir>/src/shared/selectors/$1",
    "^Store/(.*)$": "<rootDir>/src/shared/store/$1",
    "^Utils/(.*)$": "<rootDir>/src/shared/utils/$1",
    "^Types/(.*)$": "<rootDir>/src/shared/types/$1",
  },

  // In ESM setups, forces Jest to process specific package distributions
  transformIgnorePatterns: [
    "/node_modules/(?!(@mainframework/dropzone|react-aria-components)/)",
  ],

  // Matches any standard test file or folder inside your test tree
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",

  // Tells Jest to look inside .ts, .tsx, .js, and .json files
  moduleFileExtensions: ["ts", "tsx", "js", "json"],

  // Stripped out the Next.js directory and added your production distribution output folder
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/lib/"],

  // Retained your baseline test coverage safety threshold boundaries
  coverageDirectory: "dist/test-results",
  coverageThreshold: {
    global: {
      branches: 4,
      functions: 4,
      lines: 4,
      statements: 4,
    },
  },
};

export default config;
