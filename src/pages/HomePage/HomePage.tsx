import React from "react";
import { T } from "react-targem";
import { Image } from "react-native";
import styles from "./HomePage.styles";
import LocalSelector from "src/components/LocaleSelector";
import { Button, Card, Title, Surface } from "react-native-paper";
import logo from "./assets/logo.png";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackRoutes, RootStackRoute } from "../types";

const HomePage: React.FC<HomePageProps> = ({ navigation }: HomePageProps) => {

  const handleLinkButtonClick = (routeName: RootStackRoute) => () => {
    navigation.navigate(routeName);
  };

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Surface style={styles.cardImageContainer}>
          <Image source={logo} style={styles.cardImage} />
        </Surface>
        <Title style={styles.cardTitle}>
          <T message="Letz quiz!" />
        </Title>
        <Button
          mode="contained"
          onPress={handleLinkButtonClick("Game")}
          style={styles.cardButton}
        >
          <T message="Play" />
        </Button>
        <Button
          mode="outlined"
          onPress={handleLinkButtonClick("Rules")}
          style={styles.cardButton}
        >
          <T message="Rules" />
        </Button>
        <LocalSelector buttonStyle={styles.cardButton} />
      </Card.Content>
    </Card>
  );
};
interface HomePageProps {
  navigation: StackNavigationProp<RootStackRoutes, "Home">;
}

export default HomePage;
