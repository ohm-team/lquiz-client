import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, Card, DefaultTheme, Paragraph } from "react-native-paper";
import { T } from "react-targem";
import { RootStackRoute, RootStackRoutes } from "../types";
import styles from "./RulesPage.styles";
import { SafeAreaView } from "react-native-safe-area-context";

const RulesPage: React.FC<RulesPageProps> = ({
  navigation,
}: RulesPageProps) => {
  const handleLinkButtonClick = (routeName: RootStackRoute) => () => {
    navigation.navigate(routeName);
  };
  return (
    <Card style={styles.container}>
      <SafeAreaView>
        <Button theme={DefaultTheme} onPress={handleLinkButtonClick("Home")}>
          <T message="Home" />
        </Button>
        <Paragraph style={styles.header} accessibilityRole="header">
          Rules
        </Paragraph>
        <Paragraph style={styles.text}>
          <T message="Within one game, the user is assigned 15 questions." />
        </Paragraph>
        <Paragraph>
          <T message="Points are awarded for each correct answer (quiz coins)" />
        </Paragraph>
        <Paragraph>
          <T message="After passing all the questions, the general stratistics of the user is formed." />
        </Paragraph>
      </SafeAreaView>
    </Card>
  );
};

interface RulesPageProps {
  navigation: StackNavigationProp<RootStackRoutes, "Rules">;
}

export default RulesPage;
