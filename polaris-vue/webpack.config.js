const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

let libraryName = "polaris-vue";
let libraryNameCamelCase = "PolarisVue";

module.exports = (env, argv) => {
  const isProductionBuild = argv.mode === "production";
  const config = {
    context: path.resolve(__dirname, "src"),
    entry: "./main.js",
    output: {
      path: path.resolve(__dirname, "lib"),
      filename: libraryName + ".js",
      library: libraryNameCamelCase,
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
        {
          test: /\.(c|sa|sc)ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.svg$/,
          loader: "svg-inline-loader",
          options: {
            removingTagAttrs: ["fill', 'fill-rule"]
          }
        }
      ]
    },
    resolve: {
      extensions: ["*", ".ts", ".js", ".vue", ".json"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
        components: path.resolve(__dirname, "./components")
      }
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: libraryName + ".css"
      })
    ],
    devtool: "eval-source-map",
    externals: {
      vue: "vue"
    },
  };

  if (isProductionBuild) {
    config.devtool = false;
    config.optimization = {};
    config.plugins = (config.plugins || []).concat([
      new OptimizeCSSAssetsPlugin({})
    ]);
  }

  return config;
}