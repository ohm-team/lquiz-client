import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  Button,
  Card,
  DefaultTheme,
  Paragraph,
  Avatar,
} from "react-native-paper";
import { T } from "react-targem";
import { RootStackRoute, RootStackRoutes } from "../types";
import styles from "./RulesPage.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const LeftContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
  <Avatar.Text {...props} label="R" />
);

interface CardTitleAddon {
  size: number;
}

const RulesPage: React.FC<RulesPageProps> = ({
  navigation,
}: RulesPageProps) => {
  const handleLinkButtonClick = (routeName: RootStackRoute) => () => {
    navigation.navigate(routeName);
  };

  const RightAddon = () => (
    <Button
      theme={DefaultTheme}
      mode="outlined"
      onPress={handleLinkButtonClick("Home")}
    >
      <T message="Home" />
    </Button>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <SafeAreaView>
          <Card.Title
            title={<T message="Rules" />}
            left={LeftContent}
            right={RightAddon}
          />
          <Card.Content>
            <Paragraph style={styles.text}>
              <T message="Within one game, the user is assigned 15 questions." />
            </Paragraph>
            <Paragraph>
              <T message="Points are awarded for each correct answer (quiz coins)" />
            </Paragraph>
            <Paragraph>
              <T message="After passing all the questions, the general stratistics of the user is formed." />
            </Paragraph>
          </Card.Content>
        </SafeAreaView>
      </Card>
    </ScrollView>
  );
};

interface RulesPageProps {
  navigation: StackNavigationProp<RootStackRoutes, "Rules">;
}

export default RulesPage;
