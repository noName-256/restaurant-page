const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/scripts/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Home",
      filename: "index.html",
      template: "src/templates/index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      title: "About us",
      filename: "about-us.html",
      template: "src/templates/about-us.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      title: "Menus",
      filename: "menus.html",
      template: "src/templates/menus.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      title: "Gallery",
      filename: "gallery.html",
      template: "src/templates/gallery.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      title: "Contact page",
      filename: "contact.html",
      template: "src/templates/contact.html",
      chunks: ["main"],
    }),
  ],
};
