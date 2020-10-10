import React from "react";
import { T } from "react-targem";
import { Question, Answer } from "../types";
import styles from "./GamePage.styles";
import { Button, Card, Title, Avatar, ProgressBar } from "react-native-paper";
import GamePageAnswer from "./GamePageAnswer";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

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
    <ScrollView>
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

          {isQuestionLoading ? <ProgressBar indeterminate /> : null}
          {question ? (
            <>
              <Card.Cover
                accessible={false}
                source={{
                  uri: question.imgSrc,
                }}
              />
              <Card.Content>
                <Title style={styles.title}>
                  {question.what.replace("{value}", question.value.toString())}.{" "}
                  <T message="What else do you think my contain number" />{" "}
                  {question.value}?
                </Title>
              </Card.Content>
            </>
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
        </SafeAreaView>
      </Card>
    </ScrollView>
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
  answers?: Answer[] | null;
  onBackButtonClick: () => void;
  onAnswerClick: (answerId: string) => void;
  onNextButtonClick: () => void;
}

export default GamePage;
