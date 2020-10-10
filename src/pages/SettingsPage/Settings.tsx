import React from "react";
import { Card, Switch, Paragraph, Button, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { T, useLocale } from "react-targem";
import { useSettings } from "src/contexts/SettingsContext";
import styles from "./Settings.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackRoutes, RootStackRoute } from "../types";
import { View } from "react-native";

const LeftContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
  <Avatar.Text {...props} label="R" />
);

interface CardTitleAddon {
  size: number;
}

const Settings: React.FC<SettingsProps> = ({ navigation }: SettingsProps) => {
  const { theme, setSettings } = useSettings();
  const handleThemeChange = (isDark: boolean) => {
    setSettings({ theme: isDark ? "dark" : "default" });
  };

  const handleLinkButtonClick = (routeName: RootStackRoute) => () => {
    navigation.navigate(routeName);
  };

  const RightAddon = () => (
    <Button mode="outlined" onPress={handleLinkButtonClick("Home")}>
      <T message="Home" />
    </Button>
  );

  const { t } = useLocale();

  return (
    <Card style={styles.container}>
      <SafeAreaView>
        <Card.Title
          title={<T message="Rules" />}
          left={LeftContent}
          right={RightAddon}
        />
        <Card.Content style={styles.content}>
          <View style={styles.switchContainer}>
            <Paragraph>Is dark theme?</Paragraph>
            <Switch
              accessibilityRole="switch"
              accessibilityLabel={t("Toggle dark theme")}
              value={theme === "dark"}
              onValueChange={handleThemeChange}
            />
          </View>
        </Card.Content>
      </SafeAreaView>
    </Card>
  );
};
interface SettingsProps {
  navigation: StackNavigationProp<RootStackRoutes, "Settings">;
}

export default Settings;
