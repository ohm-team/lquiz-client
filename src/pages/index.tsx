import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomePage from "./HomePage";
import RulesPage from "./RulesPage";
import GameOverPage from "./GameOverPage";
import GamePage from "./GamePage";
import SettingsPage from "./SettingsPage";

const Stack = createStackNavigator();

const screenOptions = { animationEnabled: true };

const Pages: React.FC<HomePageProps> = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen options={screenOptions} name="Home" component={HomePage} />
      <Stack.Screen
        options={screenOptions}
        name="Rules"
        component={RulesPage}
      />
      <Stack.Screen
        options={screenOptions}
        name="GameOver"
        component={GameOverPage}
      />
      <Stack.Screen options={screenOptions} name="Game" component={GamePage} />
      <Stack.Screen
        options={screenOptions}
        name="Settings"
        component={SettingsPage}
      />
    </Stack.Navigator>
  );
};
interface HomePageProps {}

export default Pages;
