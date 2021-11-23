
const path = require("path");
const  webpack  = require("webpack");


// sets up the basic pieces to get up and running
module.exports = {
  entry: "./assets/js/script.js",
  // taking bundled code and sending to dist/ best practice
  output: {
    // resolve gets two arguments
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  // add plugins to direct webpack what to do
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  // mode to run the webpack [default in production mode offers minify amplify] // webpack auto minifies code
  // development offers hot reloading and debugging
  mode: "development",
}; // this is a relative path to the clients code
