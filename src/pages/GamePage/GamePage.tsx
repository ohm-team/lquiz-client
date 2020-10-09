import React from "react";
import { T } from "react-targem";
import styles from "./GamePage.styles";
import { Button, Card, Title, Avatar, ProgressBar } from "react-native-paper";

const LeftContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
  <Avatar.Text {...props} label="Q" />
);

interface CardTitleAddon {
  size: number;
}

const GamePage: React.FC<GamePageProps> = ({
  totalQuestionsCount,
  currentQuestionNumber,
  question,
  answers,
  isQuestionLoading,
  onBackButtonClick,
  onAnswerClick,
}: GamePageProps) => {
  const RightContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
    <Button onPress={onBackButtonClick}>
      <T message="Back" />
    </Button>
  );

  const handleAnswerClick = (answerId: string) => () => {
    onAnswerClick(answerId);
  };

  return (
    <Card style={styles.card}>
      <Card.Title
        title={
          <>
            <T message={"Quiz question #"} />
            {currentQuestionNumber}
          </>
        }
        subtitle={
          <>
            <T message="out of" /> {totalQuestionsCount}
          </>
        }
        left={LeftContent}
        right={RightContent}
      />
      <Card.Cover
        accessible={false}
        source={{ uri: "https://source.unsplash.com/random?quiz" }}
      />
      {isQuestionLoading ? <ProgressBar indeterminate /> : null}
      {question ? (
        <Card.Content>
          <Title style={styles.title}>
            {question.count} {question.what.toLowerCase()} <T message="in" />{" "}
            {question.where}.{" "}
            <T message="What else do you think my contain number" />{" "}
            {question.count}?
          </Title>
        </Card.Content>
      ) : null}
      {answers ? (
        <Card.Actions style={styles.buttonsContainer}>
          {answers.map((a) => (
            <Button
              key={a.id}
              onPress={handleAnswerClick(a.id)}
              style={styles.button}
              mode="contained"
            >
              {a.what} <T message="in" /> {a.where}
            </Button>
          ))}
        </Card.Actions>
      ) : null}
    </Card>
  );
};

interface GamePageProps {
  currentQuestionNumber: number;
  totalQuestionsCount: number;
  isQuestionLoading: boolean;
  question?: {
    what: string;
    count: number;
    where: string;
  } | null;
  answers?:
    | {
        what: string;
        where: string;
        id: string;
      }[]
    | null;
  onBackButtonClick: () => void;
  onAnswerClick: (answerId: string) => void;
}

export default GamePage;