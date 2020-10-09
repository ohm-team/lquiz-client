import React from "react";
import { T } from "react-targem";
import { Card, Paragraph } from "react-native-paper";
import styles from "./RulesPage.styles";

const RulesPage: React.FC<RulesPageProps> = () => {
  return (
    <Card style={styles.container}>
      <Paragraph>
        <T message="Here are the rules!" />
      </Paragraph>
    </Card>
  );
};
interface RulesPageProps {}

export default RulesPage;
