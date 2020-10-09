/* eslint-disable react/prop-types */
import React from "react";
import { T } from "react-targem";
import { Button, Card, Title, Avatar } from "react-native-paper";
import { Linking } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "./GameOverPage.styles";
import { RootStackRoutes } from "../types";

const facebookShareURL = "https://aboutreact.com";

const LeftContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
  <Avatar.Text {...props} label="Q" />
);

interface CardTitleAddon {
  size: number;
}

const GameOverPage: React.FC<GameOverPageProps> = ({
  facebookShareMessage,
  userName,
  userStatus,
  correctAnswered,
  totalAnswered,
  rangCurrent,
  rangTotal,
  coins,
  pace,
  streaks,
}) => {
  const RightContent: React.FC<CardTitleAddon> = () => (
    <Button onPress={postOnFacebook}>
      <T message="Share" />
    </Button>
  );
  const postOnFacebook = () => {
    const facebookParameters = [
      ["u", facebookShareURL],
      ["quote", facebookShareMessage],
    ]
      .map(([key, value]) => `${key}=${encodeURI(value)}`)
      .join("&");
    const url = `https://www.facebook.com/sharer/sharer.php?${facebookParameters}`;
    Linking.openURL(url);
  };
  const accuracy = Math.round(correctAnswered / totalAnswered) * 100;

  return (
    <Card style={styles.card}>
      <Card.Title
        title={<T message={userName} />}
        subtitle={<T message={userStatus} />}
        left={LeftContent}
        right={RightContent}
      />
      <Card.Cover
        accessible={false}
        source={{ uri: "https://source.unsplash.com/random?finish" }}
      />
      <Card.Content>
        <Title style={styles.title}>Statistics:</Title>
        <T
          message={`accuracy: ${accuracy}% (${correctAnswered}/${totalAnswered})`}
        />
        <br />
        <T message={`rang: ${rangCurrent}/${rangTotal}`} />
        <br />
        <T message={`coins: ${coins}`} />
        <br />
        <T message={`pace: ${pace}m `} />
        <br />
        <T message={`streaks: ${streaks}`} />
      </Card.Content>
    </Card>
  );
};

interface GameOverPageProps {
  navigation: StackNavigationProp<RootStackRoutes, "GameOver">;
  facebookShareMessage: string;
  userName: string;
  userStatus: string;
  correctAnswered: number;
  totalAnswered: number;
  rangCurrent: number;
  rangTotal: number;
  coins: number;
  pace: number;
  streaks: number;
}

export default GameOverPage;
