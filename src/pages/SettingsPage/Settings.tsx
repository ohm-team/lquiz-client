import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { T } from "react-targem";
import ThemeToggler from "../../components/ThemeToggler";
import { RootStackRoute, RootStackRoutes } from "../types";
import styles from "./Settings.styles";

const LeftContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
  <Avatar.Text {...props} label="S" />
);

interface CardTitleAddon {
  size: number;
}

const Settings: React.FC<SettingsProps> = ({ navigation }: SettingsProps) => {

  const handleLinkButtonClick = (routeName: RootStackRoute) => () => {
    navigation.navigate(routeName);
  };

  const RightAddon = () => (
    <Button mode="outlined" onPress={handleLinkButtonClick("Home")}>
      <T message="Home" />
    </Button>
  );

  return (
    <Card style={styles.container}>
      <SafeAreaView>
        <Card.Title
          title={<T message="Settings" />}
          left={LeftContent}
          right={RightAddon}
        />
        <Card.Content style={styles.content}>
         <ThemeToggler/>
        </Card.Content>
      </SafeAreaView>
    </Card>
  );
};
interface SettingsProps {
  navigation: StackNavigationProp<RootStackRoutes, "Settings">;
}

export default Settings;
