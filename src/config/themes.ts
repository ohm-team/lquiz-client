import { Appearance } from "react-native";

export const themes = ["default", "dark"] as const;

export const defaultThemeName: ThemeName =
  Appearance.getColorScheme() === "dark" ? "dark" : "default";

export type ThemeName = typeof themes[number];
