import { StatusBar } from "expo-status-bar";
import React from "react";
import { TargemProvider } from "react-targem";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import translations from "src/i18n/translations.json";
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
} from "react-native-paper";
import {
  SettingsContextProvider,
  useSettings,
} from "src/contexts/SettingsContext";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AppLayoutInternal: React.FC<AppLayoutInternalProps> = ({
  children,
}: AppLayoutInternalProps) => {
  const { locale, theme } = useSettings();

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme === "dark" ? DarkTheme : DefaultTheme}>
        <NavigationContainer>
          <TargemProvider locale={locale} translations={translations}>
            {children}
            <StatusBar style="auto" />
          </TargemProvider>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};
interface AppLayoutInternalProps extends React.PropsWithChildren<{}> {}

const AppLayout: React.FC<AppLayoutProps> = ({ children }: AppLayoutProps) => (
  <SettingsContextProvider>
    <AppLayoutInternal>{children}</AppLayoutInternal>
  </SettingsContextProvider>
);

interface AppLayoutProps extends React.PropsWithChildren<{}> {}

export default AppLayout;
