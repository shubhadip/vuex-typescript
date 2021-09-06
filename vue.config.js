const ManifestPlugin = require("webpack-manifest-plugin");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const path = require("path");

const addStyleResource = (rule) => {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      // keep single directory here
      patterns: path.resolve(__dirname, './src/assets/styles/_app-partials.css'),
    });
};


exports.chainWebpack = webpackConfig => {
  if (!process.env.VUE_APP_SSR) {
    webpackConfig.resolve.alias.set(
      "vue3-component-library/components",
      path.resolve(__dirname, "node_modules/vue3-component-library/dist/esm")
    );
  } else {
    webpackConfig.resolve.alias.set(
      "vue3-component-library/components",
      path.resolve(__dirname, "node_modules/vue3-component-library/dist/cjs")
    );
  }
  if (!process.env.VUE_APP_SSR) {
    // This is required for repl.it to play nicely with the Dev Server
    webpackConfig.devServer.disableHostCheck(true);
    webpackConfig
      .entry("app")
      .clear()
      .add("./src/entry-client.ts");
      
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResource(webpackConfig.module.rule('postcss').oneOf(type)));

    return;
  }

  webpackConfig
    .entry("app")
    .clear()
    .add("./src/entry-server.ts");

  webpackConfig.target("node");
  webpackConfig.output.libraryTarget("commonjs2");

  webpackConfig
    .plugin("manifest")
    .use(new ManifestPlugin({ fileName: "ssr-manifest.json" }));

  webpackConfig.externals(
    nodeExternals({
      allowlist: [/\.(css|vue)$/, "vue3-component-library/components/testworld"]
    })
  );

  webpackConfig.optimization.splitChunks(false).minimize(false);

  webpackConfig.plugins.delete("hmr");
  webpackConfig.plugins.delete("preload");
  webpackConfig.plugins.delete("prefetch");
  webpackConfig.plugins.delete("progress");
  webpackConfig.plugins.delete("friendly-errors");
  webpackConfig.plugin("limit").use(
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  );
};
