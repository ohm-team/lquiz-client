import React from "react";
import { T } from "react-targem";
import { Card, Paragraph } from "react-native-paper";
import styles from "./RulesPage.styles";

const RulesPage: React.FC<RulesPageProps> = () => {
  return (
    <Card style={styles.container}>
      <Paragraph>
        <T message="Within one game, the user is assigned 15 questions." />
        <T message="Points are awarded for each correct answer (quiz coins)" />
        <T message="After passing all the questions, the general stratistics of the user is formed." />
      </Paragraph>
    </Card>
  );
};
interface RulesPageProps {}

export default RulesPage;
