// postcss.config.js
const postcssJitProps = require("postcss-jit-props");
const OpenProps = require("open-props");

module.exports = {
  plugins: [
    require("postcss-preset-env"),
    require("autoprefixer"),
    postcssJitProps(OpenProps),
  ],
};
