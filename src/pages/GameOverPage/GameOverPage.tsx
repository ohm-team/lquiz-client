import React from "react";
import { T } from "react-targem";
import { Button, Card, Title, Avatar } from "react-native-paper";
import { Linking } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "./GameOverPage.styles";
import { RootStackRoutes } from "../types";

const LeftContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
  <Avatar.Text {...props} label="Q" />
);

interface CardTitleAddon {
  size: number;
}

const GameOverPage: React.FC<GameOverPageProps> = () => {
  const RightContent: React.FC<CardTitleAddon> = () => (
    <Button onPress={postOnFacebook}>
      <T message="Share" />
    </Button>
  );
  const postOnFacebook = () => {
    const FacebookShareURL = "https://aboutreact.com";
    const FacebookShareMessage =
      "Hello Guys, This is a testing of facebook share example";
    const facebookParameters = [
      ["u", FacebookShareURL],
      ["quote", FacebookShareMessage],
    ]
      .map(([key, value]) => `${key}=${encodeURI(value)}`)
      .join("&");
    const url = `https://www.facebook.com/sharer/sharer.php?${facebookParameters}`;
    Linking.openURL(url);
  };

  return (
    <Card style={styles.card}>
      <Card.Title
        title={<T message="Dexter Stoltenberg" />}
        subtitle={<T message="Artificial intelligence" />}
        left={LeftContent}
        right={RightContent}
      />
      <Card.Cover
        accessible={false}
        source={{ uri: "https://source.unsplash.com/random?finish" }}
      />
      <Card.Content>
        <Title style={styles.title}>
          In 2019 2042 babies were born. What else do you think my contain
          number 2042?
        </Title>
      </Card.Content>
    </Card>
  );
};

interface GameOverPageProps {
  navigation: StackNavigationProp<RootStackRoutes, "Game">;
}

export default GameOverPage;
