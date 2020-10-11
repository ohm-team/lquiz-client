import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomePage from "./HomePage";
import RulesPage from "./RulesPage";
import GameOverPage from "./GameOverPage";
import GamePage from "./GamePage";
import { useLocale } from "react-targem";

const Stack = createStackNavigator();

const screenOptions = { animationEnabled: true };

const Pages: React.FC<HomePageProps> = () => {
  const { t } = useLocale();
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      headerMode="none"
      initialRouteName="Home"
    >
      <Stack.Screen
        options={{ title: t("LQuiz - Letz quiz!") }}
        name="Home"
        component={HomePage}
      />
      <Stack.Screen
        options={{ title: t("How to play?") }}
        name="Rules"
        component={RulesPage}
      />
      <Stack.Screen
        options={{ title: t("Game over") }}
        name="GameOver"
        component={GameOverPage}
      />
      <Stack.Screen
        options={{ title: t("Letz quiz!") }}
        name="Game"
        component={GamePage}
      />
    </Stack.Navigator>
  );
};
interface HomePageProps {}

export default Pages;
