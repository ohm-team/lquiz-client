import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Platform, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { T } from "react-targem";
import LocalSelector from "src/components/LocaleSelector";
import { openLinkInNewTab } from "src/utils/native";
import { RootStackRoute, RootStackRoutes } from "../types";
import logo from "./assets/logo.png";
import styles from "./HomePage.styles";

const MOBILE_APPLICATION_LINK = "https://expo.io/@ohm-team/lquiz-client";
const BUTTON_THEME = {
  colors: {
    primary: "#ebeb1f",
  },
};
const HomePage: React.FC<HomePageProps> = ({ navigation }: HomePageProps) => {
  const handleLinkButtonClick = (
    routeName: RootStackRoute,
    args?: any,
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
            <Image source={logo} style={styles.cardImage}/>
          </View>
          {/*<Title style={styles.cardTitle}>*/}
          {/*  <T message="Letz quiz!"/>*/}
          {/*</Title>*/}
          <View style={styles.buttonsContainer}>
            <Button
              mode="contained"
              theme={BUTTON_THEME}
              onPress={handleLinkButtonClick("Game")}
              style={styles.cardButton}
            >
              <T message="Play"/>
            </Button>
            <Button
              mode="outlined"
              theme={BUTTON_THEME}
              onPress={handleLinkButtonClick("Rules")}
              style={styles.cardButton}
            >
              <T message="Rules"/>
            </Button>

            {Platform.OS === "web" ? (
              <Button
                mode="outlined"
                theme={BUTTON_THEME}
                onPress={handleDownloadButtonClick}
                style={styles.cardButton}
              >
                <T message="Download an app"/>
              </Button>
            ) : null}
            <LocalSelector buttonStyle={styles.cardButton} theme={BUTTON_THEME}/>
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
