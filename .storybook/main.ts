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
      //Setup Alias from our webpack
    //@ts-ignore
    // config?.resolve?.plugins = [
    //   ...(config?.resolve?.plugins || []),
    //   new TsconfigPathsPlugin({
    //     extensions: config?.resolve.extensions,
    //   }),
    // ];
    config.plugins.push(new MiniCssExtractPlugin());
    
     //Setup Alias
     config.resolve.alias = {
      ...config.resolve.alias,
      ...common.resolve.alias,
    };

    console.log(`
    __dirname  ${__dirname}
    resolved path ${path.resolve(__dirname, "../src/shared")}

    alias ${JSON.stringify(config?.resolve?.alias)}
    
    `);
   
    /*
    config?.resolve?.modules.push(path.resolve(__dirname, "../src/shared"));
    //Setup Alias
    config.resolve.alias = {
      ...config.resolve.alias,
      ...custom.resolve.alias,
    };
      //Setup Alias from our webpack
    //@ts-ignore
    config?.resolve?.plugins = [
      ...(config?.resolve?.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config?.resolve.extensions,
      }),
    ];
      config.plugins.push(new MiniCssExtractPlugin());
    */
    return {
      ...config
      //module: { ...config.module, rules: custom.module.rules },
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