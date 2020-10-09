import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomePage from "./HomePage";
import RulesPage from "./RulesPage";

const Stack = createStackNavigator();

const Pages: React.FC<HomePageProps> = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Rules" component={RulesPage} />
    </Stack.Navigator>
  );
};
interface HomePageProps {}

export default Pages;
