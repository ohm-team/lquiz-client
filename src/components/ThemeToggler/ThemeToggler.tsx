import React from "react";
import { View } from "react-native";
import { Paragraph, Switch } from "react-native-paper";
import { T, useLocale } from "react-targem";
import { useSettings } from "src/contexts/SettingsContext";
import styles from "./ThemeToggler.styles";

const ThemeToggler: React.FC<ThemeTogglerProps> = ({
  withText = true,
}: ThemeTogglerProps) => {
  const { theme, setSettings } = useSettings();
  const handleThemeChange = (isDark: boolean) => {
    setSettings({ theme: isDark ? "dark" : "default" });
  };

  const { t } = useLocale();

  return (
    <View style={styles.switchContainer}>
      {withText && (
        <Paragraph style={styles.text}>
          <T message="Dark theme?" />
        </Paragraph>
      )}
      <Switch
        trackColor="#001100"
        accessibilityRole="switch"
        accessibilityLabel={t("Toggle dark theme")}
        value={theme === "dark"}
        onValueChange={handleThemeChange}
      />
    </View>
  );
};

interface ThemeTogglerProps {
  withText?: boolean;
}

export default ThemeToggler;
