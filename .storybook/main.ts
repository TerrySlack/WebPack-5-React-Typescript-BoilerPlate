/*eslint-disable */

import type { StorybookConfig } from "@storybook/react-webpack5";

const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("../config/webpack.base");

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials", 
    "@storybook/addon-interactions", 
    "storybook-dark-mode"
  ],
  framework: {
    name: "@storybook/react-webpack5", 
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  core: {
    disableTelemetry: true
  },
 
  webpackFinal: async (config: any,{ configType }) => {

    config?.resolve?.modules.push(path.resolve("../src/shared"));
    config.plugins.push(new MiniCssExtractPlugin());
    
     //Setup Alias
     config.resolve.alias = {
      ...config.resolve.alias,
      ...common.resolve.alias,
    };
   
    return {
      ...config
    };
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  }
};

export default config;