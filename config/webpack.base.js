const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const paths = require("./paths");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [`${paths.src}/index.tsx`],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: "assets",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      // favicon: paths.src + '/images/favicon.png',
      template: `${paths.src}/index.html`, // template file
      filename: "index.html", // output file
    }),
    // ESLint configuration
    new ESLintPlugin({
      files: [".", "src", "config"],
      formatter: "table",
    }),
    // Puts variables in .env files into process.env
    new Dotenv(),

    // Prettier configuration
    // new PrettierPlugin(),
  ],
  resolve: {
    alias: {
      Assets: `${paths.src}/shared/assets`,
      Components: `${paths.src}/shared/components`,
      Containers: `${paths.src}/shared/containers`,
      Utils: `${paths.src}/shared/utils`,
      Hooks: `${paths.src}/shared/hooks`,
      Providers: `${paths.src}/shared/providers`,
      Selectors: `${paths.src}/shared/selectors`,
      Store: `${paths.src}/shared/store`,
      Types: `${paths.src}/shared/types`,
    },
    symlinks: false,
    cacheWithContext: false,
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx", ".mjs", ".css"],
  },

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.(js|jsx|tsx|ts|mjs)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(?:ico|png|jpg|gif|jpeg|ttf)$/,
        type: "assets/resource",
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "assets/resource" },

      // Fonts and SVGs: Inline files
      // { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'assets/inline' },
    ],
  },
};
