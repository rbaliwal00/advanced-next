const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  typescript: { ignoreBuildErrors: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    config.experiments.topLevelAwait = true;
    return config;
  },
});