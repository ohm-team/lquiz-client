import React from "react";
import { ScrollView, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  ProgressBar,
  Text,
  Title,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { T } from "react-targem";
import { openLinkInNewTab } from "src/utils/native";
import { Answer, Question } from "../types";
import styles from "./GamePage.styles";
import GamePageAnswer from "./GamePageAnswer";

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
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Button onPress={onBackButtonClick}>
        <T message="Back" />
      </Button>
    </View>
  );

  const handleQuestionSourceLinkClick = () => {
    openLinkInNewTab(question!.url);
  };

  const handleAnswerSourceLinkClick = () => {
    openLinkInNewTab(question!.answerUrl);
  };

  const [whatStart, whatEnd] = (question?.whatValue || "").split("{value}");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <SafeAreaView>
          <Card.Title
            title={
              <>
                <T message={"Quiz question"} />
              </>
            }
            subtitle={
              <>
                {currentQuestionNumber} <T message="out of" />{" "}
                {totalQuestionsCount}
              </>
            }
            left={LeftContent}
            right={RightContent}
          />

          {isQuestionLoading ? <ProgressBar indeterminate /> : null}
          {question ? (
            <>
              <View style={styles.coverContainer}>
                <Card.Cover
                  accessible={false}
                  source={{
                    uri: question.imgSrc,
                  }}
                />

                {isNextButtonVisible ? (
                  <View style={styles.coverButtonContainer}>
                    <Button
                      style={styles.nextQuestionButton}
                      mode="contained"
                      onPress={onNextButtonClick}
                    >
                      {totalQuestionsCount === currentQuestionNumber ? (
                        <T message="Finish!" />
                      ) : (
                        <T message="Next question!" />
                      )}
                    </Button>
                    <View style={styles.sourceLinksContainer}>
                      <Button
                        labelStyle={styles.sourceLink}
                        onPress={handleQuestionSourceLinkClick}
                      >
                        <T message="Question source" />
                      </Button>
                      <Button
                        labelStyle={styles.sourceLink}
                        onPress={handleAnswerSourceLinkClick}
                      >
                        <T message="Answer source" />
                      </Button>
                    </View>
                  </View>
                ) : null}
              </View>
              <Card.Content>
                <Title style={styles.titleStatistics}>
                  {question.whatStatistics}
                </Title>
                <Title style={styles.title}>
                  {whatStart}
                  <Text style={styles.titleValue}>{question.value}</Text>
                  {whatEnd}.{" "}
                  <T message="What else do you think may contain number" />{" "}
                  <Text style={styles.titleValue}>
                    {question.value.toString()}
                  </Text>
                  ?
                </Title>
              </Card.Content>
            </>
          ) : null}
          {answers ? (
            <Card.Actions style={styles.buttonsContainer}>
              {answers.map((a, i) => (
                <GamePageAnswer
                  key={a.id}
                  index={i}
                  onAnswerClick={onAnswerClick}
                  isLoading={questionLoadingId === a.id}
                  isAnyQuestionLoading={questionLoadingId !== undefined}
                  isSelected={selectedAnswerId === a.id}
                  isCorrectAnswer={a.id === correctAnswerId}
                  isAnswerRevealed={isNextButtonVisible}
                  {...a}
                />
              ))}
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
