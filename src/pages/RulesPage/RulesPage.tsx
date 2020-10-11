import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, Card, Paragraph, Avatar } from "react-native-paper";
import { T } from "react-targem";
import { RootStackRoute, RootStackRoutes } from "../types";
import styles from "./RulesPage.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const LeftContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
  <Avatar.Text {...props} label="R" />
);

interface CardTitleAddon {
  size: number;
}

const RulesPage: React.FC<RulesPageProps> = ({
  navigation,
}: RulesPageProps) => {
  const handleLinkButtonClick = (routeName: RootStackRoute) => () => {
    navigation.navigate(routeName);
  };

  const RightAddon = () => (
    <Button mode="outlined" onPress={handleLinkButtonClick("Home")}>
      <T message="Home" />
    </Button>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <SafeAreaView>
          <Card.Title
            title={<T message="Rules" />}
            left={LeftContent}
            right={RightAddon}
          />
          <Card.Content style={styles.content}>
            <Paragraph style={styles.text}>
              <T message="This app allows to have fun quiz with friends or colleagues and at the same moment to learn something new and fun about Luxembourg. It can be interesting for everyone from school students to elderly people, mixing random facts you have never had idea about in a game format." />
            </Paragraph>
            <Paragraph style={styles.text}>
              <T message="Within one game, you are assigned few questions based on open Luxembourg statistics from https://data.public.lu/" />
              .
            </Paragraph>
            <Paragraph style={styles.text}>
              <T message="You can measure how well you and your friends know random facts! And maybe learn something new (we don't guarantee that this information would be useful :))" />
            </Paragraph>
            <Paragraph style={styles.text}>
              <T message="Every time the questions are different: the more you play, the better you know Luxembourg!" />
            </Paragraph>
          </Card.Content>
          <Card.Title title={<T message="How it works?" />} />
          <Card.Content style={styles.content}>
            <Paragraph style={styles.text}>
              <T message="We have gathered tons of different datasets about Luxembourg, e.g. demographics, real estate prices, transportation and many others." />
            </Paragraph>
            <Paragraph style={styles.text}>
              <T message="Then we have processed those datasets, normalized them, and automatically generated hundreds of unique quiz questions about Luxembourg." />
            </Paragraph>
            <Paragraph style={styles.text}>
              <T message="Data we are using is taken from official statistics sources, so it 100% trustworthy." />
            </Paragraph>
          </Card.Content>
        </SafeAreaView>
      </Card>
    </ScrollView>
  );
};

interface RulesPageProps {
  navigation: StackNavigationProp<RootStackRoutes, "Rules">;
}

export default RulesPage;
