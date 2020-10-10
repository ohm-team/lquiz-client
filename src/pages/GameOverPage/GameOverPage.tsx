/* eslint-disable react/prop-types */
import React from "react";
import { T } from "react-targem";
import { Button, Card, Avatar, Text } from "react-native-paper";
import { ProgressBar, Colors } from "react-native-paper";
import { View } from "react-native";
import styles from "./GameOverPage.styles";
import { openLinkInNewTab } from "src/utils/native";
import { RootStackRoute } from "../types";

const LeftContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
  <Avatar.Text {...props} label="G" />
);

interface CardTitleAddon {
  size: number;
}

const GameOverPage: React.FC<GameOverPageProps> = ({
  facebookShareMessage,
  facebookShareURL,
  userStatus,
  pace,
  accuracy,
  correctAnswered,
  totalAnswered,
  paceStatus,
  goto,
}) => {
  const RightContent: React.FC<CardTitleAddon> = () => (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Button mode="outlined" onPress={postOnFacebook}>
        <T message="Share" />
      </Button>
      <Button onPress={goto("Home")}>
        <T message="Home" />
      </Button>
    </View>
  );
  const postOnFacebook = () => {
    const facebookParameters = [
      ["u", facebookShareURL],
      ["quote", facebookShareMessage],
    ]
      .map(([key, value]) => `${key}=${encodeURI(value)}`)
      .join("&");
    const url = `https://www.facebook.com/sharer/sharer.php?${facebookParameters}`;
    openLinkInNewTab(url);
  };

  return (
    <Card style={styles.card}>
      <Card.Title title={userStatus} left={LeftContent} right={RightContent} />
      <Card.Cover
        accessible={false}
        source={{ uri: "https://source.unsplash.com/random?finish" }}
      />
      <Card.Content style={styles.content}>
        <Text style={styles.feedback}>
          {accuracy === 1 && (
            <T message="Congratulations! You know literally EVERYTHING about Luxembourg! How did you achieve it? " />
          )}
          {accuracy >= 0.8 && accuracy < 1 && (
            <T message="Wow! Looks like you have been reading datasets from https://data.public.lu for a long time!" />
          )}
          {accuracy >= 0.5 && accuracy < 0.8 && (
            <T message="Great job! More then a half answers are correct! It's more than a luck, its your great erudition!" />
          )}
          {accuracy > 0 && accuracy < 0.5 && (
            <T message="You know something about Luxembourg, and today you learned a bit more, isn't it great?" />
          )}
          {accuracy === 0 && (
            <T message="Not your day :( Or maybe our alorithms created an extra-hard quiz? Try again!" />
          )}
        </Text>
        <Text style={styles.text}>
          <T message="Accuracy" />: {accuracy * 100}% ({correctAnswered}/
          {totalAnswered})
        </Text>
        <ProgressBar
          style={styles.progressBar}
          progress={accuracy}
          color={Colors.red800}
        />
        <br />
        <Text style={styles.text}>
          <T message="Pace" />: {pace} <T message="seconds per question" />
        </Text>
        <ProgressBar
          style={styles.progressBar}
          progress={paceStatus}
          color={Colors.green800}
        />
      </Card.Content>
    </Card>
  );
};

interface GameOverPageProps {
  facebookShareMessage: string;
  facebookShareURL: string;
  /** статус присваиваемый пользователю по результатам конкретного опроса */
  userStatus: string;
  pace: number;
  accuracy: number;
  correctAnswered: number;
  totalAnswered: number;
  paceStatus: number;

  goto(routeName: RootStackRoute): () => void;
}

export default GameOverPage;
