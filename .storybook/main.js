const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/preset-create-react-app",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],
  // https://storybook.js.org/docs/react/configure/webpack
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias["react-native$"] = "react-native-web";
    config.module.rules.push({
      test: /\.jsx?$/,
      include: [
        /node_modules\/expo-linear-gradient/,
        /node_modules\/react-native-web/,
      ],
      use: [
        {
          loader: "babel-loader",
        },
      ],
    });
    config.module.rules = config.module.rules.filter((rule) => {
      if (!rule.use) return true;
      return !rule.use.find(
        (useItem) =>
          typeof useItem.loader === "string" &&
          useItem.loader.includes("eslint-loader")
      );
    });
    return config;
  },
};
