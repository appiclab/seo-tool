const custom = require("../webpack.config.js")(null, "development");

module.exports = {
  "stories": [
    "../polaris-vue/src/components/**/*.stories.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    config.module.rules = [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
        options: {
          removingTagAttrs: ["fill', 'fill-rule"]
        }
      }
    ];

    return config;
  },
}