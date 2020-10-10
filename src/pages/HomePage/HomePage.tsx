import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Platform, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { T } from "react-targem";
import LocalSelector from "src/components/LocaleSelector";
import { openLinkInNewTab } from "src/utils/native";
import ThemeToggler from "../../components/ThemeToggler";
import { useSettings } from "../../contexts/SettingsContext";
import { RootStackRoute, RootStackRoutes } from "../types";
import logo from "./assets/logo.png";
import darkLogo from "./assets/logo_dark.png";
import styles from "./HomePage.styles";

const MOBILE_APPLICATION_LINK = "https://expo.io/@ohm-team/lquiz-client";

const getButtonTheme = (isDarkTheme: boolean) => {
  return isDarkTheme ? {
      colors: {
        primary: "#a3d3cf",
      },
    } :
    {
      colors: {
        primary: "#322c3c",
      },
    };

};
const getGradientColors = (isDarkTheme: boolean): string[] => {
  return isDarkTheme ?
    ["#625772", "#9585ae", "#322c3c"] :
    ["#9585ae", "#c6b1e7", "#e3fff3"];
};
const HomePage: React.FC<HomePageProps> = ({ navigation }: HomePageProps) => {
  const { theme } = useSettings();
  const isDarkTheme = theme === "dark";
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
        colors={getGradientColors(isDarkTheme)}
        locations={[0, 0.18, 1]}
        style={styles.linearGradient}
      >
        <Card.Content style={styles.cardContent}>
          <View style={styles.cardImageContainer}>
            <Image source={isDarkTheme ? logo:darkLogo} style={styles.cardImage}/>
            <View style={styles.themeToggler}>
              <ThemeToggler withText={false}/>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <Button
              mode="contained"
              theme={getButtonTheme(isDarkTheme)}
              onPress={handleLinkButtonClick("Game")}
              style={styles.cardButton}
            >
              <T message="Play"/>
            </Button>
            <Button
              mode="outlined"
              theme={getButtonTheme(isDarkTheme)}
              onPress={handleLinkButtonClick("Rules")}
              style={styles.cardButton}
            >
              <T message="Rules"/>
            </Button>

            {Platform.OS === "web" ? (
              <Button
                mode="outlined"
                theme={getButtonTheme(isDarkTheme)}
                onPress={handleDownloadButtonClick}
                style={styles.cardButton}
              >
                <T message="Download an app"/>
              </Button>
            ) : null}
            <LocalSelector buttonStyle={styles.cardButton} theme={getButtonTheme(isDarkTheme)}/>
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
