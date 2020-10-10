import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, View, Platform } from "react-native";
import { Button, Card, DefaultTheme } from "react-native-paper";
import { T } from "react-targem";
import LocalSelector from "src/components/LocaleSelector";
import { RootStackRoute, RootStackRoutes } from "../types";
import logo from "./assets/logo.png";
import styles from "./HomePage.styles";
import { LinearGradient } from "expo-linear-gradient";
import { openLinkInNewTab } from "src/utils/native";

const MOBILE_APPLICATION_LINK = "https://expo.io/@ohm-team/lquiz-client";

const HomePage: React.FC<HomePageProps> = ({ navigation }: HomePageProps) => {
  const handleLinkButtonClick = (
    routeName: RootStackRoute,
    args?: any
  ) => () => {
    navigation.navigate(routeName, args);
  };

  const handleDownloadButtonClick = () => {
    openLinkInNewTab(MOBILE_APPLICATION_LINK);
  };

  return (
    <Card style={styles.card}>
      <LinearGradient
        colors={["#625772", "#9585ae", "#322c3c"]}
        locations={[0, 0.18, 1]}
        style={styles.linearGradient}
      >
        <Card.Content style={styles.cardContent}>
          <View style={styles.cardImageContainer}>
            <Image source={logo} style={styles.cardImage} />
          </View>
          {/*<Title style={styles.cardTitle}>*/}
          {/*  <T message="Letz quiz!"/>*/}
          {/*</Title>*/}
          <View style={styles.buttonsContainer}>
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
            <Button
              mode="outlined"
              theme={DefaultTheme}
              onPress={handleLinkButtonClick("Settings")}
              style={styles.cardButton}
            >
              <T message="Settings" />
            </Button>

            <Button
              mode="outlined"
              theme={DefaultTheme}
              onPress={handleLinkButtonClick("GameOver", {
                gameResults: [true, false, true],
                gamePace: [12.2, 33, 1],
              })}
              style={styles.cardButton}
            >
              <T message="GameOver" />
            </Button>

            <LocalSelector buttonStyle={styles.cardButton} />

            {Platform.OS === "web" ? (
              <Button
                icon="store"
                mode="outlined"
                theme={DefaultTheme}
                onPress={handleDownloadButtonClick}
                style={styles.cardButton}
              >
                <T message="Download an app" />
              </Button>
            ) : null}
          </View>
        </Card.Content>
      </LinearGradient>
    </Card>
  );
};

interface HomePageProps {
  navigation: StackNavigationProp<RootStackRoutes, "Home">;
}

export default HomePage;
