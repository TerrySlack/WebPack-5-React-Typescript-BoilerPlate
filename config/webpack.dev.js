const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.base");
const paths = require("./paths");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: "development",

  // Control how source maps are generated
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true, // Enable SPA routing
    static: {
      //directory: path.resolve(__dirname, "public"), // Serve static files from 'public' (optional)
      directory: paths.public,
    },
    open: true, // Automatically open the browser
    compress: true, // Enable gzip compression
    port: 3000, // Use port 3000
    devMiddleware: {
      writeToDisk: false, // Ensure files are NOT written to disk
    },
  },
  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
              // modules: true,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
        ],
        include: /\.module\.css$/i,
      },
      {
        test: /\.(scss|css)$/i,
        use: [
          "style-loader",
          // 'css-loader',
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
        ],
        exclude: /\.module\.css$/i,
      },
    ],
  },

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});
