export const locales = [
  {
    key: "en-GB",
    internationalName: "English (GB)",
    localName: "English (GB)",
  },
  {
    key: "en-US",
    internationalName: "English (US)",
    localName: "English (US)",
  },
  {
    key: "ru",
    internationalName: "Russian",
    localName: "Русский",
  },
  {
    key: "fr",
    internationalName: "French",
    localName: "Française",
  },
] as const;

export type Locale = typeof locales[number]["key"];
