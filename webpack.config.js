const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProductionBuild = argv.mode === "production";
  const publicPath = isProductionBuild ? "/" : "";
  const config = {
    context: path.resolve(__dirname, "src"),
    entry: ["@babel/polyfill", "./main.js"],
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "[name].[hash:8].js",
      publicPath
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
          options: {
            attributes: false,
          },
        },
        {
          test: /\.ejs$/,
          use: [
            {
              loader: "ejs-webpack-loader",
              options: {
                data: {
                  shop: isProductionBuild ? {
                    app_name: "<%- shop.app_name %>",
                    primary_locale: "<%- shop.primary_locale %>", 
                    domain: "<%- shop.domain %>",
                    access_token: "<%- shop.access_token %>"
                  } : {
                    app_name: "SEO Tool",
                    primary_locale: "en", 
                    domain: "vm-store-dev.myshopify.com",
                    access_token: "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"
                  },
                }
              }
            }
          ]
        },
        {
          test: /\.(c|sa|sc)ss$/i,
          use: [
            isProductionBuild ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader"
          ]
        },
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
          test: /\.vue$/,
          use: "vue-loader"
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: "file-loader",
          options: {
            name: "[name].[hash:8].[ext]",
            outputPath: "images",
          },
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
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: "index.ejs",
        filename: "index.html"
      }),
      new CopyWebpackPlugin({
        patterns: [
          { 
            from: path.resolve(__dirname, "src", "assets", "preloader.css"), 
            to: "" 
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "polaris-vue": path.resolve(__dirname, "./polaris-vue/lib"),
      },
      extensions: ["*", ".js", ".vue", ".json"],
    },
    devtool: "eval-source-map",
    devServer: {
      stats: "errors-only"
    }
  }

  if (isProductionBuild) {
    config.devtool = false;
    config.plugins = (config.plugins || []).concat([
      new MiniCssExtractPlugin({
        filename: "[name].[hash:8].css"
      })
    ]);

    config.optimization = {};
  }

  return config;
}