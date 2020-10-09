import React from "react";
import { SettingsContextProvider, useSettings } from "./SettingsContext";
import { render, fireEvent, act } from "__utils__/render";
import { Locale } from "src/config/locales";
import AsyncStorage from "@react-native-community/async-storage";

const UseSettingsTester: React.FC = () => {
  const { setSettings, resetSettings, locale } = useSettings();
  const handleLocaleChangeClick = () => {
    setSettings({
      locale: "ru" as Locale,
    });
  };

  const handleResetClick = () => {
    resetSettings();
  };

  return (
    <>
      <button onClick={handleLocaleChangeClick}>Change locale!</button>
      <button onClick={handleResetClick}>Reset!</button>
      <span>Locale: {locale}</span>
    </>
  );
};

const TestContainer = () => (
  <SettingsContextProvider>
    <UseSettingsTester />
  </SettingsContextProvider>
);

describe("withSettings", () => {
  it("should change locale", async () => {
    const { getByText } = render(<TestContainer />);
    fireEvent.click(getByText("Change locale!"));
    expect(getByText("Locale: ru")).toBeInTheDocument();
  });

  it("should save settings to localStorage", async () => {
    const { getByText } = render(<TestContainer />);
    fireEvent.click(getByText("Change locale!"));
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      "settings",
      expect.stringContaining('"locale":"ru"')
    );
  });

  it("should read settings from localStorage", async () => {
    (AsyncStorage.getItem as jest.Mock).mockImplementation(
      () => '{"locale": "pt-BR"}'
    );
    const { findByText } = render(<TestContainer />);
    expect(await findByText("Locale: pt-BR")).toBeInTheDocument();
    expect(AsyncStorage.getItem).toHaveBeenCalledWith("settings");
  });
});
