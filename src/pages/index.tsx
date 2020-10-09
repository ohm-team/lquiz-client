import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomePage from "./HomePage";

const Stack = createStackNavigator();

const Pages: React.FC<HomePageProps> = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};
interface HomePageProps {}

export default Pages;
