import { findLocale } from "./locales";
import { Locale } from "src/config/locales";

const supportedLocales = ["en-US", "en-AU"] as Locale[];

it("should return en-US for en-US", () => {
  expect(findLocale(supportedLocales, "en-US")).toBe("en-US");
});

it("should return en-AU for en-AU", () => {
  expect(findLocale(supportedLocales, "en-AU")).toBe("en-AU");
});

it("should return en-US for en", () => {
  expect(findLocale(supportedLocales, "en")).toBe("en-US");
});

it("should return en-US for en-GB", () => {
  expect(findLocale(supportedLocales, "en-GB")).toBe("en-US");
});

it("Should return undefined if not found", () => {
  expect(findLocale(supportedLocales, "foo")).toBeUndefined();
});
