/* eslint-disable react/prop-types */
import React from "react";
import { T } from "react-targem";
import { Button, Card, Title, Avatar, Text } from "react-native-paper";
import { ProgressBar, Colors } from "react-native-paper";
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
  paceAvg,
  streaks,
  streaksMax,
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
  const accuracy = Math.round((100 * correctAnswered) / totalAnswered) / 100;
  const rangStatus = Math.round((100 * rangCurrent) / rangTotal) / 100;
  const paceStatus = Math.round((100 * pace) / paceAvg) / 100;
  return (
    <Card style={styles.card}>
      <Card.Title
        title={userName}
        subtitle={<T message={userStatus} />}
        left={LeftContent}
        right={RightContent}
      />
      <Card.Cover
        accessible={false}
        source={{ uri: "https://source.unsplash.com/random?finish" }}
      />
      <Card.Content>
        <Title style={styles.title}>
          <T message="Statistics" />:
        </Title>
        <Text>
          <T message="accuracy" />: {accuracy * 100}% ({correctAnswered}/
          {totalAnswered})
        </Text>
        <ProgressBar progress={accuracy} color={Colors.red800} />
        <br />
        <Text>
          <T message="coins" />: {coins} (<T message="rang" />: {rangCurrent}/
          {rangTotal})
        </Text>
        <ProgressBar progress={rangStatus} color={Colors.blue800} />
        <br />
        <Text>
          <T message="pace" />: {pace}m (<T message="streaks" />: {streaks}/
          {streaksMax})
        </Text>
        <ProgressBar progress={paceStatus} color={Colors.green800} />
      </Card.Content>
    </Card>
  );
};

interface GameOverPageProps {
  navigation: StackNavigationProp<RootStackRoutes, "GameOver">;
  facebookShareMessage: string;
  userName: string;
  /** статус присваиваемый пользователю по результатам конкретного опроса */
  userStatus: string;
  correctAnswered: number;
  totalAnswered: number;
  rangCurrent: number;
  rangTotal: number;
  coins: number;
  pace: number;
  paceAvg: number;
  streaks: number;
  streaksMax: number;
}

export default GameOverPage;
