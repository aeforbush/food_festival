
const path = require("path");
const  webpack  = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


// sets up the basic pieces to get up and running
module.exports = {
  entry: "./assets/js/script.js",
  // taking bundled code and sending to dist/ best practice
  output: {
    // resolve gets two arguments
    path: path.join(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  // add plugins to direct webpack what to do
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: "static", // the report outputs to an HTML file in the dist folder  // can also set to disable to stop
    })
  ],
  // mode to run the webpack [default in production mode offers minify amplify] // webpack auto minifies code
  // development offers hot reloading and debugging
  mode: "development",
}; // this is a relative path to the clients code
