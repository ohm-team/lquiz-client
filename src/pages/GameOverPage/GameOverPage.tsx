/* eslint-disable react/prop-types */
import React from "react";
import { T } from "react-targem";
import { Button, Card, Title, Avatar, Text } from "react-native-paper";
import { ProgressBar, Colors } from "react-native-paper";
import { Linking } from "react-native";
import styles from "./GameOverPage.styles";

const LeftContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
  <Avatar.Text {...props} label="Q" />
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
  return (
    <Card style={styles.card}>
      <Card.Title
        title={userStatus}
        // subtitle={<T message={userStatus} />}
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
          <T message="pace" />: {pace} <T message="seconds" />
        </Text>
        <ProgressBar progress={paceStatus} color={Colors.green800} />
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
}

export default GameOverPage;
