import React from "react";
import { T } from "react-targem";
import styles from "./GamePage.styles";
import {
  Button,
  Card,
  Title,
  Avatar,
  ProgressBar,
  Snackbar,
} from "react-native-paper";

const LeftContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
  <Avatar.Text {...props} label="Q" />
);

interface CardTitleAddon {
  size: number;
}

const successTheme = {
  colors: {
    primary: "#8BC34A",
  },
};

const warningTheme = {
  colors: {
    primary: "#FF5722",
  },
};

const getButtonTheme = (isCorrect: boolean) => {
  if (isCorrect) {
    return successTheme;
  }
  if (!isCorrect) {
    return warningTheme;
  }
  return undefined;
};

const GamePage: React.FC<GamePageProps> = ({
  totalQuestionsCount,
  currentQuestionNumber,
  question,
  answers,
  isQuestionLoading,
  onBackButtonClick,
  onAnswerClick,
  questionLoadingId,
  correctAnswerId,
  selectedAnswerId,
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
              disabled={questionLoadingId !== undefined}
              loading={questionLoadingId === a.id}
              theme={getButtonTheme(selectedAnswerId === correctAnswerId)}
            >
              {questionLoadingId === a.id ? null : (
                <>
                  {a.what} <T message="in" /> {a.where}
                </>
              )}
            </Button>
          ))}
        </Card.Actions>
      ) : null}
      {correctAnswerId === selectedAnswerId ? (
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        <Snackbar visible onDismiss={() => {}}>
          <T message="Hooray! This is the correct answer!" />
        </Snackbar>
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        <Snackbar visible onDismiss={() => {}}>
          <T message="Ohh nooo... This is an incorrect answer..." />
        </Snackbar>
      )}
    </Card>
  );
};

interface GamePageProps {
  currentQuestionNumber: number;
  totalQuestionsCount: number;
  isQuestionLoading: boolean;
  questionLoadingId?: string;
  correctAnswerId?: string;
  selectedAnswerId?: string;
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
