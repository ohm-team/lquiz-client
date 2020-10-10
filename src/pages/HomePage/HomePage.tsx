import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, View } from "react-native";
import { Button, Card, DefaultTheme, Title } from "react-native-paper";
import { T } from "react-targem";
import LocalSelector from "src/components/LocaleSelector";
import { RootStackRoute, RootStackRoutes } from "../types";
import logo from "./assets/logo.png";
import styles from "./HomePage.styles";

const HomePage: React.FC<HomePageProps> = ({ navigation }: HomePageProps) => {
  const handleLinkButtonClick = (routeName: RootStackRoute) => () => {
    navigation.navigate(routeName);
  };

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.cardImageContainer}>
          <Image source={logo} style={styles.cardImage} />
        </View>
        <Title style={styles.cardTitle}>
          <T message="Letz quiz!" />
        </Title>
        <Button
          mode="contained"
          theme={DefaultTheme}
          onPress={handleLinkButtonClick("Game")}
          style={styles.cardButton}
        >
          <T message="Play" />
        </Button>
        <Button
          mode="outlined"
          theme={DefaultTheme}
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
