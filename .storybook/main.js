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
    return config;
  },
};
