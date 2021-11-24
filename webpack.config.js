// const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// sets up the basic pieces to get up and running
module.exports = {
  entry: {
      // relative paths
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js",
  },
  // taking bundled code and sending to dist/ best practice
  output: {
    filename: "[name].bundle.js",
    // __dirname absolute full path
    path:__dirname + "/dist",
  },
  // add plugins to direct webpack what to do
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder  // can also set to disable to stop
    }),
  ],
  // mode to run the webpack [default in production mode offers minify amplify] // webpack auto minifies code
  // development offers hot reloading and debugging
  mode: "development",
}; // this is a relative path to the clients code
