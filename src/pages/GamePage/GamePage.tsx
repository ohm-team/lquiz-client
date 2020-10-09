import React from "react";
import { T } from "react-targem";
import styles from "./GamePage.styles";
import { Button, Card, Title, Avatar } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackRoutes, RootStackRoute } from "../types";

const LeftContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
  <Avatar.Text {...props} label="Q" />
);

interface CardTitleAddon {
  size: number;
}

const GamePage: React.FC<GamePageProps> = ({ navigation }: GamePageProps) => {
  const RightContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => {
    const handleLinkButtonClick = (routeName: RootStackRoute) => () => {
      navigation.navigate(routeName);
    };

    return (
      <Button onPress={handleLinkButtonClick("Home")}>
        <T message="Back" />
      </Button>
    );
  };

  return (
    <Card style={styles.card}>
      <Card.Title
        title={<T message="Quiz question #1" />}
        subtitle={<T message="out of 14" />}
        left={LeftContent}
        right={RightContent}
      />
      <Card.Cover
        accessible={false}
        source={{ uri: "https://source.unsplash.com/random?quiz" }}
      />
      <Card.Content>
        <Title style={styles.title}>
          In 2019 2042 babies were born. What else do you think my contain
          number 2042?
        </Title>
      </Card.Content>
      <Card.Actions style={styles.buttonsContainer}>
        <Button style={styles.button} mode="contained">
          Suicides in Luxembourg county in 2013
        </Button>
        <Button style={styles.button} mode="contained">
          Bottles of beers sold in Aug, 2009
        </Button>
        <Button style={styles.button} mode="contained">
          Students has been graduated from Luxmebourg philharmonie in 2019
        </Button>
        <Button style={styles.button} labelStyle={{}} mode="contained">
          Criminal cases closed in 2010
        </Button>
      </Card.Actions>
    </Card>
  );
};

interface GamePageProps {
  navigation: StackNavigationProp<RootStackRoutes, "Game">;
}

export default GamePage;
