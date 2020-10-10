import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomePage from "./HomePage";
import RulesPage from "./RulesPage";
import GamePage from "./GamePage";
import SettingsPage from "./SettingsPage";

const Stack = createStackNavigator();

const Pages: React.FC<HomePageProps> = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Rules" component={RulesPage} />
      <Stack.Screen name="Game" component={GamePage} />
      <Stack.Screen name="Settings" component={SettingsPage} />
    </Stack.Navigator>
  );
};
interface HomePageProps {}

export default Pages;
