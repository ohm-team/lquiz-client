import React from "react";
import { T } from "react-targem";
import { Text, View } from "react-native";
import styles from "./HomePage.styles";
import LocalSelector from "src/components/LocaleSelector";

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <View style={styles.container}>
      <LocalSelector />
      <Text>
        <T message="Open up App.tsx to start working on your app!" />
      </Text>
    </View>
  );
};
interface HomePageProps {}

export default HomePage;
