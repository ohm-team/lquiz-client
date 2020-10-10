import React from "react";
import { T } from "react-targem";
import { Question } from "../types";
import styles from "./GamePage.styles";
import {
  Button,
  Card,
  Title,
  Avatar,
  ProgressBar,
  Snackbar,
} from "react-native-paper";
import GamePageAnswer from "./GamePageAnswer";
import { SafeAreaView } from "react-native-safe-area-context";

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
  questionLoadingId,
  correctAnswerId,
  selectedAnswerId,
  isNextButtonVisible,
  onNextButtonClick,
}: GamePageProps) => {
  const RightContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
    <Button onPress={onBackButtonClick}>
      <T message="Back" />
    </Button>
  );

  return (
    <Card style={styles.card}>
      <SafeAreaView>
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
              <GamePageAnswer
                key={a.id}
                onAnswerClick={onAnswerClick}
                style={styles.button}
                contentStyle={styles.buttonContent}
                isLoading={questionLoadingId === a.id}
                isAnyQuestionLoading={questionLoadingId !== undefined}
                isSelected={selectedAnswerId === a.id}
                isCorrectAnswer={a.id === correctAnswerId}
                isAnswerRevealed={isNextButtonVisible}
                {...a}
              />
            ))}
            {isNextButtonVisible ? (
              <Button
                mode="outlined"
                style={styles.button}
                contentStyle={styles.buttonContent}
                onPress={onNextButtonClick}
              >
                <T message="Next question!" />
              </Button>
            ) : null}
          </Card.Actions>
        ) : null}

        {selectedAnswerId ? (
          correctAnswerId === selectedAnswerId ? (
            <>
              {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
              <Snackbar visible onDismiss={() => {}}>
                <T message="Hooray! This is the correct answer!" />
              </Snackbar>
            </>
          ) : (
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            <Snackbar visible onDismiss={() => {}}>
              <T message="Ohh nooo... This is an incorrect answer..." />
            </Snackbar>
          )
        ) : null}
      </SafeAreaView>
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
  isNextButtonVisible: boolean;
  question?: Question | null;
  answers?:
    | {
        what: string;
        where: string;
        id: string;
      }[]
    | null;
  onBackButtonClick: () => void;
  onAnswerClick: (answerId: string) => void;
  onNextButtonClick: () => void;
}

export default GamePage;
