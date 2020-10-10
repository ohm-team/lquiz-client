import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, Card, Paragraph, Avatar } from "react-native-paper";
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
    <Button mode="outlined" onPress={handleLinkButtonClick("Home")}>
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
          <Card.Content style={styles.content}>
            <Paragraph style={styles.text}>
              <T message="Within one game, you are assigned few questions based on open Luxembourg statistics from https://data.public.lu/" />
            </Paragraph>
            <Paragraph>
              <T message="You can measure how well you and your friends know random facts! And maybe learn something new (we don't guarantee that this information would be useful :))" />
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
