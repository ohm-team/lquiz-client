import React, { useContext } from "react";
import { defaultThemeName, ThemeName } from "src/config/themes";
import { Locale, locales } from "src/config/locales";
import { getBrowserLocale } from "src/utils/locales";
import AsyncStorage from "@react-native-community/async-storage";

const LOCAL_STORAGE_KEY = "settings";

interface SettingsContextProviderState {
  locale: Locale;
  theme: ThemeName;
}

export interface SettingsContext extends SettingsContextProviderState {
  setSettings: (state: Partial<SettingsContextProviderState>) => void;
  resetSettings: () => void;
}

const getInitialValues = (): SettingsContextProviderState => ({
  theme: defaultThemeName,
  locale: getBrowserLocale(
    locales.map((l) => l.key),
    locales[0].key
  ),
});

const SettingsContext = React.createContext<SettingsContext>({
  ...getInitialValues(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSettings: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  resetSettings: () => {},
});

export class SettingsContextProvider extends React.PureComponent<
  Partial<SettingsContextProviderState>,
  SettingsContextProviderState
> {
  constructor(props: Partial<SettingsContext>) {
    super(props);
    this.state = {
      ...getInitialValues(),
    };

    void this.updateSettingsWithPersistedValue();
  }

  public render(): React.ReactNode {
    const { state, props } = this;

    const providerValue = {
      ...state,
      ...props,
      setSettings: this.setSettings,
      resetSettings: this.resetSettings,
    };

    return (
      <SettingsContext.Provider value={providerValue}>
        {props.children}
      </SettingsContext.Provider>
    );
  }

  private setSettings = (settings: Partial<SettingsContextProviderState>) => {
    this.setState((state: SettingsContextProviderState) => {
      const newSettings = {
        ...state,
        ...settings,
      };
      void AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSettings));
      return newSettings;
    });
  };

  private updateSettingsWithPersistedValue = async (): Promise<void> => {
    const json = await this.getSettingsFromLocalStorage();
    this.setState((state) => ({
      ...state,
      ...json,
    }));
  };

  private getSettingsFromLocalStorage = async (): Promise<
    Partial<SettingsContextProviderState>
  > => {
    const json = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);

    if (!json) {
      return {};
    }

    return JSON.parse(json);
  };

  private resetSettings = () => {
    this.setState(getInitialValues());
  };
}

export const useSettings = (): SettingsContext => useContext(SettingsContext);
