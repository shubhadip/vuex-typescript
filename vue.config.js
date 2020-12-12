// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  chainWebpack: config => {
    if (process.env.VUE_APP_VEHICLE_TYPE === "bike") {
      config.entryPoints.delete("app");
      config.entry("main").add("./src/js/bike/index.ts");
    } else {
      config.entryPoints.delete("app");
      config.entry("main").add("./src/js/car/index.ts");
    }
  },
  configureWebpack: config => {
    config.plugins
      .push
      // new BundleAnalyzerPlugin(),
      ();
  }
};
