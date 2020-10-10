import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "@storybook/addon-console";
import TargemProvider from "react-targem";
import translations from "src/i18n/translations.json";
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const IS_DARK_THEME = true;

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/controls#show-full-documentation-for-each-property
  controls: { expanded: true },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en-GB",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "en-US", right: "🇺🇸", title: "English (US)" },
        { value: "en-GB", right: "🇬🇧", title: "English (GB)" },
        { value: "ru", right: "🇷🇺", title: "Русский" },
      ],
    },
  },
};

export const decorators = [
  (Story, { globals }) => (
    <SafeAreaProvider>
      <PaperProvider theme={IS_DARK_THEME ? DarkTheme : DefaultTheme}>
        <TargemProvider locale={globals.locale} translations={translations}>
          <Story />
        </TargemProvider>
      </PaperProvider>
    </SafeAreaProvider>
  ),
];
