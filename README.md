# Vite-React-Typescript-Compiler

This boilerplate is fully up to date with the latest packages. It has been migrated from Webpack 5 to Vite, leveraging the **React Compiler (React 19+)** for automatic performance optimizations without the need for manual `useMemo` or `useCallback`.

Boilerplate features: React 19, Vite, TypeScript, React Router v6+, Storybook 8+, and CSS Modules.

## Setup

Install the dependencies using your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Storybook Notes

This project uses the latest version of Storybook. If you encounter any environment-specific binary errors or dependency conflicts during startup, run the automated migration and repair tool:

```bash
npx storybook@latest automigrate
```

## Development & Build

### Start Local Development Server

```bash
npm run dev
# or
yarn dev
```

### Build for Production

```bash
npm run build
# or
yarn build
```

### Run Storybook

```bash
npm run storybook
# or
yarn storybook
```

## Explanation & Architecture

### Vite Migration

Webpack 5 and its heavy configuration files have been completely removed. Vite handles module bundling instantly using native ES modules during development and lightning-fast Rollup builds for production.

### React Compiler Integration

This project utilizes the **React Compiler** (Babel/Vite plugin setup). You no longer need to write `useMemo` or `useCallback` hooks to prevent unnecessary re-renders. The compiler analyzes the abstract syntax tree (AST) and automatically injects fine-grained memoization into your components at build time.

_Note: Ensure your code adheres strictly to the **Rules of React** so the compiler can safely optimize your components._
