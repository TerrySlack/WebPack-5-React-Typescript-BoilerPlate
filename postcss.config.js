const postCssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    postCssPresetEnv({
      browsers: "last 1 versions",
    }),
    "postcss-easings",
  ],
  autoprefixer,
};
