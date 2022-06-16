module.exports = {
  mode: "development",
  entry: {
    app: "./dist/tsc/scripts/app.js",
    admin: "./dist/tsc/localStorage/admin.js",
  },
  devtool: "source-map",
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
}
